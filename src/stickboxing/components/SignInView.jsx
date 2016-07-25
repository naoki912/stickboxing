import React from "react"
import {Link} from "react-router"
import styles from "stickboxing/styles/SignInViewStyles"

export default ({
    onFacebookSignInButtonClick,
    onGoogleSignInButtonClick
}) =>
    <div className={styles.SignInView}>
      <h1 className={styles.Title}>
          Stick Boxing
      </h1>
      <form className={styles.SignInForm}>
        <field><input type="text" placeholder="email"/></field><br/>
        <field><input type="password" placeholder="Password"/></field>
        <button>Sign in</button>
      </form>
      Sign in with
      <ul className={styles.ButtonList}>
        <li
          className={styles.FacebookSignInButton}
          onClick={onFacebookSignInButtonClick}>
        </li>
        <li
          className={styles.GoogleSignInButton}
          onClick={onGoogleSignInButtonClick}>
        </li>
      </ul>
    </div>
