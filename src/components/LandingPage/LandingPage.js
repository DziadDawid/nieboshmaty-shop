import React from "react";

import styles from "./LandingPage.module.css";
// import TmpBackgroundVideo from "./background.mp4";

const LandingPage = () => {
    return (
        <div className={styles.LandingPage}>
            <div className={styles.backgroundVideoContainer}>
                {/* <video id={styles.backgroundVideo} loop autoPlay muted>
                    <source src={TmpBackgroundVideo} type="video/mp4"></source>
                    Your browser does not support the video tag.
                </video> */}
            </div>
        </div>
    );
};

export default LandingPage;
