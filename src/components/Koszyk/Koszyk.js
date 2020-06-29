import React, { useState, useEffect } from "react";

import styles from "./Koszyk.module.css";

const Koszyk = () => {
    const uri = "http://192.168.1.100:1337";

    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        let productHolder = [];
        let priceHolder = 0;
        for (let [key, value] of Object.entries(localStorage)) {
            productHolder.push(JSON.parse(value));
            setProducts(productHolder);
        }
        productHolder.map((product) => (priceHolder += product.price));
        setTotal(priceHolder);
    }, []);

    return (
        <div className={styles.ShoppingCart}>
            {products.map((product) => (
                <div className={styles.product}>
                    <img src={uri + product.picture.url}></img>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.price}>{product.price} zł</div>
                </div>
            ))}
            <div className={styles.totalContainer}>
                <button>Kup!</button>
                <div className={styles.total}>{total} zł</div>
            </div>
        </div>
    );
};

export default Koszyk;
