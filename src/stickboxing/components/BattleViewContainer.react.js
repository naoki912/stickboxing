import * as React from "react"
import { BattleView } from "stickboxing/components/BattleView"

export var BattleViewContainer = class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            player1: {
                image: "/images/player.png",
                maxVitality: 100,
                position: { x: 100, y: 120 },
                size: { width: 120, height: 200 },
                vitality: 100,
            },
            player2: {
                image: "/images/player.png",
                maxVitality: 100,
                position: { x: 400, y: 120 },
                size: { width: 120, height: 200 },
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

    render() {
        var self = this
        return <BattleView {...this.state}
            onUpAllowButtonPressed={() => {
                self.state.player1.vitality = Math.min(
                    self.state.player1.vitality + 10,
                    self.state.player1.maxVitality
                )
                self.forceUpdate()
            }}
            onRightAllowButtonPressed={() => {
                self.state.player1.position.x += 1
                self.forceUpdate()
            }}
            onLeftAllowButtonPressed={() => {
                self.state.player1.position.x -= 1
                self.forceUpdate()
            }}
            onDownAllowButtonPressed={() => {
                self.state.player1.vitality = Math.max(
                    self.state.player1.vitality - 10,
                    0
                )
                self.forceUpdate()
            }}/>
    }
}
