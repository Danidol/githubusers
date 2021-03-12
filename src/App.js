import React, { useState, useEffect } from "react"
const url = "https://api.github.com/users"

const App = () => {
  const [users, setUsers] = useState([])
  const [loading, isLoading] = useState(true)
  const [error, isError] = useState(false)

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          isLoading(false)
          isError(true)
          throw new Error("Users don't exist")
        }
      })
      .then((users) => {
        setUsers(users)
        isLoading(false)
      })
      .catch((err) => console.log(err))
  }, [])

  if (loading) {
    return (
      <div className="message">
        <h1>loading...</h1>
      </div>
    )
  }

  if (error) {
    return (
      <div className="message">
        <h1>error...</h1>
        <p>check if the url is correct</p>
      </div>
    )
  }

  return (
    <>
      <header>
        <h1>GitHub Users</h1>
      </header>
      <div className="container">
        {users.map((user) => {
          const { login, id, avatar_url, url } = user
          return (
            <div className="user" key={id}>
              <div>
                <img src={avatar_url} alt={login} />
                <h3>{login}</h3>
              </div>
              <a target="_blank" rel="noreferrer" href={url}>
                {url}
              </a>
            </div>
          )
        })}
        {/* <div className="daniel">
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div> */}
      </div>
    </>
  )
}

export default App
