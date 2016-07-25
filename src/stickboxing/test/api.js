export var api = {
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
    "/me": {
        id: 0,
        name: "Takeshi",
        image: "/images/player0.svg",
        coin: 100,
        button_layout: {
            guard_button_position: [500, 260],
            light_punch_button_position: [380, 260],
            heavy_punch_button_position: [440, 260]
        }
    },
    "/npcs": [
        {id: 0, name: "Doraemon", image: "/images/player0.gif"},
        {id: 1, name: "Dorami", image: "/images/player2.gif"},
    ]
}

export {api as default}

for (var key in api["/me"])
    api["/me/" + key] = api["/me"][key]

for (var x of api["/stages"])
    api["/stages/" + x.id] = x

for (var x of api["/users"])
    api["/users/" + x.id] = x

for (var x of api["/npcs"])
    api["/npcs/" + x.id] = x
