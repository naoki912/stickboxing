export var database = {
    "characters": [
        "/characters/0",
        "/characters/1"
    ],
    "stages": [
        "/stages/0",
        "/stages/1",
        "/stages/2",
        "/stages/3",
        "/stages/4"
    ],
    "users": [
        {
            "button_layout": {
                "guard_button_position": [500, 260],
                "heavy_punch_button_position": [440, 260],
                "light_punch_button_position": [380, 260]
            },
            "character_id": 0,
            "coin": 120,
            "id": 0,
            "name": "Takeshi"
        },
        {
            "id": 1,
            "name": "Suneo",
            "character_id": 1,
            "coin": 10000,
            "button_layout": {
                "guard_button_position": [500, 260],
                "light_punch_button_position": [380, 260],
                "heavy_punch_button_position": [440, 260]
            }
        }
    ]
}

export {database as default}

for (var key1 of ["characters", "stages", "users"])
for (var key2 in database[key1])
    database[key1 + "/" + key2] = database[key1][key2]
