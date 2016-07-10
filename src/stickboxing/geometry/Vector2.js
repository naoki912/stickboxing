import {impliment, struct, raise} from "base"
import Vector from "stickboxing/geometry/Vector"

export var Vector2 = struct({
    0: Number,
    1: Number
})

export {Vector2 as default}

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
