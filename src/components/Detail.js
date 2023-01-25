import {
  useGetSinglePostQuery,
  useDeletePostMutation,
} from '../features/api/apiSlice'
import { useNavigate, useParams, Link } from 'react-router-dom'

function Detail() {
  const { id } = useParams()
  const { data, isLoading, isSuccess, isError, error } = useGetSinglePostQuery(
    id,
  )
  const [deleteUser] = useDeletePostMutation()
  const navigate = useNavigate()
  console.log(data)
  //   console.log(data.friendlist)
  //   const friends = data.friendlist
  let postContent
  if (isLoading) {
    postContent = (
      <div className="d-flex justify-content-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  } else if (isSuccess) {
    postContent = (
      <div>
        <div className="nav">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={'/'}
                  >
                    Home
                  </Link>
                  <Link
                    className="nav-link"
                    to={`/userlist/${data.id}/addfriend`}
                  >
                    Add Friends
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="card">
          <div className="card-header text-center">
            <h1>{`${data.name}'s Details`}</h1>
          </div>
          <ul className="list-group list-group-flush" key={data.id}>
            <li className="list-group-item">
              <h4>{data.name}</h4>{' '}
            </li>
            <li className="list-group-item">{`Nickname:${data.nickname}`}</li>
            <li className="list-group-item">{`Email:${data.email}`}</li>
            <li className="list-group-item">{`Phone:${data.phone}`}</li>
            {/* <button className="btn btn-sm btn-primary">Detail</button> */}
            {data.friendlist.length ? (
              <li className="list-group-item">
                <h4>{`${data.name}'s Friends`}</h4>{' '}
              </li>
            ) : (
              <br />
            )}
            {data.friendlist?.map((friend) => (
              <li className="list-group-item" key={friend.uuid}>
                {friend.name}
              </li>
            ))}
          </ul>
        </div>
        <Link to={`/userlist/${id}/updateuser`}>
          <button className="btn btn-sm btn-primary">Edit User</button>
        </Link>
        <button
          className="btn btn-sm btn-danger"
          onClick={() => {
            console.log(data.id)
            deleteUser(data.id)
            navigate('/')
          }}
        >
          Delete User
        </button>
      </div>
    )
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }
  return <>{postContent}</>
}

export default Detail
