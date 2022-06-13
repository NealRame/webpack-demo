import _ from "lodash"

import "./style.css"
import Icon from "./icon.png"

function component() {
    const myIcon = new Image()
    myIcon.src = Icon

    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    element.appendChild(myIcon)

    return element
}

document.body.appendChild(component())
