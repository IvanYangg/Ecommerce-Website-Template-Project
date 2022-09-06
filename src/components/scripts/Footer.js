import styles from "../styles/Footer.module.css";

function Footer() {
    return (
        <footer>
            <div className = {styles.footerWrapper}>
                <div className = {styles.aboutCompany}>
                    <h4>HualiDiscount</h4>
                    <p>Partners</p>
                    <p>About Us</p>
                    <p>Terms of Use</p>
                </div>
                <div className = {styles.service}>
                    <h4>Service</h4>
                    <p>Feedback</p>
                    <p>Bug Report</p>
                </div>
                <div className = {styles.activity}>
                    <h4>Activity</h4>
                    <p>Influencers</p>
                    <p>Affiliate</p>
                    <p>Co-branding</p>
                    <p>Donations/Giveaways</p>
                </div>
                <div className = {styles.social}>
                    <h4>Follow us at: </h4>
                    <p>Twitter</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Youtube</p>
                </div>
                <div className = {styles.newsletter}>
                    <h4>Join the Community</h4>
                    <form>
                        <label htmlFor = "email">Enter an email:</label>
                        <input className = {styles.emailForm} type="email"></input>
                        <input className = {styles.subscribeBtn} type="submit" value="Subscribe"></input>
                    </form>
                </div>
            </div>
            <p className = {styles.copyright}>
                Copyright 2022 HualiDiscount. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;