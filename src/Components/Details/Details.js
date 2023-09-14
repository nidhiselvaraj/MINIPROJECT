import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Blog.module.css"; // Import the CSS module

const Details = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("http://127.0.0.1:8080/get")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []); // Empty dependency array to fetch data once when the component mounts

  return (
    <section className={`${styles.Portfolio} ${styles.Blog}`} id="details">
      <div className={`${styles.container} ${styles.top}`}>
        <div className={`${styles.heading} ${styles["text-center"]}`}>
        <div className='heading text-center'>
          <h4>Seats Are Filled Faster...</h4>
          <h1>Hurry Up!!!</h1>
        </div>
        </div>
        <div className={styles["table-container"]}>
          {data.length > 0 && (
            <div className={styles.row}>
              <div className={styles.column}>BookingId</div>
              <div className={styles.column}>CustomerName</div>
              <div className={styles.column}>Reserved Date</div>
              <div className={styles.column}>CustomerMobile</div>
              <div className={styles.column}>TotalMembers</div>
              <div className={styles.column}>Reserved Time</div>
            </div>
          )}
          {data.map((user) => (
            <div className={styles.row} key={user.id}>
              <div className={styles.column}>{user.id}</div>
              <div className={styles.column}>{user.name}</div>
              <div className={styles.column}>{user.email}</div>
              <div className={styles.column}>{user.mobilenumber}</div>
              <div className={styles.column}>{user.members}</div>
              <div className={styles.column}>{user.foodtype}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
