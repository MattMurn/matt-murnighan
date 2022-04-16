import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';



export const Projects = () => {
    const data = useStaticQuery(graphql`
    query ProjestQuery {
        allProjectsJson {
            edges {
              node {
                title
              }
            }
          }
    }
`)
    return <div>
        <h1>Projects</h1>
        <div>
            {data.allProjectsJson.edges.map((edge: any) => <div> {edge.node.title}</div>)}
        </div>
    </div>
}