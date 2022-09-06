import styles from "../styles/Header.module.css";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useStateValue } from "../../StateProvider";
import { auth } from "../../firebase";

function Header() {
    const [{ cart, user }] = useStateValue();

    const authenticationHandler = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <header className = {styles.topbar}>
            <div className = {styles.topbarWrapper}>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <div className = {styles.logo}>
                        HualiDiscount
                    </div>
                </Link>

                <nav className = {styles.topbarLinks}>
                    <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
                        <div onClick = {authenticationHandler} className = {styles.sign}>
                            <span>Hello {!user ? 'Guest' : user.email}!</span> 
                            <span className = {styles.signIn}>{user ? 'Sign Out': 'Sign In'}</span>
                        </div> 
                    </Link>

                    <Link to="/items" style={{ textDecoration: 'none' }}>
                        <div className = {styles.allItems}>
                            <span>Our</span>
                            <span>Items</span>
                        </div>
                    </Link>

                    <Link to="/checkout" style={{ textDecoration: 'none' }}>
                        <div className = {styles.cart}>
                            <ShoppingCartIcon />
                            <span>({cart.length})</span>
                        </div>
                    </Link> 
                    
                    <div className = {styles.contact}>
                        <span>Contact</span>
                        <span>Us</span>
                    </div>
                </nav>
            </div> 
        </header>
    );
}

export default Header;