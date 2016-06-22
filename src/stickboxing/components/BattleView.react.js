import * as React from "react"
import * as styles from "stickboxing/styles/BattleViewStyles"
import { settings } from "stickboxing/test/data"

let testProps ={
    player1: {
        vitality: 20,
        maxVitality: 100,
        image: ""
    },
    player2: {
        vitality: 100,
        maxVitality: 100,
        image: ""
    }
}

let VitalityGaugeView = (props) => {
    let percentage = Math.ceil(props.player.vitality / props.player.maxVitality * 100)
    return <div
          className={
              percentage > 20
                  ? styles.vitalityGaugeView
            : percentage > 10
                  ? styles.vitalityGaugeView2
            : styles.vitalityGaugeView3
          }
          style={{
              width: percentage + "%"
          }}/>
}

let LightPunchButton = (props) => 
    <div
      {...props}
      className={styles.lightPunchButton}>
      L
    </div>

let HeavyPunchButton = (props) => 
    <div
      {...props}
      className={styles.heavyPunchButton}>
      H
    </div>

let GuardButton = (props) =>
    <div
      {...props}
      className={styles.guardButton}>
      G
    </div>

export var BattleView = (props) =>
    <div className={styles.battleView} style={{"backgroundImage": "url(" + "/images/boxing-ring.jpg" + ")"}}>
      <div className={styles.info}>
        <div className={styles.vitalityGaugeContainer1}>
          <VitalityGaugeView player={testProps.player1}/>
        </div>
        <div className={styles.time}>60</div>
        <div className={styles.vitalityGaugeContainer2}>
          <VitalityGaugeView player={testProps.player2}/>
        </div>
      </div>
      <div
        style={{
            left: settings.buttonLayout.allowButtonPosition.x + "px",
            top: settings.buttonLayout.allowButtonPosition.y + "px",
            backgroundImage: "url(/images/allowButton.png)"
        }}/>
      <LightPunchButton
        style={{
            left: settings.buttonLayout.lightPunchButtonPosition.x + "px",
            top: settings.buttonLayout.lightPunchButtonPosition.y + "px"
        }}/>
      <HeavyPunchButton
        style={{
            left: settings.buttonLayout.heavyPunchButtonPosition.x + "px",
            top: settings.buttonLayout.heavyPunchButtonPosition.y + "px"
        }}/>
      <GuardButton
        style={{
            left: settings.buttonLayout.guardButtonPosition.x + "px",
            top: settings.buttonLayout.guardButtonPosition.y + "px"
        }}/>
    </div>
