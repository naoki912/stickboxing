import {struct, impliment, raise} from "base/Core"
import Enum from "base/data/Enum"

export var Range = struct({
    first: Number,
    last: Number
})

export {Range as default}

Range.prototype[Symbol.iterator] = function () {
    var {first, last} = this
    var up = first < last
    var x = first

    var check = up ? (x) => x <= last
              :      (x) => x >= last

    var update = up ? (r) => (x = r + 1, r)
               :      (r) => (x = r - 1, r)

    return {
        next: () =>
            check(x) ? {done: false, value: update(x)}
          :            {done: true,  value: undefined}
    }
}

export var range = (first, last) => Range({first, last})
