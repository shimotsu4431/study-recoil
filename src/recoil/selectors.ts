import { selector } from "recoil";
import { numbersFilterState, numbersState } from "./atoms";

export const filteredNumbersState = selector({
  key: "filteredNumbersState",
  get: ({ get }) => {
    const filter = get(numbersFilterState)
    const numbers = get(numbersState)

    switch (filter) {
      case "odd":
        return numbers.filter((item) => item.number % 2 !== 0)
      case "even":
        return numbers.filter((item) => item.number % 2 === 0)
      default:
        return numbers
    }
  }
})