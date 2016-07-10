import base, {Enum, List} from "base"
import React from "react"
import Stage from "stickboxing/data/Stage"
import StagesView from "stickboxing/components/StagesView"
import api from "stickboxing/test/api"

var {map} = Enum

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stages: map(api["/stages"], Stage),
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
