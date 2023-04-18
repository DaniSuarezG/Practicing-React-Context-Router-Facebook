import { useContext, useState } from 'react'

import './Header.css'

import searchContext from '../../context/search'
import { useNavigate } from 'react-router-dom'

function Header() {

  const { searchInput, setSearchInput } = useContext(searchContext)
  const [ input, setInput ] = useState('')
  const navigate = useNavigate()

  function handleChange(event) {
    setInput(event.target.value)
  }

  function handleKeyDown(event) {

    console.log(event.code)

    if (event.code === 'Enter') {
      setSearchInput(input)
      console.log('OK')
      return navigate('/friends')
    }
  }

  return (
    <div className='header'>
      <div className='header-wrapper'>
        <h1 className='title'>SADBOOK</h1>
        <div className='search-wrapper'>
          <input 
            type="text" 
            id='search' 
            placeholder='Search' 
            onChange={ handleChange }
            onKeyDown={ handleKeyDown }/>
        </div>
      </div>
      <div className="avatar">DS</div>
    </div>
  )
}

export default Header