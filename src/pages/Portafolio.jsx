/* import { Link, Outlet } from 'react-router-dom' */
import Ecommerce from '../assets/Ecommerce.png'
import Anbu from '../assets/Anbu.png'
import Pokedex from '../assets/Pokedex.png'
import Pinterest from '../assets/Pinterest.png'
import Brujas from '../assets/Brujas.png'
const Portafolio = () => {
  return (

    <>
      <div class='bg-white'>
        <div class='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
          <h2 class='sr-only'>Projects</h2>

          <div class='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
            <a href='https://ecommerce-enrique.netlify.app' class='group'>
              <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                <img src={Ecommerce} alt='App made with react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
              </div>
              <h3 class='mt-4 text-sm text-gray-700'>Ecommerce - React</h3>
              <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: e-Commerce con React (sitio de comercio electrónico) a partir de consumir una API de un backend genérico proporcionado.</p>
            </a>

            <a href='https://anbu-react.netlify.app/' class='group'>
              <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                <img src={Anbu} alt='App made with Unity and react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
              </div>
              <h3 class='mt-4 text-sm text-gray-700'>Platformer Game 2D - Unity C#</h3>
              <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Juego tipo Metroidvania hecho con Unity, C#, WEBGl, React</p>
            </a>

            <a href='https://pokedex1gen-nodejs.herokuapp.com/' class='group'>
              <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                <img src={Pokedex} alt='PokeAPI NodeJs' class='h-full w-full object-cover object-center group-hover:opacity-75' />
              </div>
              <h3 class='mt-4 text-sm text-gray-700'>Pokédex - NodeJs Express</h3>
              <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Pintar en una web todos los Pokémon con opción de búsqueda y paginación a partir de consumir la PokeAPI utilizando NodeJs.</p>
            </a>

            <a href='https://pinterestclona.netlify.app/' class='group'>
              <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                <img src={Pinterest} alt='Pinterest HTML CSS' class='h-full w-full object-cover object-center group-hover:opacity-75' />
              </div>
              <h3 class='mt-4 text-sm text-gray-700'>Pinterest Clone - HTML CSS</h3>
              <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: hacer lo más parecido el diseño de pinterest HTML / CSS Vanilla.</p>
            </a>
            <a href='https://brujasenlacecreativo.com/' class='group'>
              <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                <img src={Brujas} alt='PHP project' class='h-full w-full object-cover object-center group-hover:opacity-75' />
              </div>
              <h3 class='mt-4 text-sm text-gray-700'>Client Request - PHP MySQL</h3>
              <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: sitio web montado en PHP vanilla para un cliente que requiere una base de datos a partir de un formulario de registro. Work in progress...</p>
            </a>
          </div>
        </div>
      </div>
      {/* <ul>
        <li>
          <Link to='/portafolio/1'>Pinterest</Link>
        </li>
        <li>
          <Link to='/portafolio/2'>Juego Plataforma 2D</Link>
        </li>
        <li>
          <Link to='/portafolio/3'>Pokédex</Link>
        </li>
        <li>
          <Link to='/portafolio/4'>E-commerce</Link>
        </li>
      </ul>
      <Outlet /> */}

    </>
  )
}
export default Portafolio
