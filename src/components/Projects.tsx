import React, { useEffect, useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import './globals.scss'
import './projects.scss'
import { Treemap } from './Treemap';

export type Nullable<T> = T | null | undefined;
export type Skills = {
  value: number,
  skill: string
}
type StaticData = {
  node: {
    title: string,
    pid: string,
    company: string,
    dateRange: string,
    description: string,
    skillsUsed: Array<Skills>
  }
}

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
                description
                skillsUsed {
                  value
                  skill
                }
              }
            }
          }
    }
`)

  const [selectedProject, setSelectedProject] = useState<StaticData>(data.allProjectsJson.edges[1])
  const [skillsUsed, setSkillsUsed] = useState<Array<Skills>>(selectedProject.node.skillsUsed)


  const handleClick = (pid: string) => {
    const selected = data.allProjectsJson.edges.filter((data: StaticData) => data.node.pid === pid)[0];
    setSelectedProject(selected);
    setSkillsUsed(selected.node.skillsUsed);
  }

  return <section className='wrapper project-wrapper'>
    <div>
      <h1 className='project-title'>Projects</h1>
      <ul className="project-list">
        {data.allProjectsJson.edges.map((edge: any) => {
          const { title, pid } = edge.node;
          return <div key={pid}>
            <li onClick={() => handleClick(pid)} className={pid === selectedProject?.node.pid ? 'project project-selected' : 'project project-unselected'}> {title}
              <p className={pid === selectedProject?.node.pid ? 'selected-description--show' : 'selected-description--hide'}>{selectedProject?.node.description}</p>
            </li>
          </div>
        })}
      </ul>
    </div>
    {
      data &&
      skillsUsed &&
      <div className="project-skills">
        <div className='project-review'>
          <h4>{selectedProject?.node.company} | </h4>
          &nbsp;

          <h4>{selectedProject?.node.dateRange}</h4>
        </div>
        <Treemap skillsUsed={skillsUsed} />
      </div>
    }

  </section>
}