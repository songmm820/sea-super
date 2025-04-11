/**
 * 插件使用页面：图片压缩插件
 * @author songmm
 */
import { ImageCompressionPlugin } from '@/configs/media-handle/image-compression.tsx'

interface IImageCompressionPluginProps {
  /* 插件信息 */
  plugin: ImageCompressionPlugin
}

function ImageCompressionUsePlugin(props: IImageCompressionPluginProps) {
  const { plugin } = props

  return <div>{JSON.stringify(plugin)}</div>
}

export default ImageCompressionUsePlugin
