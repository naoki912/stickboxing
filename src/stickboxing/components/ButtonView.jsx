import React from "react"
import styles from "stickboxing/styles/ButtonViewStyles"

export default (props) =>
    <button {...props}
      className={styles.buttonView + " " + props.className}
      style={{
          left: props.position ? props.position[0] + "px" : null,
          top: props.position ? props.position[1] + "px" : null
      }}
      type="button"/>
