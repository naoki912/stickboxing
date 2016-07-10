import {struct, impliment, raise} from "base/Core"
import Enum from "base/data/Enum"

export var List = Array

export {List as default}

var {count, foldLeft, zipWith} = Enum

impliment(Enum, List, {
    at: (xs, n) => xs[n],

    count: ({length}) => length,

    filter: (xs, f) => foldLeft(xs, [], (x, a) => f(x) ? [...a, x] : a),

    find: (xs, f) => foldLeft(xs, null, (x, a) => !a && f(x) ? x : a),

    findIndex: (xs, f) => foldLeft(xs, 0, (x, a) => f(x) ? a : a),

    foldLeft: ([x, ...xs], a, f) =>
        x === undefined ? a
      :                   foldLeft(xs, f(x, a), f),

    foldRight: ([x, ...xs], v, f) =>
        x === undefined ? v
      :                   f(x, foldRight(xs, v, f)),

    flatMap: (xs, f) => foldLeft(xs, [], (x, a) => [...a, ...f(x)]),

    map: (xs, f) => foldLeft(xs, [], (x, a) => [...a, f(x)]),

    unzip: ([xy, ...xys]) =>
        xy === undefined ? [[], []]
      :                    (([xs, ys]) => [[xy[0], ...xs], [xy[1], ...ys]])(unzip(xys)),

    zip: (xs, ys) => zipWith(xs, ys, List),

    zipWith: ([x, ...xs], [y, ...ys], f) =>
        x === undefined ? []
      : y === undefined ? []
      :                   [f(x, y), ...zipWith(xs, ys, f)]
})
