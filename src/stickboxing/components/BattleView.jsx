import {Enum, List, range} from "base"
import React from "react"
import ButtonView from "stickboxing/components/ButtonView"
import styles from "stickboxing/styles/BattleViewStyles"

var {zipWith} = Enum

export default ({
    joystick,
    onDownArrowButtonPressed,
    onFieldTouchStart,
    onFieldTouchMove,
    onFieldTouchEnd,
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
          backgroundImage: "url(" + stage.image + ")"
      }}>
      <div className={styles.Field}
        onTouchStart={onFieldTouchStart}
        onTouchMove={onFieldTouchMove}
        onTouchEnd={onFieldTouchEnd}>
          {
              zipWith(players, range(0, 10), (player, i) => <PlayerView key={i} player={player}/>)
          }
        <Joystick joystick={joystick}/>
      </div>
      <div className={styles.Info}>
        <div className={styles.VitalityGaugeContainer1}>
          <VitalityGaugeView player={players[0]}/>
        </div>
        <div className={styles.Time}>{time}</div>
        <div className={styles.VitalityGaugeContainer2}>
          <VitalityGaugeView player={players[1]}/>
        </div>
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
    </div>

var Joystick = ({joystick: {hidden, lever, position, size}}) => 
   <div className={styles.Joystick}
     style={{
          visibility: hidden ? "hidden" : "visible",
          left:   position[0] + "px",
          bottom: position[1] + "px",
          width:  size[0] + "px",
          height: size[1] + "px",
          borderRadius: Math.min(size[0], size[1]) / 2 + "px"
     }}>
     <div className={styles.Lever}
       style={{
          left:   lever.position[0] + "px",
          bottom: lever.position[1] + "px",
          width:  lever.size[0] + "px",
          height: lever.size[1] + "px",
          borderRadius: Math.min(lever.size[0], lever.size[1]) / 2 + "px"
       }}/>
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
