import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  abtMe: ["A", "B", "O", "U", "T", " ", "M", "E"],

  port: ["P", "O", "R", "T", "F", "O", "L", "I", "O"],

  skills: ["M", "Y", " ", "S", "K", "I", "L", "L", "S"],

  contact: ["C", "O", "N", "T", "A", "C", "T", " ", "M", "E"],
  colors: ["#7165b5", "#3079d3", "#9d0a0a", "#249d39"]

})
