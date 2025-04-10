/**
 * Views：插件分组
 * @author songmm
 */
import { PluginGroup, pluginGroups } from '@/configs/base.ts'

function Groups() {
  // 点击分组
  const handleClickGroupItem = (group: PluginGroup) => {
    console.log(group)
  }

  // 分组 item
  const GroupItem = (props: { group: PluginGroup }) => {
    const { group } = props
    return (
      <div
        className='cursor-pointer w-[200px] h-[140px] common-shadow bg-[rgba(255,255,255,0.5)] backdrop-blur-[10px] rounded-[6px] flex flex-col items-center justify-center transition hover:scale-[1.05]'
        onClick={() => handleClickGroupItem(group)}
      >
        <div>12</div>
        <div className='font-bold text-[16px]'>{group.name}</div>
        <div>{group.plugins.length}个工具</div>
      </div>
    )
  }

  // 分组 list
  const GroupList = () => {
    return (
      <div className='flex flex-wrap gap-[16px] justify-center'>
        {pluginGroups.map((group) => (
          <GroupItem key={group.name} group={group} />
        ))}
      </div>
    )
  }

  return <GroupList />
}

export default Groups
