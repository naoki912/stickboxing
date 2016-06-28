export class Vector2D {
    get(dimention) {
        switch (dimention) {
            case 0: return this.x
            case 1: return this.y
        }
    }
}
