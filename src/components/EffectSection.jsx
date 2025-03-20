import { useEffect, useState } from "react"
import Button from "./Button/Button"
import Modal from "./Modal/Modal"

function EffectSection() {
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  async function fetchUsers(params) {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={() => setModal(true)}>Открыть информацию</Button>

      <Modal open={modal}>
        <h3>Hello from Modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente praesentium doloremque earum asperiores explicabo commodi voluptatibus porro illum. Deleniti eius adipisci consequuntur culpa impedit. Corrupti culpa itaque labore molestiae repudiandae.</p>
        <Button onClick={() => setModal(false)}>Close Modal</Button>
      </Modal>

      { loading && <p>Loading...</p> }

      { !loading && <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul> }
    </section>
  )
}

export default EffectSection