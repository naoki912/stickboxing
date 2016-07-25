import base, {Enum, List, update} from "base"
import React from "react"
import BattleView from "stickboxing/components/BattleView"
import Player from "stickboxing/data/Player"
import Stage from "stickboxing/data/Stage"
import Vector from "stickboxing/geometry/Vector"
import Vector2 from "stickboxing/geometry/Vector2"
import Vector3 from "stickboxing/geometry/Vector3"
import Entity from "stickboxing/physics/Entity"
import * as World from "stickboxing/physics/World"
import api from "stickboxing/test/api"

var {map, zipWith} = Enum
var {add, subtract, multiply} = Vector

export default class extends React.Component {
    constructor(props) {
        super(props)

        var {query} = props.location

        var me = api["/me"]
        var opponent = api["/npcs/0"]

        this.state = {
            lastTime: Date.now(),
            joystick: {
                hidden: true,
                position: Vector2([0, 0]),
                size: Vector2([112, 112]),
                lever: {
                    position: extents(Vector2([112, 112])),
                    size: Vector2([64, 64])
                }
            },
            players: [
                Player({
                    image: me.image,
                    name: me.name,
                    rotation: Vector3([0, 0, 0]),
                    position: Vector2([80, 0]),
                    velocity: Vector2([0, 0]),
                    size: Vector2([120, 200]),
                    type: 1,
                    vitality: 100,
                    maxVitality: 100,
                    action: "NONE"
                }),
                Player({
                    image: opponent.image,
                    name: opponent.name,
                    rotation: Vector3([0, 180, 0]),
                    position: Vector2([370, 0]),
                    velocity: Vector2([0, 0]),
                    size: Vector2([120, 200]),
                    type: 1,
                    vitality: 100,
                    maxVitality: 100,
                    action: "NONE"
                })
            ],
            buttonLayout: {
                guardButtonPosition: Vector2(me["button_layout"]["guard_button_position"]),
                lightPunchButtonPosition: Vector2(me["button_layout"]["light_punch_button_position"]),
                heavyPunchButtonPosition: Vector2(me["button_layout"]["heavy_punch_button_position"])
            },
            stage: Stage(api["/stages/" + query["stage_id"]]),
            time: 60,
            world: {
                gravity: Vector2([0, -9.8]),
                scale: 160
            }
        }
    }

    componentDidMount() {
        window.onkeydown = (event) => {
            var {key} = event
            var {joystick} = this.state
        
            this.state.joystick = 
                key == "ArrowUp"    ? moveToY(joystick, joystick.size[1] * 2)
              : key == "ArrowRight" ? moveToX(joystick, joystick.size[0] * 2)
              : key == "ArrowDown"  ? moveToY(joystick, -joystick.size[1] * 2)
              : key == "ArrowLeft"  ? moveToX(joystick, -joystick.size[0] * 2)
              :                       joystick
        }

        window.onkeyup = (event) => {
            var {key} = event
            var {joystick, players} = this.state

            this.state.joystick =
                key == "ArrowUp"    ? moveToCenterY(joystick)
              : key == "ArrowRight" ? moveToCenterX(joystick)
              : key == "ArrowDown"  ? moveToCenterY(joystick)
              : key == "ArrowLeft"  ? moveToCenterX(joystick)
              :                       joystick

            this.state.players[0] = 
                key == "A" ? update(players[0], {vitality: players[0].vitality * 0.7})
              :              players[0]
        }

        var secondsIntervelID = setInterval(() => {
            if (this.state.time > 0)
                this.setState({time: this.state.time - 1})
            else
                clearInterval(secondsIntervelID)
        }, 1000)

        this.setState({prev: Date.now()})
        var frameIntervalID = setInterval(() => {
            var now = Date.now()

            var {joystick, lastTime, players, world} = this.state

            var {lever} = joystick

            var distance = subtract(lever.position, extents(joystick.size))

            var player = players[0]

            players[0] = update(player, {
                position: update(player.position, {
                    0: player.position[0] + Math.max(Math.min(distance[0] / 20, 4), -4)
                }),/*
                rotation: update(player.rotation, [
                    ,
                    distance[0] > lever.size[0] / 2  ? 0
                  : distance[0] < -lever.size[0] / 2 ? 180
                  :                                    player.rotation[1]
                ])*/
            })

            if (distance[1] * 2 > joystick.size[1])
                players[0] = jump(players[0])

            var entities = World.updateEntities(
                world,
                [
                    ...map(players, Entity),
                    Entity({
                        rotation: Vector2([0, 0]),
                        position: Vector2([0, 0]),
                        velocity: Vector2([0, 0]),
                        size: Vector2([1000, 8]),
                        type: 0
                    })
                ],
                (now - lastTime) / 1000
            )

            this.setState({
                lastTime: now,
                players: zipWith(players, entities, update)
            })
        }, 16)
    }

    render() {
        return <BattleView {...this.state}
            onStageTouchStart={(event) => {
                event.preventDefault()

                var touch = event.targetTouches[0]
                var rect = event.currentTarget.getBoundingClientRect()
                var position = Vector2([
                    (touch.clientX - rect.left),
                    rect.height - (touch.clientY - rect.top)
                ])

                var {joystick} = this.state

                this.state.joystick = update(joystick, {
                    hidden: false,
                    lever: update(joystick.lever, {position: extents(joystick.size)}),
                    position: position
                })
            }}
            onStageTouchMove={(event) => {
                event.preventDefault()

                var touch = event.targetTouches[0]
                var rect = event.currentTarget.getBoundingClientRect()
                var position = Vector2([
                    (touch.clientX - rect.left),
                    rect.height - (touch.clientY - rect.top)
                ])

                var {joystick} = this.state

                this.state.joystick = moveTo(
                    joystick,
                    add(extents(joystick.size), subtract(position, joystick.position))
                )
            }}
            onStageTouchEnd={(event) => {
                event.preventDefault()

                var {joystick} = this.state

                this.state.joystick = update(joystick, {
                    hidden: true,
                    lever: update(joystick.lever, {position: extents(joystick.size)})
                })
            }}
        />
    }
}

var extents = (vector) => multiply(vector, 0.5)

var moveTo = (joystick, vector) => update(joystick, {
    lever: update(joystick.lever, {
        position: vector
    })
})

var moveToX = (joystick, x) => moveTo(joystick, update(joystick.lever.position, [x]))

var moveToY = (joystick, y) => moveTo(joystick, update(joystick.lever.position, [, y]))

var moveToCenter = (joystick) => moveTo(joystick, extents(joystick.size))

var moveToCenterX = (joystick) => moveToX(joystick, extents(joystick.size)[0])

var moveToCenterY = (joystick) => moveToY(joystick, extents(joystick.size)[1])

var jump = (player) => player.position[1] > 0 ? player : update(player, {
    velocity: add(player.velocity, Vector2([0, 5]))
})

var squat = (player) => undefined
