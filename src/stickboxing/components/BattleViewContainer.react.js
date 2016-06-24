import * as React from "react"
import { BattleView } from "stickboxing/components/BattleView"
import * as engine from "stickboxing/physics/engine"

export var BattleViewContainer = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            player1: {
                image: "/images/player.png",
                maxVitality: 100,
                position: { x: 100, y: 0 },
                velocity: { x: 0, y: 0 },
                acceleration: { x: 0, y: -9.8 },
                size: { width: 120, height: 120 },
                vitality: 100,
            },
            player2: {
                image: "/images/player.png",
                maxVitality: 100,
                position: { x: 400, y: 0 },
                velocity: { x: 0, y: 0 },
                acceleration: { x: 0, y: -9.8 },
                size: { width: 120, height: 120 },
                vitality: 100,
            },
            settings: {
                buttonLayout: {
                    allowButtonsPosition: {
                        x: 10 ,y: 210
                    },
                    guardButtonPosition: {
                        x: 500, y: 200
                    },
                    lightPunchButtonPosition: {
                        x: 440, y: 260
                    },
                    heavyPunchButtonPosition: {
                        x: 500, y: 260
                    }
                }
            }
        }
    }

    componentDidMount() {
        window.self = this
        var self = this
        var prev = Date.now()
        var id = setInterval(() => {
            var next = Date.now()
            var entries = engine.next((next - prev) / 1000, [
                self.state.player1,
                self.state.player2
            ])
            self.state.player1 = entries[0]
            self.state.player2 = entries[1]
            self.forceUpdate()
            prev = next
        }, 16)
    }

    render() {
        var self = this
        return <BattleView {...this.state}
            onUpAllowButtonPressed={(event) => jump(self.state.player1)}
            onRightAllowButtonPressed={(event) => {
                moveRight(self.state.player1)
                var id = setInterval(() => moveRight(self.state.player1), 16)
                event.currentTarget.onmouseup = () => {
                    clearInterval(id)
                }
            }}
            onLeftAllowButtonPressed={(event) => {
                moveLeft(self.state.player1)
                var id = setInterval(() => moveLeft(self.state.player1), 16)
                event.currentTarget.onmouseup = () => {
                    clearInterval(id)
                }
            }}
            onDownAllowButtonPressed={() => {
                self.state.player1.vitality = Math.max(
                    self.state.player1.vitality - 10,
                    0
                )
            }}/>
    }
}

var jump = (player) => player.velocity.y += 4
var squat = (player) => undefined
var moveLeft = (player) => player.position.x -= 3
var moveRight = (player) => player.position.x += 3
