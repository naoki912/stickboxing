import Enum from "stickboxing/data/Enum"
import List from "stickboxing/data/List"
import Vector from "stickboxing/geometry/Vector"

var {map, filter} = Enum
var {add, subtract, multiply} = Vector

export var updateEntities = (world, entities, deltaTime) => {
    var gravity = multiply(world.gravity, deltaTime)

    var entities2 = map(entities, (entity) => {
        var velocity = add(entity.velocity, gravity)

        return entity({
            position: add(entity.position, multiply(velocity, world.scale * deltaTime)),
            velocity: velocity
        })
    })

    var entities3 = broadphase(...entities2)
    map(entities3, ([e1, e2]) => {
        if (e1.type == 1 && e2.type == 1) {

        } else if (e1.type == 1 && e2.type == 0) {
            //e1.position[0] = e1.
            //e1.position[1] =
        } else if (e1.type == 0 && e2.type == 1) {

        }
    })

    return map(entities2, (entity) => entity({
        position: entity.position({
            1: Math.max(entity.position[1], 0)
        }),
        velocity: entity.velocity([
            entity.position[0] > 0 ? entity.velocity[0] : 0,
            entity.position[1] > 0 ? entity.velocity[1] : 0
        ])
    }))
}

var broadphase = (entity, ...tail) =>
    tail.length > 0
        ? [
            ...map(filter(tail, (e) => collide(entity, e)), (e) => [entity, e]),
            ...broadphase(...tail)
        ]
        : []

var collide = (e1, e2) =>
    e1.position[0] < (e2.position[0] + e2.size[0])
 && e1.position[1] < (e2.position[1] + e2.size[1])
 && e2.position[0] < (e1.position[0] + e1.size[0])
 && e2.position[1] < (e1.position[1] + e1.size[1])

var resolve = (pair) => {}

window.broadphase = broadphase

var check = (enty, entities) => {

}
