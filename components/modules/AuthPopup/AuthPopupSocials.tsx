import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faGoogle,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const AuthPopupSocials = ({
  handleSignupWithOAuth,
}: {
  handleSignupWithOAuth: VoidFunction
}) => (
  <div className='cart-body__socials'>
    <button
      className='btn-reset socials__btn gh-color'
      onClick={handleSignupWithOAuth}
    >
      <FontAwesomeIcon icon={faGithub} beat />
    </button>
    <button
      className='btn-reset socials__btn g-color'
      onClick={handleSignupWithOAuth}
    >
      <FontAwesomeIcon icon={faGoogle} shake />
    </button>
    <button
      className='btn-reset socials__btn ig-color'
      onClick={handleSignupWithOAuth}
    >
      <FontAwesomeIcon icon={faInstagram} bounce />
    </button>
    <button
      className='btn-reset socials__btn linkedin-color'
      onClick={handleSignupWithOAuth}
    >
      <FontAwesomeIcon icon={faLinkedin} shake />
    </button>
  </div>
)

export default AuthPopupSocials
