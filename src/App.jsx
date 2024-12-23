import './App.css'
import avatar from './assets/images/avatar.jpeg'

function App() {

  return (
    <>
      <div className='w-screen h-screen bg-gray-site-900 text-white-site flex flex-col place-content-center'>
        
          <div className='self-center bg-gray-site-800 flex flex-col items-center w-[28rem] max-md:w-[20.6rem] rounded-xl py-9 max-md:py-6 gap-7 px-9 max-md:px-6'>
            
            <div className='w-full'>
              <img src={avatar} alt="" className='rounded-full w-24 place-self-center'/>
            </div>

            <div className='w-full text-center flex flex-col gap-2'>
              <h1 className='font-font-weights-700 text-3xl'> Jessica Randall </h1>
              
              <p className='text-green-site'> London, United Kingdom </p>
            </div>

            <div className='w-full flex flex-col text-center gap-[1rem]'>
              <p className='text-white-site text-font-size-paragraph mb-2'> "Front-end developer and avid reader." </p>

              <input type="button" value="GitHub" className='bg-gray-site-700 w-full rounded-md py-3 btStyle'/>
              <input type="button" value="Frontend Mentor" className='bg-gray-site-700 w-full rounded-md py-3 btStyle'/>
              <input type="button" value="LinkedIn" className='bg-gray-site-700 w-full rounded-md py-3 btStyle'/>
              <input type="button" value="Twitter" className='bg-gray-site-700 w-full rounded-md py-3 btStyle'/>
              <input type="button" value="Instagram" className='bg-gray-site-700 w-full rounded-md py-3 btStyle'/>
            </div>

          </div>

      </div>
    </>
  )
}

export default App
