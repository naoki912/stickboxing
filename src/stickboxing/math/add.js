export var add = (value1, value2) => {
    value1 instanceof Number ? value1 + value2
                             : undefined
}

export {add as default}
