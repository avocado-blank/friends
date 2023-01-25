import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useCreatePostMutation } from '../features/api/apiSlice'

function Create() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nickname, setNickname] = useState('')
  const [friendlist, setFriendlist] = useState([])

  const navigate = useNavigate()
  const [addUser] = useCreatePostMutation()
  const userdata = { name, email, phone, nickname, friendlist }
  console.log(userdata)
  const addHandler = (e) => {
    e.preventDefault()
    setFriendlist([])
    addUser(userdata)
    console.log('createUser')
    navigate('/')
  }
  return (
    <>
      <div className="nav">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to={'/'}>
                  Home
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <form onSubmit={addHandler}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nickname" className="form-label">
            Nickname
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            required
            onChange={(e) => {
              setNickname(e.target.value)
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  )
}

export default Create
