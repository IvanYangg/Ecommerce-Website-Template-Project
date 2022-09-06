import styles from "../styles/FeaturedItems.module.css";
import Product from "./Product";
import { Link } from "react-router-dom";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

function FeaturedItems() {

    const [products, setProducts] = useState([]);
    const itemsCollectionRef = collection(db, "items");
    const featuredProducts = [];
    
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(itemsCollectionRef);
            setProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); 
        };

        getProducts();
    }, []);
    
    return (
        //First five products in array gets pushed to FeaturedPage
        <section className = {styles.featured}>
            <h4 className = {styles.featuredTitle}>
                Featured Items
            </h4>

            <div className = {styles.featuredWrapper}>
                {products.forEach((product) => {
                    if (featuredProducts.length < 5) {
                        featuredProducts.push(
                            <div>
                                <Product id = {product.id} title = {product.title} imageUrl = {product.imageUrl} rating = {product.rating} price = {product.price} />
                            </div>
                        );
                    }
                })};
                {featuredProducts}
            </div> 
            
            <Link to="/items" style={{ textDecoration: 'none' }}>
                <p className = {styles.browse}>Browse All Items</p>
            </Link>
        </section>
    );
}

export default FeaturedItems;