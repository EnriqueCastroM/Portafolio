import Ecommerce from '../assets/Ecommerce.png'
import Anbu from '../assets/Anbu.png'
import Pokedex from '../assets/Pokedex.png'
import Pinterest from '../assets/Pinterest.png'
import Khokoco from '../assets/Khokoco.png'
import Vynil from '../assets/Vynil.png'
import Cajero from '../assets/Cajero.png'
import Prime from '../assets/Prime.png'
import Jwt from '../assets/Ecommerceapi.png'
import Apiamazon from '../assets/Apiamazon.png'
const Portafolio = () => {
  return (

    <>
      <section id='portafolio'>
        <div class='bg-white'>
          <div class='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
            <h2 class='mt-1 text-lg font-medium text-gray-900'>Projects</h2>
            <div class='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
              <a href='https://amazoncln.netlify.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Prime} alt='App made with react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Amazon Prime Clon</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Desarrollo de un sitio full-stack de catálogo de películas, basado en el paradigma Modelo-Vista-Controlador, usuario: admin password: admin</p>
                <p class='mt-1 text-lg font-small text-gray-900'>Frontend.
                  HTML
                  Javascript
                  Librería o Framework (React JS, Vue JS etc.) (Optional)
                  Libreria o Framework de estilos (Tailwind,Semantic UI, Normalize, Bootstrap etc)
                  CSS
                  Fetch/Axios/AJAX (Optional)
                  Apollo Client
                  Node JS
                  GraphQL
                  NPM
                </p>
                <p class='mt-1 text-lg font-small text-gray-900'>Backend.
                  MongoDB
                  GraphQL
                  Github
                  Node JS
                  GraphQL
                  NPM
                </p>
              </a>
              <a href='https://streaming-platform-backend-production.up.railway.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Apiamazon} alt='App made with react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Amazon Prime Clon - Backend GraphQL MongoDB</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Desarrollo de API REST con Node JS y GraphQL Yoga, funcionalidades:
                  Crear una pelicula,
                  Borrar una pelicula,
                  Actualizar el numero de likes de cada pelicula,
                  Listar todas las peliculas.
                </p>
              </a>
              <a href='https://khokoco.netlify.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Khokoco} alt='App made with react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Khokoco - React</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Landing Page para Khokoco una empresa Méxicana encargada de distruibuir arena para gatos de la marca Cat & Clean, en la zona metropolitana de guadalajara, es un proyecto propio que llevo a la par con mi esposa, actualmente contamos con 192+ clientes satisfechos con el producto.</p>
              </a>
              <a href='https://vinylneon.netlify.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Vynil} alt='App made with react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Vynil Neon - React</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Pagina web sencilla creada con React y tailwind para una banda de rock local que tuve la oportunidad de ver en vivo en mi ciudad Guadalajara, Jalisco, vayan chequen su proyecto, musica y denles love gracias.</p>
              </a>
              <a href='https://ecommerce-enrique.netlify.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Ecommerce} alt='App made with react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Ecommerce - React</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: e-Commerce con React (sitio de comercio electrónico) a partir de consumir una API de un backend genérico proporcionado.</p>
              </a>
              <a href='https://json-server-jwt-production.up.railway.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Jwt} alt='App made with react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Ecommerce API - NodeJs Express JWT</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Ejemplo de Mock de API de eCommerce usando JSON Server con JWT para soporte de login, register y rutas protegidas.</p>
              </a>
              <a href='https://anbuthegame.netlify.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Anbu} alt='App made with Unity and react' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Platformer Game 2D - Unity C#</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Juego tipo Metroidvania hecho con Unity, C#, WEBGl, React, instrucciones, se mueve con flechas o ASDW, space para brincar, shift para el dash, escribeme un comentario que te gustaria ver en el juego.</p>
              </a>

              <a href='https://pokedexnodejs-production.up.railway.app' class='group'>
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
              <a href='https://cajeroaut.netlify.app' class='group'>
                <div class='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
                  <img src={Cajero} alt='cajero' class='h-full w-full object-cover object-center group-hover:opacity-75' />
                </div>
                <h3 class='mt-4 text-sm text-gray-700'>Cajero Automatico - HTML Javascript</h3>
                <p class='mt-1 text-lg font-medium text-gray-900'>Proyecto: Crea una aplicación web con JavaScript donde simulemos la interacción con un cajero automático, Usuario: Enrique Contraseña: 123.</p>
              </a>
            </div>
          </div>

        </div>
      </section>
      <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-6' id='curriculum'>
        <a href='/'>
          <button class='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>
            Go up!
          </button>
        </a>
      </div>
    </>
  )
}
export default Portafolio
