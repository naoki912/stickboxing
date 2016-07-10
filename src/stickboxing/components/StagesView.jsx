import {Enum, List, Range} from "base"
import React from "react"
import styles from "stickboxing/styles/StagesViewStyles"
import ButtonView from "stickboxing/components/ButtonView"
import {Link} from "react-router"

var {zipWith} = Enum

export default ({
    onIndexChanged,
    selectedIndex,
    stages
}) =>
    <div className={styles.StagesView}
        style={{
            backgroundImage: "url(" + stages[selectedIndex].image + ")"
         }}>
      <div className={styles.Title}>
        STAGE SELECT
      </div>
      <ul className={styles.StageList}>
      {stages.map((stage, i) =>
          <li key={i}>
            <StageView
                className={i == selectedIndex ? styles.SelectedStageView : ""}
                onMouseDown={() => onIndexChanged(i)}
                onTouchStart={() => onIndexChanged(i)}
                stage={stage} />
          </li>
      )}
      </ul>
      <div className={styles.StageName}>
        {stages[selectedIndex].name}
      </div>
      <Link className={styles.selectButton}
        to={{
            pathname: "/battle",
            query: {
                ["stage_id"]: stages[selectedIndex].id
            }
        }}>
        Fight
      </Link>
    </div>

export var StageView = (props) => 
    <div {...props}
        className={styles.StageView + " " + props.className}
        style={{
            backgroundImage: "url(" + props.stage.image + ")"
        }}
    >
    </div>
