import React from 'react'

const ProjectCard = (props) => {
  const renderButtons = () => {
    let className = "col-2 offset-3"
    if (props.demoLink) {
      return (
        <div className="row">
          <a href={props.codeLink} className="project-buttons btn btn-light col-2 offset-3" target="_blank" rel="noopener noreferrer">
            <i className="devicon-github-plain"></i>
          </a>
          <a href={props.demoLink} className="project-buttons btn btn-light col-2 offset-2" target="_blank" rel="noopener noreferrer">
            <i className="devicon-chrome-plain"></i>
          </a>
        </div>
      );
    }
    return (
      <div className="row">
        <a href={props.codeLink} className="project-buttons btn btn-light offset-5" target="_blank" rel="noopener noreferrer">
          <i className="devicon-github-plain"></i>
        </a>
      </div>
    )
  };

  return (
    <div className="project-card col-12 col-lg-6 mb-5">
      <div className="card">
        <img className={`card-img-top h-100 ${props.class}`} src={props.img} alt="Project img" />
        <div className="card-body text-center h-100">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.description}</p>

          {renderButtons()}

        </div>
      </div>
    </div>
  )
}

export default ProjectCard
