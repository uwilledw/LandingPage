import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  abtMe: [{ letter: "A", id: 1 },
  { letter: "B", id: 2 }, { letter: "O", id: 3 }, { letter: "U", id: 4 }, { letter: "T", id: 5 }, { letter: " ", id: 6 }, { letter: "M", id: 7 }, { letter: "E", id: 8 }],

  port: ["P", "O", "R", "T", "F", "O", "L", "I", "O"],

  skills: [{ letter: "M", id: 9 }, { letter: "Y", id: 10 }, { letter: " ", id: 11 }, { letter: "S", id: 12 }, { letter: "K", id: 13 }, { letter: "I", id: 14 }, { letter: "L", id: 15 }, { letter: "L", id: 16 }, { letter: "S", id: 17 }],

  contact: ["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"],
  colors: ["#7165b5", "#3079d3", "#9d0a0a", "#249d39"]

})
