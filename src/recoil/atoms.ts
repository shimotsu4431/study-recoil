import { atom } from "recoil"

export type NumberItem = {
  id: number,
  number: number
}

export const numbersState = atom({
  key: "numbersState",
  default: [] as NumberItem[],
})

export const numbersFilterState = atom({
  key: "numbersFilterState",
  default: "all"
})