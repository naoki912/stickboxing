import React from "react"
import ButtonView from "stickboxing/components/ButtonView"
import List from "stickboxing/data/List"
import Enum from "stickboxing/data/Enum"
import styles from "stickboxing/styles/BattleViewStyles"

var {map} = Enum

export default ({
    onDownArrowButtonPressed,
    onGuardButtonPressed,
    onHeavyPunchButtonPressed,
    onLeftArrowButtonPressed,
    onLightPunchButtonPressed,
    onRightArrowButtonPressed,
    onUpArrowButtonPressed,
    players,
    settings,
    stage,
    time
}) =>
    <div className={styles.BattleView}
      style={{
          "backgroundImage": "url(" + stage.image + ")"
      }}>
      <div className={styles.Info}>
        <div className={styles.VitalityGaugeContainer1}>
          <VitalityGaugeView player={players[0]}/>
        </div>
        <div className={styles.Time}>{time}</div>
        <div className={styles.VitalityGaugeContainer2}>
          <VitalityGaugeView player={players[1]}/>
        </div>
      </div>
      <div className={styles.DirectionalPad}
        style={{
            left: settings.layout.directionalPadPosition[0] + "px",
            top: settings.layout.directionalPadPosition[1] + "px"
        }}>
        <ButtonView className={styles.UpArrowButton}
          onTouchStart={onUpArrowButtonPressed}>
          ↑
        </ButtonView>
        <ButtonView className={styles.RightArrowButton}
          onTouchStart={onRightArrowButtonPressed}>
          →
        </ButtonView>
        <ButtonView className={styles.DownArrowButton}
          onTouchStart={onDownArrowButtonPressed}>
          ↓
        </ButtonView>
        <ButtonView className={styles.LeftArrowButton}
          onTouchStart={onLeftArrowButtonPressed}>
          ←
        </ButtonView>
      </div>
      <ButtonView className={styles.LightPunchButton}
        position={settings.layout.lightPunchButtonPosition}
        onTouchStart={onLightPunchButtonPressed}>
        L
      </ButtonView>
      <ButtonView className={styles.HeavyPunchButton}
        position={settings.layout.heavyPunchButtonPosition}
        onTouchStart={onHeavyPunchButtonPressed}>
        H
      </ButtonView>
      <ButtonView className={styles.GuardButton}
        position={settings.layout.guardButtonPosition}
        onTouchStart={onGuardButtonPressed}>
        G
      </ButtonView>
      <div className={styles.Field}>
      {
          players.map((player, i) => <PlayerView key={i} player={player}/>)
      }
      </div>
    </div>

var VitalityGaugeView = ({player: {vitality, maxVitality}}) => {
    var percentage = Math.ceil(vitality / maxVitality * 100)
    return (
        <div
          className={
              percentage > 50 ? styles.VitalityGaugeView
            : percentage > 20 ? styles.VitalityGaugeView2
            : percentage > 10 ? styles.VitalityGaugeView3
            :                   styles.VitalityGaugeView4
          }
          style={{width: percentage + "%"}}/>
    )
}

var PlayerView = ({player: {position, rotation, size, image}}) =>
    <div
      className={styles.PlayerView}
      style={{
          left:   position[0] + "px",
          bottom: position[1] + "px",
          width:  size[0] + "px",
          height: size[1] + "px",
          backgroundImage: "url(" + image + ")",
          transform:
              "rotateX(" + rotation[0] + "deg) rotateY(" + rotation[1] + "deg) rotateZ(" + rotation[2] + "deg)"
      }}>
    </div>
