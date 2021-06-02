import React, { FC, useCallback } from "react"
import { useRecoilState, } from "recoil"
import { decrementNumberState } from "../recoil/atoms"

const DecrementNumber: FC = () => {
  const [number, setNumber] = useRecoilState(decrementNumberState)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value))
  },[setNumber])

  return (
    <div>
        <label htmlFor="decremental">decremental: </label>
        <input id="decremental" type="number" value={number} onChange={handle} />
      </div>
  )
}

export default DecrementNumber