/* This example requires Tailwind CSS v2.0+ */
import { PaperClipIcon } from '@heroicons/react/20/solid'
import ExampleDoc from '../assets/Curriculum.pdf'
// import ProfilePicture from '../assets/Pp.jfif'
import ProfilePicture from '../assets/Pp.jpg'

export default function Home () {
  return (
    <div>
      <div className='overflow-hidden bg-white shadow sm:rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
          <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
            <dt className='text-md font-medium text-gray-500'>About</dt>
            <img src={ProfilePicture} alt='' className='profile-picture' />

            <dd className='mt-1 text-md text-gray-500 sm:col-span-2 sm:mt-0'>
              Hello World! I'm a motivated Software Developer who has 1 year of experience building and scaling web applications and services in various domains. I'm also passionate about indie videogames development, ethical hacking, break and build stuff, ready to work in high impact environment in a tech company, and contribute to grow development teams by helping build great products, applications, services and games. Thank you for share your time with me here, take a look of my Portfolio Projects and Contact me if you are interested in my profile!
            </dd>
          </div>
        </div>
        <div className='border-t border-gray-200'>
          <dl>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Full name</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>Enrique Iván Castro Medina</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Role</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>FullStack Developer</dd>
            </div>
            <div className='bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Email address</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>kcmtha@gmail.com</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
              <dt className='text-sm font-medium text-gray-500'>Skills:</dt>
              <dd className='mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0'> Git y Github / HTML y CSS(tailwind SASS) / JavaScript( ES6+ y POO) / Node.js(Async, EventLoops, APIs) / React.js MongoDB (JWT, RestAPI, GraphQL)</dd>
            </div>
            <div className='bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6' id='curriculum'>
              <dt className='text-sm font-medium text-white-500'>Attachments</dt>
              <dd className='mt-1 text-sm text-white-900 sm:col-span-2 sm:mt-0'>
                <ul role='list' className='divide-y divide-white-200 rounded-md border border-gray-200'>
                  <h1 className='flex items-center justify-between py-3 pl-3 pr-4 text-sm'>
                    <div className='flex w-0 flex-1 items-center'>
                      <PaperClipIcon className='h-5 w-5 flex-shrink-0 text-gray-400' aria-hidden='true' />
                      <span className='ml-2 w-0 flex-1 truncate'>Curriculum.pdf</span>
                    </div>
                    <div className='ml-4 flex-shrink-0'>
                      <a href={ExampleDoc} download='EnriqueCastroCV' className='font-medium text-indigo-600 hover:text-indigo-500'>
                        Download
                      </a>
                    </div>
                  </h1>

                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
