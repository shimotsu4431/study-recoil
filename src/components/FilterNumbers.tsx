import React, { FC } from "react"
import { useRecoilState, } from "recoil"
import { numbersFilterState } from "../recoil/atoms"

const FilterNumbers: FC = () => {
  const [filter, setFilter] = useRecoilState(numbersFilterState)

  const updateFilter = (event: React.ChangeEvent<{ value: unknown }>) => {
    setFilter(event.target.value as string)
  }

  return (
    <>
      <select value={filter} onChange={updateFilter}>
        <option value="all">すべて</option>
        <option value="odd">奇数</option>
        <option value="even">偶数</option>
      </select>
    </>
  )
}

export default FilterNumbers