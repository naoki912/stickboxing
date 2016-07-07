import {struct, impliment} from "stickboxing/core"
import {Enum} from "stickboxing/data/Enum"

var Count = struct({
    first: Number
})

impliment(Enum, Count, {
    reduce: (range, f) => {
        
    }
})

export default Count
