
export var World = {
    entities: [
        Entity
    ]
}

export var Entity = {
    type: 0,
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 0
    },
    acceleration: {
        x: 0,
        y: 0
    },
    dynamic: 0,
    static: 1
}
