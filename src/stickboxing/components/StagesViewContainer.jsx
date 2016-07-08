import React from "react"
import Stage from "stickboxing/data/Stage"
import StagesView from "stickboxing/components/StagesView"

export default class extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            stages: [
                Stage({id: 0, name: "Name1", image: "/images/stage0.svg"}),
                Stage({id: 1, name: "Name2", image: "/images/stage0.jpg"}),
                Stage({id: 2, name: "Name3", image: "/images/stage1.svg"}),
                Stage({id: 3, name: "Name4", image: "/images/stage1.jpg"}),
                Stage({id: 4, name: "Name5", image: "/images/stage1.jpg"})
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
