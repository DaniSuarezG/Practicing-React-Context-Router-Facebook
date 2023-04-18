import PostForm from './PostForm/PostForm'
import PostList from './PostList/PostList'
import './Wall.css'

function Wall() {
  return (
    <div className='wall'>
      <PostForm />
      <PostList />
    </div>
  )
}

export default Wall