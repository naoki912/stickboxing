import {struct} from "base"
import Vector2 from "stickboxing/math/geometry/Vector2"
import Vector3 from "stickboxing/math/geometry/Vector3"

export var Player = struct({
    image: String,
    name: String,
    rotation: Vector3,
    position: Vector2,
    velocity: Vector2,
    size: Vector2,
    type: Number,
    vitality: Number,
    maxVitality: Number,
    action: String
})

export {Player as default}
