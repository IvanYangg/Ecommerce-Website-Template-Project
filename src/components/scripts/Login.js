import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const signIn = e => {
        e.preventDefault();

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then(auth => {
            navigate("/");
        })
        .catch(error => alert(error.message))
    }

    const createAccount = e => {
        e.preventDefault();
        
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            if (auth) {
                navigate("/");
            }
        })
        .catch(error => alert(error.message))
    }

    return (
        <section>
            <h1 className = {styles.logo}>HualiDiscount</h1>
            <div className= {styles.loginWrapper}>
                <div className = {styles.loginOverlay}>
                    <div className = {styles.loginHeaders}>
                        <h2>Sign-in</h2>
                    </div>
                    <form>
                        <h4>Username or Email</h4>
                        <input type = "text" value = {email} onChange =  {e => {setEmail(e.target.value)}}/>

                        <h4>Password</h4>
                        <input type = "password" value = {password} onChange =  {e => {setPassword(e.target.value)}} />

                        <button type = "submit" onClick = {signIn} className = {styles.signInBtn}>Sign In</button>
                    </form>
                    <p className = {styles.conditions}>By signing in, you agree to HualiDiscount's terms and conditions, and Cookies policy. </p>

                    <p className = {styles.smallText}>Don't have an account? Create one here!</p>
                    <button onClick = {createAccount} className = {styles.createBtn}>Create your account</button>
                </div>
            </div>
        </section>
    );
}

export default Login;