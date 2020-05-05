import React from 'react'
import Skill from './Skill'

const Skills = () => {
  return (
    <div className="mt-5">
      <div className="row">
        <Skill
          icon="devicon-html5-plain"
          col="col-6 col-md-7"
          title="HTML5"
        />
        <Skill
          icon="devicon-css3-plain"
          col="col-6 col-md-2"
          title="CSS3"
        />
      </div>

      <div className="row">
        <Skill
          icon="devicon-react-original"
          col="col-12 col-md-12"
          title="React"
        />

      </div>
      <div className="row">

        <Skill
          icon="devicon-javascript-plain"
          col="col-6 col-md-7"
          title="JavaScript"
        />
        <Skill
          icon="devicon-typescript-plain"
          col="col-6 col-md-2"
          title="Typescript"
        />
      </div>




    </div>
  )
}

export default Skills