import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './globals.scss'


export const About = () => {
    const data = useStaticQuery(graphql`
    query AboutQuery {
        allProjectsJson {
            edges {
              node {
                title
              }
            }
          }
    }
`)
    return <section className='wrapper'>
        <h1>About</h1>
        <div>

        </div>
    </section>
}