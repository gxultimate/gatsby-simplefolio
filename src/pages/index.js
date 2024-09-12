import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import '../style/main.scss';
import { graphql } from 'gatsby'


export const pageQuery = graphql `
  query BlogIndexQuery {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            name
            job
            description
            descriptiontwo
            descriptionthree
            resume
            email
            projectlist{
              title
              info
              url
              img
              id
            }
            skills{
              title
              desc
              img
            }
            experience{
            title
            duration
            }
          }
        }
      }
    }
  }
`


export default ({ data }) => {
    const { title, lang, description } = data.allMarkdownRemark.edges[0].node.frontmatter;


    return ( <
        >
        <
        Helmet >
        <
        meta charSet = "utf-8" / >
        <
        title > { title || 'Gatsby Simplefolio' } < /title> <
        html lang = { lang || 'en' }
        />  <
        meta name = "description"
        con tent = { description || 'Gatsby Simplefolio' }
        /> <
        /Helmet> <
        App data = { data.allMarkdownRemark.edges[0].node.frontmatter }
        /> <
        />
    );
};
