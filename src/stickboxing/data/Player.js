import {struct} from "base"
import Vector2 from "stickboxing/geometry/Vector2"
import Vector3 from "stickboxing/geometry/Vector3"

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
    action: ""
})

export {Player as default}
