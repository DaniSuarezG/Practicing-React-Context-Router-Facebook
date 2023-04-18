import CameraIcon from '../../../../assets/icons/CameraIcon/CameraIcon'
import Divider from '../../../../components/Divider/Divider'
import TransparentButton from '../../../../components/TransparentButton/TransparentButton'

import './PostForm.css'

function PostForm() {
  return (
    <div className='post-form'>
      <div>
        <input type="text" className='input-new-post' placeholder='¿En qué estás pensando?' />
      </div>
      <Divider />
      <div className="action">
        <TransparentButton icon={<CameraIcon/>} text='Vídeo en vivo' />
        <TransparentButton text='Foto/Vídeo' />
      </div>
    </div>
  )
}

export default PostForm