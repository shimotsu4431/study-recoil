import { FC } from "react"
import { useRecoilValue } from "recoil"
import { filteredNumbersState } from "../recoil/selectors"

const ShowNumbers: FC = () => {
  const numbers = useRecoilValue(filteredNumbersState)

  return (
    <ul>
      {numbers.map((number) => {
        return <li>{number}</li>
      })}
    </ul>
  )
}

export default ShowNumbers