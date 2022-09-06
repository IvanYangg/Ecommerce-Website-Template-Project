import styles from "../styles/CheckoutPage.module.css";
import ShoppingCart from "../scripts/ShoppingCart";
import Subtotal from "../scripts/Subtotal";

function CheckoutPage() {
    return (
        <section>
            <div className = {styles.checkoutPage}>
                <div className = {styles.shoppingCart}>
                    <ShoppingCart />
                </div>
                <div className = {styles.subtotal}>
                    <Subtotal />
                </div>
            </div>
        </section>
    );
}

export default CheckoutPage;