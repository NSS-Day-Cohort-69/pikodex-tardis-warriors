import { getPikoList } from "./pikomon.js"

const pikoList = getPikoList()
const cardList = document.querySelector('#card-list')
cardList.innerHTML = pikoList

// Import pikomonList function

// Set variable pikomonHTML to output of pikomonList

// Use the .innerHTML method on container, injecting pikomonHTML