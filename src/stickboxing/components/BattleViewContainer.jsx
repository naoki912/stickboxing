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

        var me = api["/users/me"]
        var opponent = api["/npcs/0"]

        this.state = {
            lastTime: Date.now(),
            joystick: {
                hidden: true,
                position: Vector2([0, 0]),
                size: Vector2([112, 112]),
                lever: {
                    position: Vector2([0, 0]),
                    size: Vector2([64, 64])
                }
            },
            players: [
                Player({
                    image: me.image,
                    name: me.name,
                    rotation: Vector3([0, 0, 0]),
                    position: Vector2([20, 0]),
                    velocity: Vector2([0, 0]),
                    size: Vector2([120, 190]),
                    type: 1,
                    vitality: 100,
                    maxVitality: 100,
                    action: "NONE"
                }),
                Player({
                    image: opponent.image,
                    name: opponent.name,
                    rotation: Vector3([0, 180, 0]),
                    position: Vector2([430, 0]),
                    velocity: Vector2([0, 0]),
                    size: Vector2([120, 190]),
                    type: 1,
                    vitality: 100,
                    maxVitality: 100,
                    action: "NONE"
                })
            ],
            settings: {
                layout: {
                    directionalPadPosition: Vector2([10, 210]),
                    lightPunchButtonPosition: Vector2([380, 260]),
                    heavyPunchButtonPosition: Vector2([440, 260]),
                    guardButtonPosition: Vector2([500, 260])
                }
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
            event.preventDefault()

            var {key} = event
            var {players} = this.state
            var player = players[0]

            player.action[
                key == "ArrowUp"    ? "Jump"
              : key == "ArrowRight" ? "MoveRight"
              : key == "ArrowDown"  ? "None"
              : key == "ArrowLeft"  ? "MoveLeft"
              : "Other"
            ] = true
        }

        window.onkeyup = (event) => {
            event.preventDefault()

            var {key} = event
            var {players} = this.state
            var player = players[0]

            player.action[
                key == "ArrowUp"    ? "Jump"
              : key == "ArrowRight" ? "MoveRight"
              : key == "ArrowDown"  ? "None"
              : key == "ArrowLeft"  ? "MoveLeft"
              : "Other"
            ] = false
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

            if (joystick.hidden == false) {
                var {lever} = joystick

                var distance = subtract(
                    add(lever.position, multiply(lever.size, 0.5)),
                    multiply(joystick.size, 0.5)
                )

                players[0] = update(players[0], {
                    position: update(players[0].position, {
                        0: players[0].position[0] + Math.max(Math.min(distance[0] / 20, 4), -4)
                    })
                })

                if (distance[1] * 2 > joystick.size[1])
                    players[0] = jump(players[0])
            }

/*            var {player: {action}} = players[0]

            if (action["MoveRight"])
                players[0] = moveRight(players[0])
            if (action["MoveLeft"])
                players[0] = moveLeft(players[0])
*/
            var entities = World.updateEntities(
                world,
                [
                    ...map(players, Entity),
                    Entity({
                        rotation: Vector2([0, 0]),
                        position: Vector2([0, -100]),
                        velocity: Vector2([0, 0]),
                        size: Vector2([1000, 100]),
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
            onFieldTouchStart={(event) => {
                event.preventDefault()

                var touch = event.targetTouches[0]
                var rect = event.currentTarget.getBoundingClientRect()
                var {joystick} = this.state

                var position = subtract(Vector2([
                    (touch.pageX - rect.left),
                    rect.height - (touch.pageY - rect.top)
                ]), multiply(joystick.size, 0.5))

                this.state.joystick = update(joystick, {
                    hidden: false,
                    position: position,
                    lever: update(joystick.lever, {
                        position: subtract(
                            multiply(joystick.size, 0.5),
                            multiply(joystick.lever.size, 0.5)
                        )
                    })
                })
            }}
            onFieldTouchMove={(event) => {
                event.preventDefault()

                var {joystick} = this.state
                var touch = event.targetTouches[0]
                var rect = event.currentTarget.getBoundingClientRect()
                var {size} = joystick

                var position = subtract(Vector2([
                    (touch.pageX - rect.left),
                    rect.height - (touch.pageY - rect.top)
                ]), multiply(joystick.lever.size, 0.5))

                this.state.joystick = update(joystick, {
                    lever: update(joystick.lever, {
                        position: subtract(position, joystick.position)
                    })
                })
            }}
            onFieldTouchEnd={(event) => {
                event.preventDefault()
    
                var {joystick} = this.state

                this.state.joystick = update(joystick, {
                    hidden: true,
                    lever: update(joystick.lever, {
                        position: subtract(
                            multiply(joystick.size, 0.5),
                            multiply(joystick.lever.size, 0.5)
                        )
                    })
                })
            }}
        />
    }
}

var jump = (player) => player.position[1] > 0 ? player : update(player, {
    velocity: add(player.velocity, Vector2([0, 5]))
})

var squat = (player) => undefined
