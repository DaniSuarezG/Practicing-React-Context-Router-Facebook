import { useEffect, useState } from 'react'
import './PhotoCard.css'
import getAllPhotos from '../../services/photoService'

function PhotoCard({ photo }) {

	function displayPhoto() {
		return (
			<div className="photo">
				<h3>{ photo.title }</h3>
				<img src={ photo.url } alt={ photo.title } />
			</div>
		)
	}

	return (
		<>
			{ displayPhoto() }
		</>
	)
}

export default PhotoCard