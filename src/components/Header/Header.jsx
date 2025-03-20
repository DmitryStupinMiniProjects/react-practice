import logo from '/logo-name.svg'
import { useEffect, useState } from 'react'
import './Header.css'

function Header() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000)
  }, [])

  return (
    <header>
      <img src={logo} alt="Result" />
      {/* <h2>Dmitry Kanst</h2> */}
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header 