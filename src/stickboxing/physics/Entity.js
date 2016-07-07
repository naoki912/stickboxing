import {struct} from "stickboxing/core"
import Vector2 from "stickboxing/geometry/Vector2"

export var Entity = struct({
    type: Number,
    position: Vector2,
    velocity: Vector2,
    size: Vector2
})
export {Entity as default}
