import {protocol, impliment, raise} from "base"

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

import Vector2 from "stickboxing/math/geometry/Vector2"
import Vector3 from "stickboxing/math/geometry/Vector3"

var {at, dimention} = Vector

var _dotProduct = (v1, v2, d) =>
   at(v1, d) * at(v2, d) + (d > 0 ? _dotProduct(v1, v2, d - 1) : 0)

impliment(Vector, Vector2, {
    dimention: (_) => 2,
    at: (vector, dimention) =>
        dimention == 0 ? vector[0]
      : dimention == 1 ? vector[1]
      : undefined,
    add: (v1, v2) => Vector2([
        v1[0] + v2[0],
        v1[1] + v2[1]
    ]),
    subtract: (v1, v2) => Vector2([
        v1[0] - v2[0],
        v1[1] - v2[1]
    ]),
    multiply: (vector, value) => Vector2([
        vector[0] * value,
        vector[1] * value
    ]),
    divide: (vector, value) => Vector2([
        vector[0] / value,
        vector[1] / value
    ])
})

impliment(Vector, Vector3, {
    dimention: (_) => 3,
    at: (vector, dimention) =>
        dimention == 0 ? vector[0]
      : dimention == 1 ? vector[1]
      : dimention == 2 ? vector[2]
      : undefined,
    add: (v1, v2) => Vector3([
        v1[0] + v2[0],
        v1[1] + v2[1],
        v1[2] + v2[2]
    ]),
    subtract: (v1, v2) => Vector3([
        v1[0] - v2[0],
        v1[1] - v2[1],
        v1[2] - v2[2]
    ]),
    multiply: (vector, value) => Vector3([
        vector[0] * value,
        vector[1] * value,
        vector[2] * value
    ]),
    divide: (vector, value) => Vector3([
        vector[0] / value,
        vector[1] / value,
        vector[2] / value
    ])
})
