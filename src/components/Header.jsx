import logo from '/logo-name.svg'
import { useState } from 'react'

function Header() {
  const [now, setNow] = useState(new Date())

  setInterval(() => setNow(new Date()), 1000)

  return (
    <header>
      <img src={logo} alt="Result" />
      {/* <h2>Dmitry Kanst</h2> */}
      <span>Время сейчас: {now.toLocaleTimeString()}</span>
    </header>
  )
}

export default Header 