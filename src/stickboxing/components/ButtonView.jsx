import * as React from "react"
import * as styles from "stickboxing/styles/ButtonViewStyles"

export var ButtonView = (props) =>
    <button {...props}
      className={styles.buttonView + " " + props.className}
      style={{
          left: props.position ? props.position.x + "px" : null,
          top: props.position ? props.position.y + "px" : null
      }}
      type="button"/>
