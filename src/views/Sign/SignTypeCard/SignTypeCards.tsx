/**
 * Guest Sign Card
 * @author SongMM
 */

import style from './index.module.scss'
import { useNavigate } from 'react-router-dom'

enum SignType {
  GUEST = 'GUEST',
  TEL = 'TEL',
  WECHAT = 'WECHAT',
  QQ = 'QQ'
}

interface SignTypeCardProps {
  type: SignType
  name: string
  color: string
}

const SIGN_TYPES: SignTypeCardProps[] = [
  {
    type: SignType.GUEST,
    name: '游客登录',
    color: '#67aaf7'
  },
  {
    type: SignType.TEL,
    name: '手机登录',
    color: '#dda36c'
  },
  {
    type: SignType.WECHAT,
    name: '微信登录',
    color: '#7b9e6a'
  },
  {
    type: SignType.QQ,
    name: 'QQ登录',
    color: '#bc8acf'
  }
]

function GuestSign() {
  const navigate = useNavigate()

  function onSign(type: SignType) {
    switch (type) {
      case SignType.GUEST:
        navigate('/dashboard')
        break
      default:
        break
    }
  }

  return (
    <div className={style['type-cards']}>
      {SIGN_TYPES.map((item) => {
        return (
          <div
            key={item.type}
            className={style.card}
            style={{ background: item.color }}
            onClick={() => onSign(item.type)}
          >
            <p className={style.tip}>{item.name}</p>
          </div>
        )
      })}
    </div>
  )
}
export default GuestSign
