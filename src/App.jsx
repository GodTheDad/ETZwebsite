import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import SecFrom from './components/SecFrom'
import Mainimg from './components/Mainimg'
import ContactUs from './components/ContactUs'

function App() {

  return (
      <>
      <Mainimg/>
      <SecFrom/>
      <ContactUs/>
      </>
  )
}

export default App
