import * as React from "react"
import * as styles from "stickboxing/styles/BattleStyles"

var testData = [

]

var HPBarStylePlayer1 = (props) => ({
    width: props.player1.hitPoint / props.player1.maxHitPoint + "px",
})

export var BattleView = (props) =>
    <div className={styles.Battle}>
      <div className={HPbar} style={HPBarStylePlayer1(props)}>
      
      </div>
    </div>

