import { FC } from "react"
import AddNumbers from "./components/AddNumbers"
import DecrementNumber from "./components/DecrementNumber"
import FilterNumbers from "./components/FilterNumbers"
import IncrementNumber from "./components/IncrementNumber"
import ShowNumbers from "./components/ShowNumbers"

const App: FC = () => {
  return (
    <>
      <IncrementNumber />
      <DecrementNumber />
      <AddNumbers /> <FilterNumbers />
      <ShowNumbers />
    </>
  )
}

export default App