import * as React from "react"
import { ButtonView } from "stickboxing/components/ButtonView"
import * as styles from "stickboxing/styles/BattleViewStyles"

export var BattleView = (props) =>
    <div className={styles.battleView}
      style={{
          "backgroundImage": "url(" + props.stage.image + ")"
      }}>
      <div className={styles.info}>
        <div className={styles.vitalityGaugeContainer1}>
          <VitalityGaugeView player={props.players[0]}/>
        </div>
        <div className={styles.time}>{props.time}</div>
        <div className={styles.vitalityGaugeContainer2}>
          <VitalityGaugeView player={props.players[1]}/>
        </div>
      </div>
      <div className={styles.directionalPad}
        style={{
            left: props.settings.layout.directionalPadPosition.x + "px",
            top: props.settings.layout.directionalPadPosition.y + "px"
        }}>
        <ButtonView className={styles.upArrowButton}
          onTouchStart={props.onUpArrowButtonPressed}>
          ↑
        </ButtonView>
        <ButtonView className={styles.rightArrowButton}
          onTouchStart={props.onRightArrowButtonPressed}>
          →
        </ButtonView>
        <ButtonView className={styles.downArrowButton}
          onTouchStart={props.onDownArrowButtonPressed}>
          ↓
        </ButtonView>
        <ButtonView className={styles.leftArrowButton}
          onTouchStart={props.onLeftArrowButtonPressed}>
          ←
        </ButtonView>
      </div>
      <ButtonView className={styles.lightPunchButton}
        position={props.settings.layout.lightPunchButtonPosition}
        onTouchStart={props.onlightPunchButtonPressed}>
        L
      </ButtonView>
      <ButtonView className={styles.heavyPunchButton}
        position={props.settings.layout.heavyPunchButtonPosition}
        onTouchStart={props.onHeavyPunchButtonPressed}>
        H
      </ButtonView>
      <ButtonView className={styles.guardButton}
        position={props.settings.layout.guardButtonPosition}
        onTouchStart={props.onGuardButtonPressed}>
        G
      </ButtonView>
      <div className={styles.field}>
      {
          props.players.map((player, i) => <PlayerView key={i} player={player}/>)
      }
      </div>
    </div>

var VitalityGaugeView = (props) => {
    var percentage = Math.ceil(props.player.vitality / props.player.maxVitality * 100)
    return (
        <div {...props}
          className={
              percentage > 50 ? styles.vitalityGaugeView
            : percentage > 20 ? styles.vitalityGaugeView2
            : percentage > 10 ? styles.vitalityGaugeView3
            :                   styles.vitalityGaugeView4
          }
          style={{width: percentage + "%"}}/>
    )
}

var PlayerView = (props) =>
    <div {...props}
      className={styles.playerView}
      style={{
          left:   props.player.position.x + "px",
          bottom: props.player.position.y + "px",
          width:  props.player.size.width + "px",
          height: props.player.size.width + "px",
          backgroundImage: "url(" + props.player.image + ")"
      }}>
    </div>
