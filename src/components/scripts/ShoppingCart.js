import styles from "../styles/Shoppingcart.module.css";
import { useStateValue } from "../../StateProvider";

//only problem is id is document id not id field

function ShoppingCart() {
    const [{ cart }, dispatch] = useStateValue();

    if (cart.length < 1) {
        return (
            <h2>You have no items in this cart.</h2>
        );
    }

    return(
        <section>
            <div>
                <div className = {styles.cartProductWrapper}>
                    {cart.map((item) => (
                        <div className = {styles.cartProduct}>
                            <div>
                                <img src = {item.imageUrl} alt = {item.title}/>
                                <div className = {styles.descriptionWrapper}>
                                    <h3>{item.title}</h3>
                                    <span>
                                        ({Array(item.rating).fill().map((_, i) => (
                                        <span className="fa fa-star checked"></span>
                                        ))})
                                    </span>
                                </div>
                            </div>
                            <div className = {styles.priceWrapper}>
                                <h2>Price: ${item.price}</h2>
                                <button className = {styles.removeItembtn} onClick = {() => {dispatch({type: 'REMOVE_FROM_CART', id:item.id})}}>Remove from Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ShoppingCart;