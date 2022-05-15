import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './globals.scss'
import './projects.scss'

export const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjestQuery {
        allProjectsJson {
            edges {
              node {
                title
                pid
                company
                dateRange
                skillsUsed {
                  value
                  skill
                }
              }
            }
          }
    }
`)
  const [selectedProject, setSelectedProject] = useState('home')
  const [selectedData, setSelectedData] = useState(null)
  useEffect(() => {
    const selected = data.allProjectsJson.edges.filter((data) => data.node.pid === selectedProject)[0].node;
    setSelectedData(selected)
  }, [selectedProject])
  return <section className='wrapper'>
    <h1 className='project-title'>Project</h1>
    <ul>
      {data.allProjectsJson.edges.map((edge: any) => {
        const { title, pid } = edge.node;
        return <div>
          <li key={pid} onClick={() => setSelectedProject(pid)} className={pid === selectedProject ? 'project project-selected' : 'project project-unselected'}> {title}</li>
        </div>
      })}
    </ul>

  </section>
}