import {Enum, struct, update} from "base"
import Vector from "stickboxing/math/geometry/Vector"

var {map, filter} = Enum
var {add, subtract, multiply} = Vector

export var updateEntities = (world, entities, deltaTime) => {
    var gravity = multiply(world.gravity, deltaTime)

    var entities2 = map(entities, (entity) => {
        var velocity = add(entity.velocity, gravity)

        return update(entity, {
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

    return map(entities2, (entity) => update(entity, {
        position: update(entity.position, {
            1: Math.max(entity.position[1], 0)
        }),
        velocity: update(entity.velocity, [
            entity.position[0] > 0 ? entity.velocity[0] : 0,
            entity.position[1] > 0 ? entity.velocity[1] : 0
        ])
    }))
}

var broadphase = (entity, ...tail) =>
    tail.length > 0
        ? [
            ...map(filter(tail, (e) => collision(entity, e)), (e) => [entity, e]),
            ...broadphase(...tail)
        ]
        : []

export var narrowphase = () => {

}

var Begin = struct({
    entity: Object,
    value: Number
})

var End = struct({
    entity: Object,
    value: Number
})

var compare = ({value: v1}, {value: v2}) => v1 - v2

export var sweepAndPrune = (entities) => {
    var endPointsX = []
    var endPointsY = []

    for (var e of entities) {
        endPointsX.push(Begin({entity: e, value: e.position[0]}))
        endPointsX.push(End({entity: e, value: e.position[0] + e.size[0]}))
        endPointsY.push(Begin({entity: e, value: e.position[1]}))
        endPointsY.push(End({entity: e, value: e.position[1] + e.size[1]}))
    }

    endPointsX.sort(compare)
    endPointsY.sort(compare)

    collisionsX = []
    collisionsY = []

    activeList = []

    for (var point of endPointsX)
        if (point instanceof Begin) {
            for (j = 0; j < activeList.count; j++) {
                collisionsX.push([point.entity, a]);
            }

            activeList.add(point.object.id);
        } else
            activeList.remove(entity.id)
}

export var Collision = struct({
    e1: null,
    e2: null
})

var collision = (e1, e2) =>
    e1.position[0] < (e2.position[0] + e2.size[0])
 && e1.position[1] < (e2.position[1] + e2.size[1])
 && e2.position[0] < (e1.position[0] + e1.size[0])
 && e2.position[1] < (e1.position[1] + e1.size[1])

var resolve = (pair) => {}

window.broadphase = broadphase

var check = (enty, entities) => {

}

