import React, { useEffect, useState } from "react";

import { getKoszuleczka } from "../../API";
import styles from "../SingleProductStyle.module.css";

const Koszuleczka = ({ match }) => {
    window.scrollTo(0, 0);

    const uri = "http://192.168.1.100:1337";
    const {
        params: { koszuleczka_title },
    } = match;

    const [title, setTitle] = useState(
        koszuleczka_title.charAt(0).toUpperCase() +
            koszuleczka_title.slice(1).split("_").join(" ")
    );

    const [product, setProduct] = useState({});
    const [url, setUrl] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const res = await getKoszuleczka();

            res.data.forEach((id) => {
                id.products.map((product) => {
                    if (product.title === title) {
                        setUrl(product.picture.url);
                        setProduct(product);
                    }
                });
            });
        };

        fetchData();
    }, []);

    const addProductToShoppingCart = () => {
        localStorage.setItem(
            product.title.split(" ").join("_").toLowerCase(),
            JSON.stringify(product)
        );
    };

    return (
        <div className={styles.Product}>
            <div className={styles.Container}>
                <img src={uri + url}></img>
                <div className={styles.productInfo}>
                    <div className={styles.title}>{product.title}</div>
                    <div className={styles.description}>
                        {product.description}
                    </div>
                    <div className={styles.qty}>Ilość: {product.qty}</div>
                    <div className={styles.price}>{product.price} zł</div>
                    <button onClick={() => addProductToShoppingCart()}>
                        Dodaj do koszyka
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Koszuleczka;
