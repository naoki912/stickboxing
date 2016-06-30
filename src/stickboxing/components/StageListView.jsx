import * as React from "react"
import { StageView } from "stickboxing/components/StageView"
import * as styles from "stickboxing/styles/StageListViewStyles"
import { ButtonView } from "stickboxing/components/ButtonView"

var selectStage = [{id: 0, name: "Name1", image: "/images/stage1.jpg"}]

var test_data = [
  { id: 0, name: "Name1", image: "/images/stage1.jpg" },
  { id: 1, name: "Name2", image: "/images/stage1.jpg" },
  { id: 2, name: "Name3", image: "/images/stage1.jpg" },
  { id: 3, name: "Name4", image: "/images/stage1.jpg" },
  { id: 4, name: "Name5", image: "/images/stage1.jpg" }
]

export var StageListView = (props) =>
    <div className={styles.stages}>
      <div className={styles.title}>
        STAGE SELECT
      </div>
      
      <ul className={styles.stageLine}> 
      {test_data.map(
          (stage) =>
              <li key={stage.id} >
                <StageView onTouchStart="selectStage = stage"  stage={stage} />
              </li>
      )}
      </ul>
      <ButtonView className={styles.selectButton}  onTouchStart={() => props.onStageSelecteListener(selectStage)}>
      決定！
      </ButtonView>
    </div>
    
    