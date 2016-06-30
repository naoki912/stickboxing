import * as React from "react"
import * as styles from "stickboxing/styles/CharacterStyles.css"
import { ButtonView } from "stickboxing/components/ButtonView"


var globeList = [
    { id: 0, name: "Globe1", image: "/images/globe.jpg", has: true },
    { id: 1, name: "Globe2", image: "/images/globe.jpg", has: false },
    { id: 2, name: "Globe3", image: "/images/globe.jpg", has: false },
    { id: 3, name: "Globe4", image: "/images/globe.jpg", has: false }
]

var pantsList = [
    { id: 0, name: "Pant1", image: "/images/pant.jpg", has: true },
    { id: 1, name: "Pant2", image: "/images/pant.jpg", has: false },
    { id: 2, name: "Pant3", image: "/images/pant.jpg", has: false },
    { id: 3, name: "Pant4", image: "/images/pant.jpg", has: false }
]

var beltList = [
    { id: 0, name: "belt1", image: "/images/belt.jpg", has: true },
    { id: 1, name: "belt2", image: "/images/belt.jpg", has: false },
    { id: 2, name: "belt3", image: "/images/belt.jpg", has: false },
    { id: 3, name: "belt4", image: "/images/belt.jpg", has: false }
]
var money = 100

export var CharacterView = (props) =>
    <div className={styles.character}>
        <div className={styles.title}>
            Character 
        </div>
var cnt = 30;
console.log(cnt + "点ゲット！");
        <img src="/images/player.png" width="192" height="192" className={styles.cyara}></img>
        <button className={styles.button} name="btn"> 変更 </button>
        <div >
        <select size = "3" className={styles.list}>
            <option selected="selected">装備</option>
            {globeList.map((globe) => <option>{globe.name}</option>)}
            {pantsList.map((pants) => <option>{pants.name}</option>)}
            {beltList.map((belt) => <option>{belt.name}</option>)}
            {beltList.map((belt) => <option>{belt.name}</option>)}
        </select>
        </div>
    </div>
