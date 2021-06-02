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
      if (oldNumbers.some((item) => inputNumber === item.number)) {
        alert('同じ数値は登録できません')

        return oldNumbers
      }

      if (oldNumbers.length === 0) {
        return [{ number: inputNumber, id: 1 }]
      } else {
        return [...oldNumbers, { number: inputNumber, id: oldNumbers[oldNumbers.length - 1].id + 1 }]
      }
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