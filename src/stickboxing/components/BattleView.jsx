import {Enum, List, range} from "base"
import React from "react"
import ButtonView from "stickboxing/components/ButtonView"
import StageView from "stickboxing/components/StageView"
import styles from "stickboxing/styles/BattleViewStyles"

var {zipWith} = Enum

var scale = (size) => {
    var {clientWidth, clientHeight} = document.documentElement
    var scale = clientWidth / size[0]
    if (scale * size[1] > clientHeight)
        return clientHeight / size[1]
    else
        return scale
}

export default ({
    buttonLayout,
    joystick,
    onDownArrowButtonPressed,
    onStageTouchStart,
    onStageTouchMove,
    onStageTouchEnd,
    onGuardButtonPressed,
    onHeavyPunchButtonPressed,
    onLeftArrowButtonPressed,
    onLightPunchButtonPressed,
    onRightArrowButtonPressed,
    onUpArrowButtonPressed,
    players,
    stage,
    time
}) =>
    <div
      className={styles.BattleView}
      style={{zoom: scale([560, 315])}}>
      <StageView
        className={styles.StageView}
        onTouchStart={onStageTouchStart}
        onTouchMove={onStageTouchMove}
        onTouchEnd={onStageTouchEnd}
        stage={stage}>
        {
            zipWith(players, range(0, 10), (player, i) => <PlayerView key={i} player={player}/>)
        }
      </StageView>
      <div className={styles.Info}>
        <div className={styles.VitalityGaugeContainer1}>
          <VitalityGaugeView player={players[0]}/>
        </div>
        <div className={styles.Time}>{time}</div>
        <div className={styles.VitalityGaugeContainer2}>
          <VitalityGaugeView player={players[1]}/>
        </div>
      </div>
        {
            "ontouchstart" in window
                ? <div>
                    <Joystick joystick={joystick}/>
                    <ButtonView
                      className={styles.LightPunchButton}
                      position={buttonLayout.lightPunchButtonPosition}
                      onTouchStart={onLightPunchButtonPressed}>
                      L
                    </ButtonView>
                    <ButtonView
                      className={styles.HeavyPunchButton}
                      position={buttonLayout.heavyPunchButtonPosition}
                      onTouchStart={onHeavyPunchButtonPressed}>
                      H
                    </ButtonView>
                    <ButtonView
                      className={styles.GuardButton}
                      position={buttonLayout.guardButtonPosition}
                      onTouchStart={onGuardButtonPressed}>
                      G
                    </ButtonView>
                  </div>
                : null
        }
    </div>

var Joystick = ({joystick: {hidden, lever, position, size}}) =>
   <div
     className={styles.Joystick}
     style={{
          visibility: hidden ? "hidden" : "visible",
          left:   position[0] - size[0] / 2 + "px",
          bottom: position[1] - size[1] / 2 + "px",
          width:  size[0] + "px",
          height: size[1] + "px",
          borderRadius: Math.min(size[0], size[1]) / 2 + "px"
     }}>
     <div
       className={styles.Lever}
       style={{
          left:   lever.position[0] - lever.size[0] / 2 + "px",
          bottom: lever.position[1] - lever.size[1] / 2 + "px",
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
              percentage > 75 ? styles.VitalityGaugeView
            : percentage > 50 ? styles.VitalityGaugeView2
            : percentage > 25 ? styles.VitalityGaugeView3
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
          transform: "rotateX(" + rotation[0] + "deg)" +
                     "rotateY(" + rotation[1] + "deg)" +
                     "rotateZ(" + rotation[2] + "deg)"
      }}>
    </div>
