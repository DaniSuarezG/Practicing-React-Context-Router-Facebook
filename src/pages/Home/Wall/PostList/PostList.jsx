import { useState, useEffect } from 'react'
import PhotoCard from '../../../../components/PhotoCard/PhotoCard'
import './PostList.css'
import getAllPhotos from '../../../../services/photoService'

function PostList() {

	const [ photos, setPhotos ] = useState([])

	async function getPhotos() {
		setPhotos(await getAllPhotos())
	}

	useEffect(() => {
		getPhotos()
	}, [])

  function displayPhotos() {
    return photos.slice(0, 10)
                  .map(photo => {
      return <PhotoCard key={photo.id} photo={photo} />
    })
  }

  return (
    <div className='post-list'>
      <h2>PostList</h2>
      { displayPhotos() }
    </div>
  )
}

export default PostList