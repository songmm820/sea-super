/**
 * 自动更新检测
 * 1.定时轮询：每分钟检查静态资源变化
 * 2.哈希对比：通过解析HTML中script标签指纹判断更新
 * 3.强制刷新：检测到更新后提示用户刷新页面
 */
import { mountAnyWhere } from '@/utils/dom.tsx'
import SystemUpdateModal from '@/views/System/SystemUpdateModal.tsx'

// 请求首页
let lastScripts: string[] | null = null
// 解析请求回来的html值
const scriptReg = /<script.*?src="(.*?)"/g
// 检查间隔时间(毫秒)
const timeData = 5000

async function getScripts() {
  const html = await fetch('/?timestamp=' + Date.now()).then((res) =>
    res.text()
  )
  scriptReg.lastIndex = 0 // 正则分析页面所有url地址
  const result = []
  let match

  while ((match = scriptReg.exec(html))) {
    result.push(match[1])
  }
  return result
}

async function needUpdate() {
  const newScripts = await getScripts() //调用newScripts
  if (!lastScripts) {
    //如果之前没有保存页面js地址的话，进行一次保存，初始化并存下当前数据
    lastScripts = newScripts
    return false
  }
  let result = false
  if (lastScripts.length !== newScripts.length) {
    result = true
  }
  for (let i = 0; i < lastScripts.length; i++) {
    if (lastScripts[i] !== newScripts[i]) {
      result = true
      break
    }
  }
  lastScripts = newScripts
  return result
}

// 立即刷新
const refreshNow = () => {
  setTimeout(() => {
    window.location.reload()
  }, 550)
}

// 30s后自动刷新
const autoRefresh = () => {
  setTimeout(refreshNow, 30000)
}

// 定时轮询检测更新
function AutoCheckUpdate() {
  setTimeout(async () => {
    // 调用检查更新函数
    const willUp = await needUpdate()
    if (willUp) {
      mountAnyWhere(
        <SystemUpdateModal
          visible
          afterClose={refreshNow}
          onCancel={autoRefresh}
        />,
        document.body
      )
    }

    AutoCheckUpdate()
  }, timeData)
}

// 开发环境不检测更新
if (process.env.NODE_ENV !== 'development') {
  AutoCheckUpdate()
}
