import React from "react";
import { graphql, StaticQuery, Link, withPrefix } from "gatsby";
import Author from "./Author";
import Menu from "./Menu";
import styles from "./Sidebar.module.scss";

export const PureSidebar = ({ data, isIndex }) => {
  const { author, menu } = data.site.siteMetadata;

  return (
    <div className={styles["sidebar"]}>
      <div className={styles["sidebar__inner"]}>
        <Link to="/">
          <img
            src={withPrefix(author.photo)}
            className={styles["sidebar__photo"]}
            width="300"
            height="300"
            alt={author.name}
          />
        </Link>
        <Menu menu={menu} />
        <Author author={author} isIndex={isIndex} />
      </div>
    </div>
  );
};

export const Sidebar = props => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            title
            subtitle
            menu {
              label
              path
            }
            author {
              name
              photo
              bio
            }
          }
        }
      }
    `}
    render={data => <PureSidebar {...props} data={data} />}
  />
);

export default Sidebar;
