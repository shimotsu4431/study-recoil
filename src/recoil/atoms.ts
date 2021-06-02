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

export const incrementNumberState = atom({
  key: "incrementNumberState",
  default: 1,
})

export const decrementNumberState = atom({
  key: "decrementNumberState",
  default: -1,
})