export var subtract = (value1, value2) => {
    value1 instanceof Number ? value1 - value2
                             : undefined
}

export {subtract as default}
