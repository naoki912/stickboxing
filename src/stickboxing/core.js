export var impliment = (Protocol, Struct, methods) => {
    var implMethods = {}

    for (var name in Protocol)
         implMethods[name] = methods[name] instanceof Function ? methods[name]
                           : Protocol[name] instanceof Function ? Protocol[name]
                           : raise(Error, "No explicit implementation for " + name)
    
    Struct.protocols = Struct.protocols || new WeakMap()
    Struct.protocols.set(Protocol, implMethods)
}

export var protocol = (methods) => {
    var Protocol = Object.create(null, {
        [Symbol.hasInstance]: {
            value: (o) => o.constructor.protocols.has(Protocol)
        }
    })

    for (var name in methods)
        Protocol[name] = ((name) =>
            (o, ...args) => o.constructor.protocols.get(Protocol)[name](o, ...args)
        )(name)

    return Protocol
}

export var raise = (message) => {
    throw message
}

export var struct = (fieldNames) => {
    var Struct = (fields) => {
        var o = (fields) => update(o, fields)
        o.__proto__ = Struct.prototype

        for (var name in fieldNames)
            o[name] = name in fields ? fields[name]
                    :                  raise("Missing field in construction " + name)

        return o
    }

    Struct.prototype = Object.create(Function.prototype, {
        constructor: {value: Struct}
    })

    return Struct
}

export var update = (o, fields) => o.constructor(Object.assign({}, o, fields))
