import api from "./config";

async function getAllPhotos() {
  const { data } = await api.get('/photos')
  return data
}

export default getAllPhotos