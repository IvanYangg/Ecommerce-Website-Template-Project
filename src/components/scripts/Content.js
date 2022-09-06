import styles from "../styles/Content.module.css";

function Content() {
    return (
        <section className = {styles.hero}>
            <div className = {styles.background}>
                <h2>Quality</h2>
                <h2>Stylish</h2>
                <h2>Confidence.</h2>
            </div>
            <div className = {styles.backgroundTwo}> 
                <img className = {styles.model} src="https://static9.depositphotos.com/1371851/1203/i/600/depositphotos_12035829-stock-photo-young-man.jpg" alt = "model" />
            </div>
        </section>
    );
}

export default Content;