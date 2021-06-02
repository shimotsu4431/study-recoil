import { atom } from "recoil"

export const numbersState = atom({
  key: "numbersState",
  default: [] as number[],
})

export const numbersFilterState = atom({
  key: "numbersFilterState",
  default: "all"
})