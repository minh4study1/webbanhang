import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

function Signup() {
    return(
    <div className={styles.container}>
        
        <div className={styles.form}>
      <div className={styles.title}>Welcome</div>
      <div className={styles.subtitle}>Let's create your account!</div>
      <div className={styles.inputcontainer}>
        <input id="firstname" className={styles.input} type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="Username" className={styles.placeholder}> Username</label>
      </div>
      <div className={styles.inputcontainer}>
        <input id="lastname" className={styles.input} type="text" placeholder=" " />
        <div className="cut"></div>
        <label for="Password" className={styles.placeholder}>Password</label>
      </div>
      <div className={styles.inputcontainer}>
        <input id="email" className={styles.input} type="text" placeholder=" " />
        <div className="cut cut-short"></div>
        <label for="Re-password" className={styles.placeholder}>Re-password</label>
      </div>
      <button type="text" className={styles.submit}>submit</button>
      <Link to="/" className={styles.change}>Already have an account?</Link>
    </div>
    </div>
    )
    
}
export default Signup;