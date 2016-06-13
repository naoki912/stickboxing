import * as React from "react"
import { StageView } from "stickboxing/components/StageView"
import * as styles from "stickboxing/styles/StagesStyles"

var test_data = [
  { id: 0, name: "Name1", image: "/images/stage1.jpg" },
  { id: 1, name: "Name2", image: "/images/stage1.jpg" },
  { id: 2, name: "Name3", image: "/images/stage1.jpg" },
  { id: 3, name: "Name4", image: "/images/stage1.jpg" }
]

export var StagesView = (props) =>
    <div className={styles.stages}>
      <div className={styles.title}>
        STAGE SELECT
      </div>
      <ul> 
      {test_data.map(
          (stage) =>
              <li key={stage.id}>
                <StageView onClick={() => props.onStageSelectListener(stage)} stage={stage} />
              </li>
      )}
      </ul>
    </div>
