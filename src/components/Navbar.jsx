import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>

      <div className='navbar'>
        <nav>
          <ul>
            <li>
              {/* <Link to='/'>Home</Link> */}
              <a href="/">Home</a>
            </li>
            <li>
              {/* <Link to='/portafolio'>Portfolio</Link> */}
              <a href="#portafolio">Portfolio</a>
            </li>
            <li>
              {/* <Link to='/contacto'>Contact</Link> */}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Navbar
