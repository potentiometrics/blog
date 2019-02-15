import React from "react";
import styles from "./Content.module.scss";

import rehypeReact from "rehype-react";
import Counter from "../../FunExplanations/Counter";

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    "interactive-counter": Counter
  }
}).Compiler;

const Content = ({ body, title }) => (
  <div className={styles["content"]}>
    <h1 className={styles["content__title"]}>{title}</h1>
    <div className={styles["content__body"]}>{renderAst(body)}</div>
    {/* <div className={styles["content__body"]} dangerouslySetInnerHTML={{ __html: body }} /> */}
  </div>
);

export default Content;
