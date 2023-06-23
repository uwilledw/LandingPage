import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  abtMe: [{ letter: "A", id: 1 },
  { letter: "B", id: 2 }, { letter: "O", id: 3 }, { letter: "U", id: 4 }, { letter: "T", id: 5 }, { letter: " ", id: 6 }, { letter: "M", id: 7 }, { letter: "E", id: 8 }],

  port: [{ letter: "P", id: 18 },
  { letter: "O", id: 19 }, { letter: "R", id: 20 }, { letter: "T", id: 21 }, { letter: "F", id: 22 }, { letter: "O", id: 23 }, { letter: "L", id: 24 }, { letter: "I", id: 25 }, { letter: "O", id: 26 }],

  skills: [{ letter: "M", id: 9 }, { letter: "Y", id: 10 }, { letter: " ", id: 11 }, { letter: "S", id: 12 }, { letter: "K", id: 13 }, { letter: "I", id: 14 }, { letter: "L", id: 15 }, { letter: "L", id: 16 }, { letter: "S", id: 17 }],

  contact: [{ letter: "C", id: 27 },
  { letter: "O", id: 28 }, { letter: "N", id: 29 }, { letter: "T", id: 30 }, { letter: "A", id: 31 }, { letter: "C", id: 32 }, { letter: "T", id: 33 }, { letter: " ", id: 34 }, { letter: "M", id: 34 }, { letter: "E", id: 35 }],
  colors: ["#7165b5", "#3079d3", "#9d0a0a", "#249d39"]

})
