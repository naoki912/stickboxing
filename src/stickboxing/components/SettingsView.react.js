import * as React from "react"
import * as battleViewStyles from "stickboxing/styles/BattleViewStyles"
import * as styles from "stickboxing/styles/SettingsViewStyles"
import { settings } from "stickboxing/test/data"

let onButtonMouseDown = (event) => {
    let button = event.currentTarget
    let buttonRect = button.getBoundingClientRect()
    let parentRect = button.parentElement.getBoundingClientRect()
    let maxX = parentRect.width - buttonRect.width
    let maxY = parentRect.height - buttonRect.height
    let x = parseInt(button.style.left) - event.clientX
    let y = parseInt(button.style.top) - event.clientY

    document.body.onmousemove = (event) => {
        button.style.left = Math.min(Math.max(x + event.clientX, 0), maxX) + "px"
        button.style.top = Math.min(Math.max(y + event.clientY, 0), maxY) + "px"
    }

    document.body.onmouseup = (event) => {
        document.body.onmousemove = null
    }
}

let onButtonTouchStart = (event) => {
    let button = event.currentTarget
    let buttonRect = button.getBoundingClientRect()
    let parentRect = button.parentElement.getBoundingClientRect()
    let maxX = parentRect.width - buttonRect.width
    let maxY = parentRect.height - buttonRect.height
    let touch = event.targetTouches[0]
    let x = parseInt(button.style.left) - touch.clientX
    let y = parseInt(button.style.top) - touch.clientY

    document.body.ontouchmove = (event) => {
        event.preventDefault()

        let touch = event.targetTouches[0]

        button.style.left = Math.min(Math.max(x + touch.clientX, 0), maxX) + "px"
        button.style.top = Math.min(Math.max(y + touch.clientY, 0), maxY) + "px"
    }

    document.body.ontouchend = (event) => {
        document.body.onmousemove = null
    }
}

let Button = (props) => 
    <div
      {...props}
      className={battleViewStyles.button}
      onMouseDown={onButtonMouseDown}
      onTouchStart={onButtonTouchStart}/>

export let SettingsView = (props) =>
    <div className={styles.settingsView}>
      <h1 className={styles.title}>
        Settings
      </h1>
      <div className={battleViewStyles.battleView}>
        <Button
          style={{
            left: settings.buttonLayout.allowButtonPosition.x + "px",
            top: settings.buttonLayout.allowButtonPosition.y + "px",
            backgroundImage: "url(/images/allowButton.png)"
          }}/>
        <Button
          style={{
              left: settings.buttonLayout.lightPunchButtonPosition.x + "px",
              top: settings.buttonLayout.lightPunchButtonPosition.y + "px",
              backgroundImage: "url(/images/lightPunchButton.png)"
          }}/>
        <Button
          style={{
              left: settings.buttonLayout.heavyPunchButtonPosition.x + "px",
              top: settings.buttonLayout.heavyPunchButtonPosition.y + "px",
              backgroundImage: "url(/images/heavyPunchButton.png)"
          }}/>
        <Button
          style={{
              left: settings.buttonLayout.guardButtonPosition.x + "px",
              top: settings.buttonLayout.guardButtonPosition.y + "px",
              backgroundImage: "url(/images/guardButton.png)"
          }}/>
      </div>
    </div>
