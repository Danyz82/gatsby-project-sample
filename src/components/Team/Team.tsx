import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";
import { minWidthSm, minWidthMd } from "../../constants";

const styles = {
  page: {
    width: "90vh",
    maxWidth: 1170,
    margin: "0 auto",
  },
  [`@media (min-width: ${minWidthSm}px)`]: {
    page: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "2rem",
    },
  },
  [`@media (min-width: ${minWidthMd}px)`]: {
    page: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
  },
};

const getTeamList = graphql`
  {
    allContentfulTeam {
      nodes {
        name
        surname
        slug
        photo {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`;

const Team = () => {
  const {
    allContentfulTeam: { nodes: teamList },
  } = useStaticQuery(getTeamList);

  return (
    <section style={styles.page}>
      {teamList.map(item => {
        return (
          <article key={item.id}>
            <Image fluid={item.photo.fluid} alt={item.name} />
            <p>{item.name}</p>
            <p>
              <Link to={`/team/${item.slug}`}>See more detail</Link>
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Team;
