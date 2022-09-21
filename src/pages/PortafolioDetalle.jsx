import { useParams, useNavigate } from 'react-router-dom'

const PortafolioDetalle = () => {
  const proyectos = [
    { id: 1, nombre: 'Pinterest', desc: 'Un clon de pinterest con HTML y CSS' },
    { id: 2, nombre: 'Juego Plataforma 2D', desc: 'Simulador de cajero autómatico con HTML, CSS y JS' },
    { id: 3, nombre: 'Pokédex', desc: 'Consumir la PokéAPI y mostrar un listado de Pokémons con HTML, CSS, y JS ' },
    { id: 4, nombre: 'Ecommerce', desc: 'Proyecto: e-commerce (sitio de comercio electrónico) con React a partir de consumir una API de un backend genérico proporcionado' }

  ]

  const { pid } = useParams() // Tiene el número que yo le mando en la ruta
  const navigate = useNavigate() // Cambio de ruta programaticamente
  return (
    <>
      <h3>ID: {proyectos[pid - 1].id}</h3>
      <h3 />
      <p />
      <div class='max-w-sm rounded overflow-hidden shadow-lg'>
        <img class='w-full' src='' alt='previewproyecto' />
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2'>Nombre: {proyectos[pid - 1].nombre}</div>
          <p class='text-gray-700 text-base'>
            Descripción: {proyectos[pid - 1].desc}
          </p>
        </div>
        <div class='px-6 pt-4 pb-2'>
          <a class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>Link to project</a>
        </div>
      </div>
      <button
        class='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' onClick={() => {
          navigate(-1)
          // Si quiero ir a la página anterior del historial: navigate(-1)
          // Si quiero ir a la página siguiente del historial: navigate(1)
        }}
      >Go back!
      </button>
    </>
  )
}
export default PortafolioDetalle
