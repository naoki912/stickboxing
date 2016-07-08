import React from "react"
import styles from "stickboxing/styles/StagesViewStyles"
import ButtonView from "stickboxing/components/ButtonView"

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
      <ButtonView className={styles.selectButton}>
        Fight
      </ButtonView>
    </div>

export var StageView = (props) => 
    <div {...props}
        className={styles.StageView + " " + props.className}
        style={{
            backgroundImage: "url(" + props.stage.image + ")"
        }}
    >
    </div>
