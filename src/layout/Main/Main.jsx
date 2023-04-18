import { Outlet } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Menu from '../../components/Menu/Menu'

import './Main.css'

function Main() {
  return (
    <div>
      <Header />
      <div className='main-wrapper'>
        <Menu />
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Main