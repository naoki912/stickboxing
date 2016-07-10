import {protocol} from "base"

export var Vector = protocol({
    dimention: undefined,
    at: undefined,
    add: undefined,
    subtract: undefined,
    multiply: undefined,
    divide: undefined,
    dotProduct: (v1, v2) => _dotProduct(v1, v2, dimention(v1))
})

export {Vector as default}

var {at, dimention} = Vector

var _dotProduct = (v1, v2, d) =>
   at(v1, d) * at(v2, d) + (d > 0 ? _dotProduct(v1, v2, d - 1) : 0)
