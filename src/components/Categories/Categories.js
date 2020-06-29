import React from "react";
import { Link } from "react-router-dom";

import styles from "./Categories.module.css";
import torebeczki from "./torebeczki.jpg";
import koszuleczki from "./koszuleczki.jpg";
import inne from "./inne.jpg";

const Categories = () => {
    return (
        <div className={styles.Categories}>
            <div className={styles.categoryContainer}>
                <div className={styles.category}>
                    <Link to="/torebeczki">
                        <img src={torebeczki} alt="Something went wrong" />
                        <div className={styles.categoryText}>Torebeczki</div>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link to="/koszuleczki">
                        <img src={koszuleczki} alt="Something went wrong" />
                        <div className={styles.categoryText}>Koszuleczki</div>
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link to="/inne">
                        <img src={inne} alt="Something went wrong" />
                        <div className={styles.categoryText}>Inne</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Categories;
