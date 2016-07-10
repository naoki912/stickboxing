import {impliment, struct, raise} from "base"
import Vector from "stickboxing/geometry/Vector"

export var Vector3 = struct({
    0: Number,
    1: Number,
    2: Number
})

export {Vector3 as default}

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
