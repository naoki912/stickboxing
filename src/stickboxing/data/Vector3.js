import { Vector } from "stickboxing/data/Vector"

export var Vector3 = class extends Vector {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }

    get(dimension) {
        switch (dimention) {
            case 0: return this.x
            case 1: return this.y
            case 2: return this.z 
        }
    }
}
