import * as React from "react"
import { Link } from "react-router"

export var StageView = (props) =>
    <div className="stage">
      <img
        className="image"
        src={ props.stage.image }
        style={ { width: "400px", height: "300px" } }>
      </img>
      <div className="name">
      { props.stage.name }
      </div>
    </div>
