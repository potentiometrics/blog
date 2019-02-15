import React from "react";
import { Link } from "gatsby";
import styles from "./Author.module.scss";

const Author = ({ author, isIndex }) => (
  <div className={styles["author"]}>
    <p className={styles["author__subtitle"]}>
      {author.bio}{" "}
      <span>
        <Link to={"/pages/about"} className={styles["author__link"]}>
          Some more info
        </Link>
      </span>
    </p>
  </div>
);

export default Author;
