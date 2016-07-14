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
        {id: 0, name: "Stage 1", background: "/images/stage0_bg.svg", foreground: "/images/stage0_fg.svg"},
        {id: 1, name: "Stage 2", background: "/images/stage1.svg", foreground: null},
        {id: 2, name: "Stage 3", background: "/images/stage2.svg", foreground: null},
        {id: 3, name: "Stage 4", background: "/images/stage3.svg", foreground: null},
        {id: 4, name: "Stage 5", background: "/images/stage4.svg", foreground: null}
    ],
    "/users": [
        {id: 0, name: "Takeshi", image: "/images/player0.svg"},
        {id: 1, name: "Suneo", image: "/images/player0.gif"}
    ],
    "/users/me": {id: 0, name: "Takeshi", image: "/images/player0.svg"},
    "/npcs": [
        {id: 0, name: "Doraemon", image: "/images/player0.gif"},
        {id: 1, name: "Dorami", image: "/images/player2.gif"},
    ]
}

export {api as default}

for (var x of api["/stages"])
    api["/stages/" + x.id] = x

for (var x of api["/users"])
    api["/users/" + x.id] = x

for (var x of api["/npcs"])
    api["/npcs/" + x.id] = x
