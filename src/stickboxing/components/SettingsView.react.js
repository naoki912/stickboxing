import * as React from "react"
import * as battleViewStyles from "stickboxing/styles/BattleViewStyles"
import * as styles from "stickboxing/styles/SettingsViewStyles"
import { settings } from "stickboxing/test/data"

let onButtonPressed = (event) => {
    let button = event.currentTarget
    let buttonRect = button.getBoundingClientRect()
    let battleView = document.querySelector("." + battleViewStyles.battleView)
    let battleViewRect = battleView.getBoundingClientRect()
    let maxX = battleViewRect.width - buttonRect.width
    let maxY = battleViewRect.height - buttonRect.height
    let x = parseInt(button.style.left) - event.clientX
    let y = parseInt(button.style.top) - event.clientY

    battleView.onmousemove = (event) => {
        button.style.left = Math.min(Math.max(x + event.clientX, 0), maxX) + "px"
        button.style.top = Math.min(Math.max(y + event.clientY, 0), maxY) + "px"
    }

    battleView.onmouseup = (event) => {
        battleView.onmousemove = null
    }
}

export let SettingsView = (props) =>
    <div className={styles.settings}>
      <h1 className={styles.title}>
        Settings
      </h1>
      <div className={battleViewStyles.battleView}>
        <div
          className={battleViewStyles.button}
          style={{
            left: (settings.buttonLayout.allowButtonPosition.x || 0) + "px",
            top: (settings.buttonLayout.allowButtonPosition.y || 0) + "px",
            backgroundImage: "url(/images/allowButton.png)"
          }}
          onMouseDown={onButtonPressed}/>
        <div
          className={battleViewStyles.button}
          style={{
            left: (settings.buttonLayout.lightPunchButtonPosition.x || 0) + "px",
            top: (settings.buttonLayout.lightPunchButtonPosition.y || 0) + "px",
            backgroundImage: "url(/images/lightPunchButton.png)"
          }}
          onMouseDown={onButtonPressed}/>
        <div
          className={battleViewStyles.button}
          style={{
              left: (settings.buttonLayout.heavyPunchButtonPosition.x || 0) + "px",
              top: (settings.buttonLayout.heavyPunchButtonPosition.y || 0) + "px",
              backgroundImage: "url(/images/heavyPunchButton.png)"
            }}
            onMouseDown={onButtonPressed}/>
          <div
            className={battleViewStyles.button}
            style={{
              left: (settings.buttonLayout.guardButtonPosition.x || 0) + "px",
              top: (settings.buttonLayout.guardButtonPosition.y || 0) + "px",
              backgroundImage: "url(/images/guardButton.png)"
            }}
            onMouseDown={onButtonPressed}/>
      </div>
    </div>
