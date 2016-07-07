import {struct, impliment, raise} from "stickboxing/core"
import Enum from "stickboxing/data/Enum"

export var Range = struct({
    first: Number,
    last: Number
})

export {Range as default}

impliment(Enum, Range, {
    at: ({first, last}, n) =>
        n >= count({first, last}) ? raise(RangeError)
      : n < 0                     ? raise(RangeError)
      : first < last              ? first + n
      :                             first - n
    ,
    count: ({first, last}) =>
        first < last ? last  - first + 1
      :                first - last  + 1
    ,
    has: ({first, last}, x) =>
        first < last ? x >= first && x <= last
      :                x >= last && x <= first
    ,
    reduce: ({first, last}, acc, f) =>
        first < last ? reduceUp(first, acc, f, last)
      :                reduceDown(first, acc, f, last)
})

var reduceUp = (x, acc, f, last) =>
    x < last ? reduceUp(x + 1, last, f(x, acc), f)
  :            f(x, acc)

var reduceDown = (x, acc, f, last) =>
    x > last ? reduceDown(x - 1, last, f(x, acc), f)
  :            f(x, acc)
