import { merge } from "stickboxing/utils/Object"

export var updateEntities = (deltaTime, world, entities) => {
    var entities2 = entities.map((entry) => {
        var velocity = {
            x: entry.velocity.x + world.gravity.x * deltaTime,
            y: entry.velocity.y + world.gravity.y * deltaTime
        }
        return merge(entry, {
            position: {
                x: entry.position.x + velocity.x * deltaTime * 200,
                y: entry.position.y + velocity.y * deltaTime * 200
            },
            velocity: velocity
        })
    })

    return entities2.map((entry) => {
        return merge(entry, {
            position: {
                x: Math.min(Math.max(entry.position.x, 0), 560 - entry.size.width),
                y: Math.min(Math.max(entry.position.y, 0), 260 - entry.size.height)
            },
            velocity: {
                x: entry.position.x > 0 ? entry.velocity.x : 0,
                y: entry.position.y > 0 ? entry.velocity.y : 0
            }
        })
    })
}
