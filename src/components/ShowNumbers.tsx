import { FC } from "react"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { numbersState } from "../recoil/atoms"
import { filteredNumbersState } from "../recoil/selectors"

const ShowNumbers: FC = () => {
  const numbers = useRecoilValue(filteredNumbersState)
  const setNumbers = useSetRecoilState(numbersState)

  const deleteNumber = (id: number) => {
    setNumbers((oldNumbers) => {
      const result = oldNumbers.filter((item) => {
        return item.id !== id
      })
      return result
    })
  }

  return (
    <ul>
      {numbers.map((item) => {
        return <li key={item.id}>{item.number} <button onClick={() => deleteNumber(item.id)}>×</button></li>
      })}
    </ul>
  )
}

export default ShowNumbers