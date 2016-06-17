import * as React from "react"
import * as styles from "stickboxing/styles/CharacterStyles.css"


var globeList = [
    { id: 0, name: "Globe1", image: "/images/globe.jpg" },
    { id: 1, name: "Globe2", image: "/images/globe.jpg" },
    { id: 2, name: "Globe3", image: "/images/globe.jpg" },
    { id: 3, name: "Globe4", image: "/images/globe.jpg" }
]

var pantList = [
    { id: 0, name: "Pant1", image: "/images/pant.jpg" },
    { id: 1, name: "Pant2", image: "/images/pant.jpg" },
    { id: 2, name: "Pant3", image: "/images/pant.jpg" },
    { id: 3, name: "Pant4", image: "/images/pant.jpg" }
]

var beltList = [
    { id: 0, name: "belt1", image: "/images/belt.jpg" },
    { id: 1, name: "belt2", image: "/images/belt.jpg" },
    { id: 2, name: "belt3", image: "/images/belt.jpg" },
    { id: 3, name: "belt4", image: "/images/belt.jpg" }
]

var hasGlobeList = [
    { id: 0, name: "HasGlobe1", image: "/images/hasGlobe.jpg" },
    { id: 1, name: "HasGlobe2", image: "/images/hasGlobe.jpg" }
]

var hasPantList = [
    { id: 1, name: "HasPaint2", image: "/images/hasPaint.jpg" },
    { id: 3, name: "HasPaint4", image: "/images/hasPaint.jpg" }
]

var hasBeltList = [
    { id: 0, name: "HasBelt1", image: "/images/hasBelt.jpg" },
    { id: 2, name: "HasBelt3", image: "/images/hasBelt.jpg" }
]

var testHasGlobeList = [
    { id: 0 },
    { id: 1 }
]


export var CharacterView = (props) =>
    <div>
        <div className={styles.title}>
            Character
        </div>
        <ul>
            GlobeList
            {globeList.map(
                (globe) =>
                    <li>
                        { globe.name }
                    </li>
            )}
            <br />
            
            PantList
            {pantList.map(
                (pant) =>
                    <li>
                        { pant.name }
                    </li>
            )}
            <br />
            
            BeltList
            {beltList.map(
                (belt) =>
                    <li>
                        { belt.name }
                    </li>
            )}
            <br />
            
            HasGlobeList
            {hasGlobeList.map(
                (globe) =>
                    <li>
                        { globe.name }
                    </li>
            )}
            <br />
            
            HasPantList
            {hasPantList.map(
                (pant) =>
                    <li>
                        { pant.name }
                    </li>
            )}
            <br />
            
            HasBeltList
            {hasBeltList.map(
                (belt) =>
                    <li>
                        { belt.name }
                    </li>
            )}
            <br />
            
        </ul>
    </div>
