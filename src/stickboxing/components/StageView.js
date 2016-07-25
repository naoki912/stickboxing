import React from "react"
import styles from "stickboxing/styles/StageViewStyles"


export var StageView = (props) =>
    <div {...props} className={styles.StageView + " " + props.className}>
      <div className={styles.Layer}
        style={{
            backgroundImage: "url(" + props.stage.background + ")"
        }}/>
      <div className={styles.Layer}>
        {props.children}
      </div>
      <div className={styles.Layer}
        style={{
            backgroundImage: "url(" + props.stage.foreground + ")"
        }}/>
    </div>

export {StageView as default}
