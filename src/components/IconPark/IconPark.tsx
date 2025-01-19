/**
 * Icon Component
 * @author SongMM
 * @see https://iconpark.oceanengine.com/projects
 */
import style from './index.module.css'

interface IconParkProps {
  icon: string
  color?: string
  onClick?: () => void
}

function IconPark(props: IconParkProps) {
  /**
   * Icon Click
   */
  function handleClick() {
    if (props.onClick) {
      props.onClick()
    }
  }

  return (
    <>
      <div className='flex items-center justify-center'>
        <svg className={style['icon']} onClick={() => handleClick()}>
          <use xlinkHref={`#${props.icon}`}></use>
        </svg>
      </div>
    </>
  )
}

export default IconPark
