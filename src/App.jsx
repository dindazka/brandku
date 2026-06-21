import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from '../components/Header'

function App() {
  const [features] = useState(featureData);


  return (
    <>
    <Header />
    <CardGrid features={features} />
    <footer className="bg-gray-900 text-gray-400 text-center py-8 px-8 text-sm">
      <p>&copy; 2026 Brandku. All rights reserved</p>
    </footer>
    </>
  )
}

export default App;
