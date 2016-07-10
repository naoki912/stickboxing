import {struct, impliment} from "base/Core"
import {Enum} from "base/data/Enum"

var Count = struct({
    first: Number
})

impliment(Enum, Count, {
    reduce: (range, f) => {
        
    }
})

export default Count
