import Logo from '../../assets/logo.svg'
import './style.scss'

export default function Navbar() {
  return (
   <nav className='navbar'>
    <div>menu</div>
    <div><img src={Logo} alt="Logo" /></div>
    <div>cart</div>
   </nav>
  )
}
