import { useState, useRef } from "react"
import Button from "./Button/Button"

function StateVsRef() {
  const input = useRef()
  const [show, setShow] = useState(false)

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setShow(true)
    }
  }

  return (
    <div>
      <h3>Input value: {show && input.current.value}</h3>
      <input ref={input} type="text" className="control" onKeyDown={handleKeyDown} />
    </div>
  )
}

function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'error'
  })
  // const [name, setName] = useState('')
  // const [hasError, setHasError] = useState(true)
  // const [reason, setReason] = useState('error')

  function handleNameChange(event) {
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0)
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
  }

  // function toggleError() {
  //   // setHasError((prev) => !prev)
  // }

  return (
    <section>
      <h3>Обратная связь</h3>

      {/* <Button onClick={toggleError}>Toggle Error</Button> */}

      <form style={{marginBottom: '1rem'}}>
        <label htmlFor="name">Ваше имя:</label>
        <input
          type="text"
          id="name"
          className="control"
          value={form.name}
          onChange={handleNameChange}
          style={{
            border: form.hasError ? '1px solid red' : null
          }}
        />

        <label htmlFor="reason">Причина обращения:</label>
        <select id="reason" className="control" value={form.reason} onChange={(event) => setForm(prev => ({ ...prev, reason: event.target.value }))} >
          <option value="error">Ошибка</option>
          <option value="help">Нужна помощь</option>
          <option value="suggest">Предложение</option>
        </select>

        <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>


      </form>
      <StateVsRef />
    </section>
  )
}

export default FeedbackSection