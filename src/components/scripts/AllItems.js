import styles from "../styles/AllItems.module.css";
import Product from "./Product";
import { db } from "../../firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";

function AllItems() {
    
    const [allProducts, setAllProducts] = useState([]);
    const itemsCollectionRef = collection(db, "items");
    
    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(itemsCollectionRef);
            setAllProducts(data.docs.map((doc) => ({...doc.data(), id: doc.id}))); 
        };

        getProducts();
    }, []);

    return(
        <section className = {styles.allItems}>
            <div className = {styles.allItemsWrapper}>
            {allProducts.map((eachProduct) => {
                return(
                    <div>
                        <Product id = {eachProduct.id} title = {eachProduct.title} imageUrl = {eachProduct.imageUrl} rating = {eachProduct.rating} price = {eachProduct.price} />
                    </div>
                );
            })};
            </div>
        </section>
    );
}

export default AllItems;