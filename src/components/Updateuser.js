import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useUpdatePostMutation } from '../features/api/apiSlice'
function Updateuser() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [updatpost] = useUpdatePostMutation()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [nickname, setNickname] = useState('')
  const wantUpdateData = { name, email, phone, nickname, id }
  //   console.log(wantUpdateData)
  const updateHandler = (e) => {
    e.preventDefault()
    // console.log('post update')
    updatpost(wantUpdateData)
    navigate(`/userlist/${id}`)
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
                <Link className="nav-link" to={`/userlist/${id}/`}>
                  Back
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <form onSubmit={updateHandler}>
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
          Update
        </button>
      </form>
    </>
  )
}

export default Updateuser
