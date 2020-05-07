import React from 'react'
import ProjectCard from './ProjectCard'
import { projects } from "../projects"

const Projects = () => {
  const renderProjects = () => {
    return projects.map(project => <ProjectCard {...project} />)
  }

  return (
    <div className="container pt-5">
      <div className="row">
        {renderProjects()}
      </div>
    </div>
  )
}

export default Projects
