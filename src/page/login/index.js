import React from "react";
import styles from "./styles.module.css"
import { Link } from "react-router-dom";

function Login() {
    return(
    <div className={styles.container}>
        
        <div className={styles.form}>
      <div className={styles.title}>Welcome</div>
      <div className={styles.subtitle}>Let's Login to your account!</div>
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
      <button type="text" className={styles.submit}>Login<a href="/main"/></button>
      <Link to="/signup" className={styles.change}>Create your account</Link>
      <Link to="/main" className={styles.change1}>Signin as Guess</Link>
    </div>
    </div>
    )
    
}
export default Login;