import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className="container pt-5">
      <div className="row">
        <ProjectCard
          name="Streaming Video App"
          img="./img/streamblog.png"
          description="Streaming Video App that streams your own streaming using a RTMP server, and allows you to create, edit or delete your streams. Developed using React"
          href="https://github.com/ramclen/video-streamer"
        />
        <ProjectCard
          class="travel"
          name="Image searcher"
          img="./img/image-searcher.png"
          description="Image searcher using Unsplash API. Developed using React"
          href="https://github.com/ramclen/Image-Searcher"
        />
      </div>
      <div className="row">

        <ProjectCard
          name="Video Visualizer"
          class="npl"
          img="./img/shopping-list.png"
          description="Video searcher using Youtube API. Developed using React "
          href="https://github.com/ramclen/video-searcher"
        />
        <ProjectCard
          name="Shopping Cart"
          img="./img/shopping-list.png"
          description="Shopping list created using react and google spreadsheets API"
          href="https://github.com/ramclen/ShoppingCart"
        />
      </div>

      <div className="row">
        <ProjectCard
          name="Pong game"
          img="./img/pong.png"
          description="Pong game made using Vanilla JavaScript"
          href="https://github.com/ramclen/Pong"
        />

        <ProjectCard
          name="Snake game"
          img="./img/snake-game.png"
          description="Snake game made using Vanilla JavaScript"
          href="https://github.com/ramclen/snake"
        />
      </div>
    </div>
  )
}

export default Projects
