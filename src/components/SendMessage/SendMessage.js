import React from "react";

import styles from "./SendMessage.module.css";
import FormBackground from "./FormBackground.jpg";

const SendMessage = () => {
    return (
        <div className={styles.SendMessage}>
            <div className={styles.formContainer}>
                <div className={styles.formBackground}>
                    <img src={FormBackground}></img>
                </div>
                <div className={styles.form}>
                    <form>
                        <input
                            type="text"
                            name="name"
                            placeholder="Twoje imię"
                        />
                        <br />
                        <textarea cols="60" rows="10"></textarea>
                        <br />
                        <input type="submit" value="Wyślij" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;
