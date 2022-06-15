import _ from "lodash"

import "./style.css"
import Icon from "./icon.png"

import books from "./books.json"
import games from "./games.csv"
import music from "./music.toml"
import pets from "./pets.xml"

function component() {
    const myIcon = new Image()
    myIcon.src = Icon

    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    element.appendChild(myIcon)

    console.log(books)
    console.log(games)
    console.log(music)
    console.log(pets)

    return element
}

document.body.appendChild(component())
