import React, { FC, useCallback } from "react"
import { useRecoilState, } from "recoil"
import { incrementNumberState } from "../recoil/atoms"

const IncrementNumber: FC = () => {
  const [number, setNumber] = useRecoilState(incrementNumberState)

  const handle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(e.target.value))
  },[setNumber])

  return (
    <div>
        <label htmlFor="incremental">incremental: </label>
        <input id="incremental" type="number" value={number} onChange={handle} />
      </div>
  )
}

export default IncrementNumber