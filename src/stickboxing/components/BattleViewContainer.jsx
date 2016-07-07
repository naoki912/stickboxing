import React from "react"
import BattleView from "stickboxing/components/BattleView"
import Enum from "stickboxing/data/Enum"
import List from "stickboxing/data/List"
import Player from "stickboxing/data/Player"
import Vector from "stickboxing/geometry/Vector"
import Vector2 from "stickboxing/geometry/Vector2"
import Vector3 from "stickboxing/geometry/Vector3"
import Entity from "stickboxing/physics/Entity"
import * as World from "stickboxing/physics/World"

var {map, zip} = Enum
var {add, multiply} = Vector

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 60,
            lastTime: Date.now(),
            players: [
                Player({
                    image: "/images/player.gif",
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
                    image: "/images/player.gif",
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
            stage: {
                image: "/images/stage0.svg"
            },
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
            var {lastTime, players, world} = this.state
/*            var {player: {action}} = players[0]

            if (action["Jump"])
                players[0] = jump(players[0])
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
                players: map(zip(players, entities), ([p, e]) => p(e))
            })
        }, 16)
    }

    render() {
        return <BattleView {...this.state}
            onUpArrowButtonPressed={(event) =>
                this.state.players[0] = jump(this.state.players[0])
            }
            onRightArrowButtonPressed={(event) => {
                this.state.players[0] = moveRight(this.state.players[0])

                var id = setInterval(() =>
                    this.state.players[0] = moveRight(this.state.players[0])
                , 16)

                window.ontouchend = () => clearInterval(id)
            }}
            onLeftArrowButtonPressed={(event) => {
                moveLeft(this.state.player1)

                var id = setInterval(() =>
                    this.state.player1 = moveLeft(this.state.player1)
                , 16)

                window.ontouchend = () => clearInterval(id)
            }}
            onDownArrowButtonPressed={() => {
                this.state.player1.vitality = Math.max(
                    this.state.player1.vitality * 0.5,
                    0
                )
            }}
        />
    }
}

var jump = (player) => player.position[1] > 0 ? player : player({
    velocity: add(player.velocity, Vector2([0, 5]))
})

var squat = (player) => undefined

var moveLeft = (player) => player({
    position: add(player.position, Vector2([-3, 0]))
})

var moveRight = (player) => player({
    position: add(player.position, Vector2([3, 0]))
})
