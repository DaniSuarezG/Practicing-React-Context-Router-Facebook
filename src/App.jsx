import { RouterProvider } from 'react-router-dom'
import { router } from './router'

import searchContext from './context/search'

import './App.css'
import { useContext, useState } from 'react'

function App() {

  const { search } = useContext(searchContext)
  const [ searchInput, setSearchInput ] = useState(search)
  const value = { searchInput, setSearchInput }

  return (
    <searchContext.Provider value={ value } >
      <RouterProvider router={router} />
    </searchContext.Provider>
  )
}

export default App
