import { Link } from 'react-router-dom'
import './Menu.css'

const menu = ['Amigos', 'Recientes', 'Grupos', 'marketplace', 'Watch']

function Menu() {

  function listMenu() {
    return(
      menu?.length ? 
        menu.map((item, idx) => <li key={idx}>{ item }</li> ) 
        : 'No menu items'
    )
  }

  return (
    <div className='menu'>
      <ul>
        { listMenu() }
      </ul>
    </div>
  )
}

export default Menu