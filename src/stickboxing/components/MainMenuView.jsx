import React from "react"
import {Link} from "react-router"
import styles from "stickboxing/styles/MainMenuStyles"

export default () =>
    <div className={styles.mainMenu}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Stick Boxing
        </h1>
        <ul>
          <li><Link to="/stage_list" className={styles.button}>
            PLAY
          </Link></li>
          <li><Link to="/character" className={styles.button}>
            CHARACTER
          </Link></li>
          <li><Link to="/settings" className={styles.button}>
            SETTINGS
          </Link></li>
        </ul>
      </div>
    </div>
