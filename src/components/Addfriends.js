import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  useGetSinglePostQuery,
  useUpdateFriendMutation,
} from '../features/api/apiSlice'
function Addfriends() {
  const { id } = useParams()
  console.log(id)
  const { data } = useGetSinglePostQuery(id)
  console.log(`from addfriend ${data}`)
  const [friend, setFriend] = useState()
  const [uuid, setUuid] = useState()
  const [updateFriend] = useUpdateFriendMutation()
  const wantUpdateData = [uuid, friend]
  const addFriend = (e) => {
    e.preventDefault()
    updateFriend({ wantUpdateData, id })
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
      <div>
        <h1>Add Friends</h1>
      </div>
      <form onSubmit={addFriend}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            UUID
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setUuid(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Add Friend
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            required
            onChange={(e) => setFriend(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </>
  )
}

export default Addfriends
