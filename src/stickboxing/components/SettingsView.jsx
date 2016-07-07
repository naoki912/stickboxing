import React from "react"
import battleViewStyles from "stickboxing/styles/BattleViewStyles"
import styles from "stickboxing/styles/SettingsViewStyles"
import settings from "stickboxing/test/data"

var onButtonMouseDown = (event) => {
    var button = event.currentTarget
    var buttonRect = button.getBoundingClientRect()
    var parentRect = button.parentElement.getBoundingClientRect()
    var maxX = parentRect.width - buttonRect.width
    var maxY = parentRect.height - buttonRect.height
    var x = parseInt(button.style.left) - event.clientX
    var y = parseInt(button.style.top) - event.clientY

    document.body.onmousemove = (event) => {
        button.style.left = Math.min(Math.max(x + event.clientX, 0), maxX) + "px"
        button.style.top = Math.min(Math.max(y + event.clientY, 0), maxY) + "px"
    }

    document.body.onmouseup = (event) => {
        document.body.onmousemove = null
    }
}

var onButtonTouchStart = (event) => {
    var button = event.currentTarget
    var buttonRect = button.getBoundingClientRect()
    var parentRect = button.parentElement.getBoundingClientRect()
    var maxX = parentRect.width - buttonRect.width
    var maxY = parentRect.height - buttonRect.height
    var touch = event.targetTouches[0]
    var x = parseInt(button.style.left) - touch.clientX
    var y = parseInt(button.style.top) - touch.clientY

    document.body.ontouchmove = (event) => {
        event.preventDefault()

        var touch = event.targetTouches[0]

        button.style.left = Math.min(Math.max(x + touch.clientX, 0), maxX) + "px"
        button.style.top = Math.min(Math.max(y + touch.clientY, 0), maxY) + "px"
    }

    document.body.ontouchend = (event) => {
        document.body.onmousemove = null
    }
}

var Button = (props) =>
    <div
      {...props}
      className={battleViewStyles.button}
      onMouseDown={onButtonMouseDown}
      onTouchStart={onButtonTouchStart}/>

export default (props) =>
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
