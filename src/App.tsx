import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="links">
        <div>
        <a href="https://www.youtube.com/@AmandaKathleen15">
        <button href="https://www.youtube.com/@AmandaKathleen15">
        Youtube
        </button>
        </a>
        </div>
      <div>
      <a href="https://wa.me/qr/Z23G7IYLE7QOJ1">
      <button>
      Whatsapp
      </button>
      </a>
      </div>
      <div>
      <a href="https://www.instagram.com/amanda_kathleen15/">
      <button>
      Instagram
      </button>
      </a>
      </div>
      <div>
      <button>
      Site
      </button>
      </div>
      </div>
    </>
  )
}

export default App
