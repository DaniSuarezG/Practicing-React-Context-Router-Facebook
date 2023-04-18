import api from "./config";

async function findUserByUsername(query) {
  const { data } = await api.get('/users', {
    params: {
      username: query
    }
  })

  return data
}

export default findUserByUsername