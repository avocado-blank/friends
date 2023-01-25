import { Link } from 'react-router-dom'
import { useGetPostsQuery } from '../features/api/apiSlice'
function Home({ content }) {
  const {
    data: posts,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery()

  console.log(posts)
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
      <>
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
                  <Link className="nav-link" to={'/create'}>
                    Create
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div className="card">
          <div className="card-header text-center">
            <h1>Users</h1>
          </div>
          {posts.map((data) => (
            // console.log(data.id),
            <ul className="list-group list-group-flush" key={data.id}>
              <li className="list-group-item">
                <h4>{data.name}</h4>{' '}
              </li>
              <Link to={`/userlist/${data.id}`}>
                <button className="btn btn-sm btn-primary float-end">
                  Detail
                </button>
              </Link>
            </ul>
          ))}
        </div>
      </>
    )
  } else if (isError) {
    postContent = (
      <div className="alert alert-danger" role="alert">
        {error}
      </div>
    )
  }
  return (
    <>
      <div>{postContent}</div>
    </>
  )
}

export default Home
