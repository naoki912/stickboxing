import * as React from "react"
import * as styles from "stickboxing/styles/SettingsStyles"
import { settings } from "stickboxing/test/data"

export var SettingsView = (props) =>
    <div className={styles.settings}>
        <img className="titleimage"
            src="/images/stage1.jpg"
            style={ { width: "600px", height: "500px" } }>
        </img>
        <div className={styles.container}>
            <h1 className={styles.title}>
                Settings
            </h1>
            <div className={styles.screen}>
                <img className="backimage"
                    src="/images/back.jpg"
                    style={ { width: "600px", height: "400px" } }>
                </img>
                <div>action
                <img className="idouimage"src="/images/idou.png"   
                style = {{left: "settings.buttonLayout.allowButtonPosition.x" ,
                top: "settings.buttonLayout.allowButtonPosition.y"}}>
                </img>
                <img className="1image"src="/images/1btn.png"></img>
                <img className="2image"src="/images/2btn.png"></img>
                <img className="3image"src="/images/3btn.png"></img>
                <div>
            </div>
        </div>
    </div>
