import * as React from "react"
import { BattleView } from "stickboxing/components/BattleView"
import * as world from "stickboxing/physics/World"
import { merge } from "stickboxing/utils/Object"

export var BattleViewContainer = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            time: 60,
            lastTime:
             Date.now(),
            players: [
                {
                    image: "/images/player.png",
                    position: {x: 20, y: 0},
                    velocity: {x: 0, y: 0},
                    size: {width: 120, height: 120},
                    vitality: 100,
                    maxVitality: 100
                },
                {
                    image: "/images/player.png",
                    position: {x: 460, y: 0},
                    velocity: {x: 0, y: 0},
                    size: {width: 120, height: 120},
                    vitality: 100,
                    maxVitality: 100
                }
            ],
            settings: {
                layout: {
                    directionalPadPosition: {x: 10, y: 210},
                    guardButtonPosition: {x: 500, y: 200},
                    lightPunchButtonPosition: {x: 440, y: 260},
                    heavyPunchButtonPosition: {x: 500, y: 260}
                }
            },
            stage: {
                image: "/images/stage0.jpg"
            },
            world: {
                gravity: {x: 0, y: -9.8}
            }
        }
    }

    componentDidMount() {
        var self = this

        window.onkeydown = (event) => {
            event.preventDefault()

            switch (event.key) {
                case "ArrowUp":
                    self.state.players[0] = jump(self.state.players[0])
                    return
                case "ArrowRight":
                    self.state.players[0] = moveRight(self.state.players[0])
                    return
                case "ArrowDown":
                    self.state.players[0].vitality *= 0.5
                    self.state.world.gravity.y *= -1
                    return
                case "ArrowLeft":
                    self.state.players[0] = moveLeft(self.state.players[0])
                    return
            }
        }

        var secondsIntervelID = setInterval(() => {
            if (self.state.time > 0)
                self.setState({time: self.state.time - 1})
            else
                clearInterval(secondsIntervelID)
        }, 1000)

        self.setState({prev: Date.now()})
        var frameIntervalID = setInterval(() => {
            var now = Date.now()
            var players = world.updateEntities(
                (now - self.state.lastTime) / 1000,
                self.state.world,
                [
                    ...self.state.players,
                ]
            )
            self.setState({lastTime: now, players: players})
        }, 16)
    }

    render() {
        var self = this

        return <BattleView {...this.state}
            onUpArrowButtonPressed={(event) =>
                self.state.players[0] = jump(self.state.players[0])
            }
            onRightArrowButtonPressed={(event) => {
                self.state.players[0] = moveRight(self.state.players[0])

                var id = setInterval(() =>
                    self.state.players[0] = moveRight(self.state.players[0])
                , 16)

                window.ontouchend = () => clearInterval(id)
            }}
            onLeftArrowButtonPressed={(event) => {
                moveLeft(self.state.player1)

                var id = setInterval(() =>
                    self.state.player1 = moveLeft(self.state.player1)
                , 16)

                window.ontouchend = () => clearInterval(id)
            }}
            onDownArrowButtonPressed={() => {
                self.state.player1.vitality = Math.max(
                    self.state.player1.vitality * 0.5,
                    0
                )
            }}/>
    }
}

var jump = (player) => player.position.y > 0 ? player : merge(player, {
    velocity: {
        x: player.velocity.x,
        y: player.velocity.y + 4
    }
})

var squat = (player) => undefined

var moveLeft = (player) => merge(player, {
    position: {
        x: player.position.x - 3,
        y: player.position.y
    }
})

var moveRight = (player) => merge(player, {
    position: {
        x: player.position.x + 3,
        y: player.position.y
    }
})
