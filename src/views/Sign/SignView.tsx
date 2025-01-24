/**
 * Router List Config
 * @author SongMM
 */
import Bg from '@/assets/img/login_reg_bg.png'
import { CSSProperties } from 'react'
import SignTypeCards from '@/views/Sign/SignTypeCard/SignTypeCards.tsx'

function SignView() {
  return (
    <div
      className='h-full flex items-center justify-center'
      style={SignWrapperStyle}
    >
      <SignTypeCards />
    </div>
  )
}

const SignWrapperStyle: CSSProperties = {
  backgroundImage: `url(${Bg})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center'
}

export default SignView
