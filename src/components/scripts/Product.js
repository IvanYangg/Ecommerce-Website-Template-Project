import styles from "../styles/Product.module.css";
import { useStateValue } from "../../StateProvider";

function Product(props) {
    const [{}, dispatch] = useStateValue();

    const addToBasketHandler = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: props.id,
                title: props.title, 
                imageUrl: props.imageUrl, 
                rating: props.rating, 
                price: props.price
            },
        });
    };

    return (
        <section className = {styles.card}>
            <div className = {styles.title}>
                {props.title}
            </div>
            <div className = {styles.imageUrl}>
                <img src = {props.imageUrl} alt = {props.title}/>
            </div>
            <div className = {styles.rating}>
                {Array(props.rating).fill().map((_, i) => (
                    <span className="fa fa-star checked"></span>
                ))}
            </div>
            <div className = {styles.price}>
                ${props.price}
            </div>
            <button className = {styles.addToCart} onClick = {addToBasketHandler}>
                To Cart
            </button>
        </section>
    );
}

export default Product;