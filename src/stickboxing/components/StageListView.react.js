import * as React from "react"
import { StageView } from "stickboxing/components/StageView"
import * as styles from "stickboxing/styles/StageListViewStyles"

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
      <form>
      <ul className={styles.stageLine}> 
      {test_data.map(
          (stage) =>
              <li key={stage.id}><label><input type="radio" name="stageImage" value={stage} className={styles.stageChoice} />
                <StageView onClick={() => props.onStageSelectListener(stage)} stage={stage} />
                </label>
              </li>
      )}
      </ul>
      <input type="button" value="決定！" onClick={() => props.onStageSelected(stage)}/>
      </form>
      
      
    </div>
