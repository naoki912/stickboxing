
export var next = (elapsed, entities) => {
    var entities2 = entities.map((entry) => {
        var velocity = {
            x: entry.velocity.x + entry.acceleration.x * elapsed,
            y: entry.velocity.y + entry.acceleration.y * elapsed
        }
        return Object.assign({}, entry, {
            position: {
                x: entry.position.x + velocity.x * elapsed * 200,
                y: entry.position.y + velocity.y * elapsed * 200
            },
            velocity: velocity
        })
    })

    return entities2.map((entry) => {
        return Object.assign({}, entry, {
            position: {
                x: Math.min(Math.max(entry.position.x, 0), 560 - entry.size.width),
                y: Math.min(Math.max(entry.position.y, 0), 315 - entry.size.height)
            },
            velocity: {
                x: entry.position.x > 0 ? entry.velocity.x : 0,
                y: entry.position.y > 0 ? entry.velocity.y : 0
            }
        })
    })
}
