import { Vector } from "stickboxing/data/Vector"

export var Vector2 = class extends Vector {
    constructor(x, y) {
        this.x = x
        this.y = y
    }

    get(dimention) {
        switch (dimention) {
            case 0: return this.x
            case 1: return this.y
        }
    }
}
