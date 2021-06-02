import { FC, useState } from "react"
import { useSetRecoilState } from "recoil"
import { numbersState } from "../recoil/atoms"

const AddNumbers: FC = () => {
  const [inputNumber, setInputNumber] = useState(0)
  const setNumbers = useSetRecoilState(numbersState)

  const increment = () => {
    setInputNumber((num) => num + 1)
  }

  const decrement = () => {
    setInputNumber((num) => num - 1)
  }

  const addNumber = () => {
    setNumbers((oldNumbers) => {
      return [...oldNumbers, inputNumber]
    })
    setInputNumber(0)
  }

  const reset = () => {
    setNumbers([])
    setInputNumber(0)
  }

  return (
    <>
      <button onClick={decrement}>-1</button> {inputNumber}{""}
      <button onClick={increment}>+1</button> {""}
      <button onClick={addNumber}>追加</button>
      <button onClick={reset}>リセット</button>
    </>
  )
}

export default AddNumbers