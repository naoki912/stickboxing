import {protocol, raise} from "stickboxing/core"

var Enum = protocol({
    at: undefined,
    filter: undefined,
    find: undefined,
    findIndex: undefined,
    map: undefined,
    reduce: undefined,
    zip: undefined
})

export {Enum as default}
