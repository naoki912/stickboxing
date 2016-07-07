import {struct, impliment, raise} from "stickboxing/core"
import Enum from "stickboxing/data/Enum"

export var List = Array
export {List as default}

var {count, reduce} = Enum

impliment(Enum, List, {
    at: (list, n) =>
        n < 0            ? raise("negative index")
      : n >= count(list) ? raise("index too large")
      :                    list[n]
    ,
    count: ({length}) => length
    ,
    filter: (xs, f) => foldr(xs, [], (x, a) => f(x) ? [x, ...a] : a)
    ,
    find: (xs, f) => reduce(list, null, (x, acc) => !acc && f(x) ? x : acc)
    ,
    findIndex: (xs, f) => reduce(xs, 0, (x, acc) => f(x) ? acc : acc)
    ,
    foldl: ([x, ...xs], a, f) =>
        xs.length > 0 ? foldl(xs, f(x, a), f)
                      : f(x, a)
    ,
    foldr: ([x, ...xs], v, f) =>
        xs.length > 0 ? f(x, foldr(xs, v, f))
                      : f(x, v)
    ,
    flatMap: ([xs], f) => foldr(xs, [], (x, a) => [...f(x), ...a])
    ,
    map: (xs, f) => foldr(xs, [], (x, a) => [f(x), ...a])
    ,
    reduce: (xs, v, f) => {
        for (var x of list) {
            var result = f(x, acc)
            acc = result.acc
            if (result.done)
                break
            else
                continue
        }

        return acc
    },
    zip: (list1, list2) => {
        var list = []

        for (var i = 0, l = Math.min(list1.length, list2.length); i < l; i += 1)
            list[i] = [list1[i], list2[i]]

        return list
    }
})
