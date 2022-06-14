import _ from "lodash"

import "./style.css"
import Icon from "./icon.png"
import pets from "./pets.xml"

function component() {
    const myIcon = new Image()
    myIcon.src = Icon

    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    element.appendChild(myIcon)

    console.log(pets)

    return element
}

document.body.appendChild(component())
