import base, {Enum, List} from "base"
import React from "react"
import Stage from "stickboxing/data/Stage"
import StagesView from "stickboxing/components/StagesView"
import database from "stickboxing/test/database"

var {map} = Enum

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stages: [
                {
                    "id": 0,
                    "name": "Ring",
                    "background": "/stages/0/background.svg",
                    "foreground": "/stages/0/foreground.svg"
                },
                {
                    "id": 0,
                    "name": "Ring",
                    "background": "/stages/0/background.svg",
                    "foreground": "/stages/0/foreground.svg"
                },
                {
                    "id": 0,
                    "name": "Ring",
                    "background": "/stages/0/background.svg",
                    "foreground": "/stages/0/foreground.svg"
                },
                {
                    "id": 0,
                    "name": "Ring",
                    "background": "/stages/0/background.svg",
                    "foreground": "/stages/0/foreground.svg"
                },
                {
                    "id": 0,
                    "name": "Ring",
                    "background": "/stages/0/background.svg",
                    "foreground": "/stages/0/foreground.svg"
                }
            ],
            selectedIndex: 0
        }
    }

    

    render() {
        return <StagesView {...this.state}
            onIndexChanged={(index) => this.setState({
                selectedIndex: index
            })}
         />
    }
}
