import { useState } from 'react'

function App() {
  const [hoverLeft, setHoverLeft] = useState(false)
  const [hoverRight, setHoverRight] = useState(false)

  return (
    <div className='relative'>
      <div
        className={`min-h-screen absolute bg-no-repeat bg-cover transition-all duration-1000 left-0 w-1/2 ${
          hoverLeft && 'w-2/3'
        } ${hoverRight && 'w-1/3'}
        }`}
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
        }}
        onMouseOver={() => setHoverLeft(true)}
        onMouseLeave={() => setHoverLeft(false)}
      >
        <div className='bg-green-800 h-full w-full opacity-50 absolute'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h2 className='text-bold text-white text-4xl mb-4'>Forest</h2>
          <button className='text-white border border-white px-4 py-2 hover:bg-white hover:text-black'>
            Button
          </button>
        </div>
      </div>
      <div
        className={`min-h-screen absolute bg-no-repeat bg-cover transition-all duration-1000 right-0 w-1/2 ${
          hoverRight && 'w-2/3'
        } ${hoverLeft && 'w-1/3'}
        }`}
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60')`,
        }}
        onMouseOver={() => setHoverRight(true)}
        onMouseLeave={() => setHoverRight(false)}
      >
        <div className='bg-blue-800 h-full w-full opacity-50 absolute'></div>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
          <h2 className='text-bold text-white text-4xl mb-4'>Ocean</h2>
          <button className='text-white border border-white px-4 py-2 hover:bg-white hover:text-black'>
            Button
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
