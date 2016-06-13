import * as React from "react"
import { Link } from "react-router"
import * as styles from "stickboxing/styles/MainMenuStyles"

export var MainMenuView = () =>
    <div className={styles.mainMenu}>
      <h1 className={styles.title}>
        Stick Boxing
      </h1>
      <ul>
        <li><Link to="/stages" className={styles.button}>
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
