import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";
import style from "../modules/shop.module.css";

const getShopList = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        price
        slug
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const Shop = () => {
  const {
    allContentfulProduct: { nodes: list },
  } = useStaticQuery(getShopList);

  return (
    <section className={style.page}>
      {list.map(item => {
        return (
          <article key={item.id}>
            <Image fluid={item.image.fluid} alt={item.title} />
            <h2>{item.title}</h2>
            <h3>{item.price}</h3>
            <Link to={`/shop/${item.slug}`}>More details</Link>
          </article>
        );
      })}
    </section>
  );
};

export default Shop;
