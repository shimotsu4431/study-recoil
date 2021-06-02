import { FC } from "react"
import AddNumbers from "./components/AddNumbers"
import FilterNumbers from "./components/FilterNumbers"
import ShowNumbers from "./components/ShowNumbers"

const App: FC = () => {
  return (
    <>
      <AddNumbers /> <FilterNumbers />
      <ShowNumbers />
    </>
  )
}

export default App