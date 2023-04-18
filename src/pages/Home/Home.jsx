import Aside from './Aside/Aside'
import './Home.css'
import Wall from './Wall/Wall'

function Home() {
  return (
    <div className='home'>
      <Wall />
      <Aside />
    </div>
  )
}

export default Home