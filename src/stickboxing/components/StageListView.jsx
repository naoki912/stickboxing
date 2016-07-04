import * as React from "react"
import { StageView } from "stickboxing/components/StageView"
import * as styles from "stickboxing/styles/StageListViewStyles"
import { ButtonView } from "stickboxing/components/ButtonView"

var selectStageID = 4



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
              <li key={stage.id} ><ButtonView className={styles.stageChoice} >
                <StageView onTouchStart={() => props.onStageSelecteListener(stage)}  stage={stage} />
                </ButtonView>
              </li>
      )}
      </ul>
      <ButtonView className={styles.selectButton}  onTouchStart={() => props.onStageSelected(stage)}>
      {(selectStageID == null ? null
         : (selectStageID == 0 ? "Name1に決定" 
          : (selectStageID == 1 ? "Name2に決定" 
            : (selectStageID == 2 ? "Name3に決定" 
              : (selectStageID == 3 ? "Name4に決定" 
                : "Name5に決定"
                )
              )
            )
          )
        )}
      </ButtonView>
    </div>
    
    