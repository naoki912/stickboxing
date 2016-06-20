import * as React from "react"
import * as battleViewStyles from "stickboxing/styles/BattleViewStyles"
import * as styles from "stickboxing/styles/SettingsViewStyles"
import { settings } from "stickboxing/test/data"

let onButtonPressed = (event) => {
    let button = event.currentTarget
    let x = event.clientX
    let y = event.clientY

    button.onmousemove = (event) => {
        console.log(event.clientX - x)
        button.style.left = parseInt(button.style.left) + (event.clientX - x) + "px"
        button.style.top = parseInt(button.style.top) + (event.clientY - y) + "px"
    }

    button.onmouseup = (event) => {
        console.log("test2")
        button.mousemove = null
    }
}

export let SettingsView = (props) =>
    <div className={styles.settings}>
      <img className="titleimage"
        src="/images/stage1.jpg"
        style={{ width: "600px", height: "500px" }}>
      </img>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Settings
        </h1>
        <div className={battleViewStyles.battleView}>
          <div
            className={battleViewStyles.butoon}
            style={{
              left: (settings.buttonLayout.allowButtonPosition.x || 0) + "px",
              top: (settings.buttonLayout.allowButtonPosition.y || 0) + "px",
              backgroundImage: "url(/images/allowButton.png)"
            }}/>
          <div
            className={battleViewStyles.butoon}
            style={{
              left: (settings.buttonLayout.allowButtonPosition.x || 0) + "px",
              top: (settings.buttonLayout.allowButtonPosition.y || 0) + "px",
              backgroundImage: "url(/images/lightPunchButton.png)"
            }}
            onMouseDown={onButtonPressed}/>
          <div
            className={battleViewStyles.button}
            style={{
              left: (settings.buttonLayout.allowButtonPosition.x || 0) + "px",
              top: (settings.buttonLayout.allowButtonPosition.y || 0) + "px",
              backgroundImage: "url(/images/heavyPunchButton.png)"
            }}
            onMouseDown={onButtonPressed}/>
          <div
            className={battleViewStyles.button}
            style={{
              left: (settings.buttonLayout.allowButtonPosition.x || 0) + "px",
              top: (settings.buttonLayout.allowButtonPosition.y || 0) + "px",
              backgroundImage: "url(/images/guardButton.png)"
            }}
            onMouseDown={onButtonPressed}/>
        </div>
      </div>
    </div>
