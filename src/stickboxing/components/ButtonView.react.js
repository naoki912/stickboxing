import * as React from "react"

export var ButtonView = (props) =>
    <button {...props}
      type="button"
      style={{
          left: props.position ? props.position.x + "px" : null,
          top: props.position ? props.position.y + "px" : null
      }}/>
