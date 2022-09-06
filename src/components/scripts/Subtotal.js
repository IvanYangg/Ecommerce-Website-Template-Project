import styles from "../styles/Subtotal.module.css";
import { useStateValue } from "../../StateProvider";

function Subtotal() {
    const [{ cart }] = useStateValue();
    let totalPrice = 0;

    return (
        <section>
            <h2>Your Order: </h2>
            <div className = {styles.overlay}>
                <h3>Total Items: {cart.length}</h3>
                {cart.map((item) => {
                    totalPrice += item.price
                })}
                <h3>Total Price: ${Math.round((totalPrice + Number.EPSILON) * 100) / 100}</h3>
            </div>
        </section>
    );
}

export default Subtotal;