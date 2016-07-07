import React from "react"
import {Link} from "react-router"
import styles from "stickboxing/styles/StageStyles"

export default (props) =>
    <div className={styles.stage}>
     <img className={styles.image} src={ props.stage.image }>
     </img>
     <div className={styles.name}>
      { props.stage.name }
     </div>  
    </div>
