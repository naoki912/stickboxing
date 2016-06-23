import * as React from "react"
import * as styles from "stickboxing/styles/BattleViewStyles"

export var BattleView = (props) =>
    <div className={styles.battleView} style={{"backgroundImage": "url(" + "/images/stage0.jpg" + ")"}}>
      <div className={styles.info}>
        <div className={styles.vitalityGaugeContainer1}>
          <VitalityGaugeView player={props.player1}/>
        </div>
        <div className={styles.time}>60</div>
        <div className={styles.vitalityGaugeContainer2}>
          <VitalityGaugeView player={props.player2}/>
        </div>
      </div>
      <div className={styles.allowButtonsContainer}
        style={{
            left: props.settings.buttonLayout.allowButtonsPosition.x + "px",
            top: props.settings.buttonLayout.allowButtonsPosition.y + "px"
        }}>
        <div className={styles.upAllowButton}
          onMouseDown={props.onUpAllowButtonPressed}>
          ↑
        </div>
        <div className={styles.rightAllowButton}
          onMouseDown={props.onRightAllowButtonPressed}>
          →
        </div>
        <div className={styles.downAllowButton}
          onMouseDown={props.onDownAllowButtonPressed}>
          ↓
        </div>
        <div className={styles.leftAllowButton}
          onMouseDown={props.onLeftAllowButtonPressed}>
          ←
        </div>
      </div>
      <LightPunchButtonView
        style={{
            left: props.settings.buttonLayout.lightPunchButtonPosition.x + "px",
            top: props.settings.buttonLayout.lightPunchButtonPosition.y + "px"
        }}/>
      <HeavyPunchButtonView
        style={{
            left: props.settings.buttonLayout.heavyPunchButtonPosition.x + "px",
            top: props.settings.buttonLayout.heavyPunchButtonPosition.y + "px"
        }}/>
      <GuardButtonView
        style={{
            left: props.settings.buttonLayout.guardButtonPosition.x + "px",
            top: props.settings.buttonLayout.guardButtonPosition.y + "px"
        }}/>
      <PlayerView player={props.player1}/>
      <PlayerView player={props.player2}/>
    </div>

var VitalityGaugeView = (props) => {
    var percentage = Math.ceil(props.player.vitality / props.player.maxVitality * 100)
    return <div {...props}
          className={
              percentage > 50
                  ? styles.vitalityGaugeView
            : percentage > 20
                  ? styles.vitalityGaugeView2
            : percentage > 10
                  ? styles.vitalityGaugeView3
            : styles.vitalityGaugeView4
          }
          style={{
              width: percentage + "%"
          }}/>
}
    

var LightPunchButtonView = (props) => 
    <div {...props} className={styles.lightPunchButtonView}>
      L
    </div>

var HeavyPunchButtonView = (props) => 
    <div {...props} className={styles.heavyPunchButtonView}>
      H
    </div>

var GuardButtonView = (props) =>
    <div {...props} className={styles.guardButtonView}>
      G
    </div>

var PlayerView = (props) =>
    <div {...props} className={styles.playerView}
      style={{
          left: props.player.position.x + "px",
          top: props.player.position.y + "px",
          width: props.player.size.width + "px",
          height: props.player.size.width + "px",
          backgroundImage: "url(" + props.player.image + ")"
      }}>
    </div>
