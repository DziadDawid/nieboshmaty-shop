import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import styles from "../ProductListStyle.module.css";
import { getTorebeczka } from "../../API";

const Torebeczki = () => {
    const uri = "http://192.168.1.100:1337";
    const [product, setProduct] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);

        const fetchData = async () => {
            const res = await getTorebeczka();

            res.data.forEach((id) => {
                setProduct(id.products);
            });
        };

        fetchData();
    }, []);

    return (
        <div className={styles.ProductList}>
            <div className={styles.productListContainer}>
                {product.map((product) => (
                    <Link
                        to={`/torebeczki/${product.title
                            .toLowerCase()
                            .split(" ")
                            .join("_")}`}
                    >
                        <div className={styles.product}>
                            <img src={uri + product.picture.url}></img>
                            <div className={styles.categoryText}>
                                {product.title}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Torebeczki;
