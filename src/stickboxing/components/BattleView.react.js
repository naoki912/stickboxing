import * as React from "react"
import * as styles from "stickboxing/styles/BattleStyles"

var testData = [

]

var HPBarStyle = (props) => ({
    width: props.player1.hitPoint / props.player1.maxHitPoint + "px",
    height: "20px"
})

export var BattleView = (props) =>
    <div className={styles.Battle}>
        <div className={HPbar} style={HPBarStyle(props)}>
            
        </div>
    </div>

