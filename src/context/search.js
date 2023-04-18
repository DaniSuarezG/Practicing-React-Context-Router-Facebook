import { createContext } from "react"

const searchContext = createContext({
  search: 'default',
  setSearch: () => {}
})

export default searchContext