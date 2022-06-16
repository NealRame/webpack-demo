import _ from "lodash"

import numRef from "./ref.json"

export function numToWord(num) {
    return _.reduce(
        numRef,
        (acc, ref) => {
            return ref.num === num ? ref.word : acc
        },
        ""
    )
}

export function wordToNum(word) {
    const wordLower = word.trim().toLowerCase()
    return _.reduce(
        numRef,
        (acc, ref) => {
            const refWordLower = ref.word.toLowerCase()
            return refWordLower === wordLower ? ref.num : acc
        },
        -1
    )
}
