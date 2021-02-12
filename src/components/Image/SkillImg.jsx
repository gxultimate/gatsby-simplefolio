import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const SkillImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                
                fluid(maxWidth: 1366) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      const imageFluid = image.node.childImageSharp.fluid;
      return <div className='project-skill'>
<Img alt={alt} style={{bordeRadius:"50%"}} fluid={imageFluid} className="rounded-circle" />
      </div>
      ;
    }}
  />
);

SkillImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default SkillImg;
