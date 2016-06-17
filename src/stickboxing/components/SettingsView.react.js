import * as React from "react"
import * as styles from "stickboxing/styles/SettingsStyles"
import { settings } from "stickboxing/test/data"

export var SettingsView = (props) =>
    <div className={styles.settings}>
        <img className="titleimage"
            src="/images/stage1.jpg"
            style={ { width: "400px", height: "300px" } }>
        </img>
      <div className={styles.container}>
        <h1 className={styles.title}>
            Settings
        </h1>
        <ul>
            <button onClick={props.onSubmit}></button>
        </ul>
        </div>
    </div>
