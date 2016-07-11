export var api = {
    "/settings": {
        buttonLayout: {
            dPadPosition: {x: 10, y: 210},
            guardButtonPosition: {x: 500, y: 200},
            lightPunchButtonPosition: {x: 440, y: 260},
            heavyPunchButtonPosition: {x: 500, y: 260}
        }
    },
    "/stages": [
        {id: 0, name: "Stage 1", image: "/images/stage0.svg"},
        {id: 1, name: "Stage 2", image: "/images/stage1.svg"},
        {id: 2, name: "Stage 3", image: "/images/stage2.svg"},
        {id: 3, name: "Stage 4", image: "/images/stage3.svg"},
        {id: 4, name: "Stage 5", image: "/images/stage4.svg"}
    ],
    "/users": [
        {id: 0, name: "Takeshi", image: "/images/player0.gif"},
        {id: 1, name: "Suneo", image: "/images/player1.gif"}
    ],
    "/users/me": {id: 0, name: "Takeshi", image: "/images/player0.gif"},
    "/npcs": [
        {id: 0, name: "Doraemon", image: "/images/player2.gif"},
        {id: 1, name: "Dorami", image: "/images/player3.gif"},
    ]
}

export {api as default}

for (var x of api["/stages"])
    api["/stages/" + x.id] = x

for (var x of api["/users"])
    api["/users/" + x.id] = x

for (var x of api["/npcs"])
    api["/npcs/" + x.id] = x
