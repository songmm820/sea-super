/**
 * 插件：图片压缩
 * @author songmm
 */

import { memo } from 'react'
import { BasePlugin } from '@/configs/base.ts'
import ImageCompressionUsePlugin from '@/views/Plugins/ImagePlugin.tsx'

const MemoizedPluginComponent = memo(ImageCompressionUsePlugin)

/** ==================== 类型定义 ==================== */

/**
 * 类型：压缩倍率
 */
type CompressionQuality =
  | 0.1
  | 0.2
  | 0.3
  | 0.4
  | 0.5
  | 0.6
  | 0.7
  | 0.8
  | 0.9
  | 1

/**
 * 类型：压缩目标文件格式
 */
export const COMPRESSION_EXTS = [
  'image/jpeg',
  'image/png',
  'image/webp',
  'image/gif'
] as const

type CompressionTargetExt = (typeof COMPRESSION_EXTS)[number]

/**
 *
 * @param image 压缩的图片
 * @param quality 压缩倍率 压缩率：0.1 ~ 1
 * @param targetExt 压缩目标文件格式
 * @param minSizeThreshold 最小压缩阈值
 * @returns Promise<File> 压缩后的图片
 */
async function compressImage(
  image: File,
  quality: CompressionQuality,
  targetExt: CompressionTargetExt,
  minSizeThreshold: number
): Promise<File> {
  // 如果图片尺寸小于指定阈值，则直接返回原始图片 (默认原图小于1M的图片不进行压缩)
  if (image.size < minSizeThreshold * 1024 ** 2) {
    return image
  }

  return new Promise<File>((resolve, reject) => {
    const reader = new FileReader()
    // 监听文件读取成功
    reader.onload = function (event: ProgressEvent<FileReader>) {
      const img = new Image()
      // 监听图片加载成功
      img.onload = function () {
        // 创建canvas
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')
        // 如果获取不到canvas上下文，则抛出错误
        if (!ctx) {
          reject(new Error('无法获取 Canvas 上下文'))
          return
        }
        // 设置canvas尺寸
        canvas.width = img.width
        canvas.height = img.height
        // 将图片绘制到 canvas 上
        ctx.drawImage(img, 0, 0, img.width, img.height)
        // 压缩图片并转为 Blob
        canvas.toBlob(
          (blob) => {
            // 将 Blob 转换为 File 对象
            if (blob) {
              const compressedFile = new File([blob], image.name, {
                type: targetExt,
                lastModified: Date.now()
              })
              // 返回压缩后的文件
              resolve(compressedFile)
            } else {
              reject(new Error('图片压缩失败'))
            }
          },
          targetExt, // 设置输出格式为
          quality // 设置压缩质量
        )
      }

      // 将文件读取结果赋值给 img 的 src 属性
      img.src = event.target?.result as string
    }

    // 监听文件读取失败
    reader.onerror = (error) => {
      reject(new Error('文件读取失败: ' + error.target?.error))
    }

    // 开始读取文件
    reader.readAsDataURL(image)
  })
}

/**
 * 类型：图片压缩插件
 */
export interface ImageCompressionPlugin extends BasePlugin {
  /**
   * 压缩倍率
   * 默认：0.5
   */
  readonly quality: CompressionQuality
  /**
   * 压缩目标图片的格式
   */
  readonly targetExt: CompressionTargetExt
  /**
   * 最小压缩阈值 小于该阈值则不进行压缩
   */
  readonly minSizeThreshold: number
  /**
   * 压缩图片函数
   */
  compress: (image: File) => Promise<File>
}

/**  ==================== 插件实现 ====================  */

/**
 * 默认压缩选项
 */
const DEFAULT_COMPRESSION_OPTIONS = {
  targetExt: 'image/jpeg' as CompressionTargetExt,
  minSizeThreshold: 1 // 1MB
}

/**
 * 图片压缩插件
 */
export class ImageCompression implements ImageCompressionPlugin {
  constructor(
    public readonly name: string,
    public readonly version: string,
    public readonly quality: CompressionQuality,
    public readonly targetExt: CompressionTargetExt = DEFAULT_COMPRESSION_OPTIONS.targetExt,
    public readonly minSizeThreshold: number = DEFAULT_COMPRESSION_OPTIONS.minSizeThreshold
  ) {}

  /**
   * 压缩图片的实现函数
   * @return Promise<File> 压缩后的图片
   * @param image 待压缩的图片
   * @param quality 压缩倍率
   * @param targetExt 压缩目标图片的格式
   * @param minSizeThreshold 最小压缩阈值 小于该阈值则不进行压缩
   */
  async compress(
    image: File,
    quality: CompressionQuality = this.quality,
    targetExt: CompressionTargetExt = this.targetExt,
    minSizeThreshold: number = this.minSizeThreshold
  ): Promise<File> {
    return await compressImage(image, quality, targetExt, minSizeThreshold)
  }

  readonly render = () => {
    return <MemoizedPluginComponent plugin={this} />
  }
}

/**  ==================== 插件初始化实例 ====================  */

/**
 * 使用工厂模式创建实例
 * 实例化图片压缩插件
 * 默认：压缩倍率：0.5 最小压缩阈值：1M
 */
export function createImageCompression(): ImageCompression {
  return new ImageCompression('图片压缩', '1.0.0', 0.5, 'image/jpeg', 1)
}

export const ImageCompressionInstance = createImageCompression()
