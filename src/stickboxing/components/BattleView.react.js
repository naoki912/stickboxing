import * as React from "react"
import { ButtonView } from "stickboxing/components/ButtonView"
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
        <ButtonView className={styles.upAllowButton}
          onMouseDown={props.onUpAllowButtonPressed}>
          ↑
        </ButtonView>
        <ButtonView className={styles.rightAllowButton}
          onMouseDown={props.onRightAllowButtonPressed}>
          →
        </ButtonView>
        <ButtonView className={styles.downAllowButton}
          onMouseDown={props.onDownAllowButtonPressed}>
          ↓
        </ButtonView>
        <ButtonView className={styles.leftAllowButton}
          onMouseDown={props.onLeftAllowButtonPressed}>
          ←
        </ButtonView>
      </div>
      <ButtonView className={styles.lightPunchButtonView}
        position={props.settings.buttonLayout.lightPunchButtonPosition}>
        L
      </ButtonView>
      <ButtonView className={styles.heavyPunchButtonView}
        position={props.settings.buttonLayout.heavyPunchButtonPosition}>
        H
      </ButtonView>
      <ButtonView className={styles.guardButtonView}
        position={props.settings.buttonLayout.guardButtonPosition}>
        G
      </ButtonView>
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
