import {protocol, raise} from "base/Core"

export var Enum = protocol({
    at: undefined,
    count: undefined,
    filter: undefined,
    find: undefined,
    findIndex: undefined,
    foldLeft: undefined,
    foldRight: undefined,
    map: undefined,
    zip: undefined,
    zipWith: undefined
})

export {Enum as default}
