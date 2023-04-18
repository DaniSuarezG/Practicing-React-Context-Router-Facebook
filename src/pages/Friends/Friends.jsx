import { useContext, useEffect, useState } from 'react'

import './Friends.css'

import searchContext from '../../context/search'
import findUserByUsername from '../../services/users'

function Friends() {

  const { searchInput } = useContext(searchContext)
  const [ userList, setUserList ] = useState([])

  async function findUsers() {
    const users = await findUserByUsername(searchInput)
    setUserList(users)
  }

  useEffect(() => {
    findUsers()
  }, [])

  function displayUsers() {
    return userList.map((user) => {
      return (
        <div key={user.id}>
          <h3>{ user.username }</h3>
          <p>{ user.email }</p>
        </div>
      )
    })
  }

  return (
    <div>
      <h1>Friends</h1>
      { displayUsers() }
    </div>
  )
}

export default Friends