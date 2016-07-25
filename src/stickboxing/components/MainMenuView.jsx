import React from "react"
import {Link} from "react-router"
import styles from "stickboxing/styles/MainMenuViewStyles"

export default () =>
    <div className={styles.MainMenuView}>
      <h1 className={styles.Title}>
          Stick Boxing
      </h1>
      <ul>
        <li><Link to="/stages" className={styles.Button}>
          PLAY
        </Link></li>
        <li><Link to="/character" className={styles.Button}>
          CHARACTER
        </Link></li>
        <li><Link to="/settings" className={styles.Button}>
          SETTINGS
        </Link></li>
      </ul>
    </div>
