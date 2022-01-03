import React, { useEffect, useState } from "react";
import Card from "../components/card.jsx";
import styles from "../components/card.module.css";

/**
 * ## Users
 * 1. Fetch 10 users from the https://randomuser.me/ API
 * 2. Reuse the card from the previous exercise
 * - Create a Responsive Grid with a card for each result
 * - ! Make sure that there are no errors about the `key` property in the web-console
 */
const Exercise = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    void fetch("https://randomuser.me//api?results=10")
      .then((response) => response.json())
      .then(({ results }) => {
        setItems(results);
      })
      .catch((error_) => {
        console.error(error_);
      });
  }, []);

  return (
    <div className={styles.Cards}>
      {items.map((item) => (
        <Card
          key={item.login.uuid}
          headline={`${item.name.first} ${item.name.last}`}
          description={`Email: ${item.email}`}
          image={{ src: item.picture.large }}
        />
      ))}
    </div>
  );
};

export default Exercise;
