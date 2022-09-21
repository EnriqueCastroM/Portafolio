import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <div className='navbar'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/portafolio'>Portfolio</Link>
            </li>
            <li>
              <Link to='/contacto'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Navbar
