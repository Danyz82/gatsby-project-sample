import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Image from "gatsby-image";
import { minWidthSm } from "../constants";

const styles = {
  page: {
    width: "90vh",
    maxWidth: 1170,
    margin: "0 auto",
  },
  singleProduct: {
    width: "90vw",
    maxWidth: 1170,
    margin: "3rem auto",
    backgroundColor: "red",
  },
  [`@media (min-width: ${minWidthSm}px)`]: {
    singleProduct: {
      display: "grid",
      gridTemplateColumns: "1fr 2fr",
      columnGap: "2rem",
    },
  },
};

export const query = graphql`
  query getSingleShopProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      title
      price
      description {
        description
      }
      image {
        fixed(width: 300) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`;

const shopTemplate = ({
  data: {
    product: {
      price,
      title,
      image: { fixed },
      description: { description },
    },
  },
}) => {
  return (
    <Layout>
      <div style={styles.page}>
        <Link to="/shop">back to shop</Link>
        <h1>{title}</h1>
      </div>
      <section style={styles.singleProduct}>
        <article>
          <Image fixed={fixed} alt={title} />
        </article>
        <article>
          Price: {price}
          {description}
          <button>Add to cart</button>
        </article>
      </section>
    </Layout>
  );
};

export default shopTemplate;
