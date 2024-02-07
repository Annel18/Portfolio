/* eslint-disable react/prop-types */
import { useState } from 'react'
// import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import pyIcon from '../assets/icons/Python.svg'
import jsIcon from '../assets/icons/JavaScript.svg'
import reactIcon from '../assets/icons/React.svg'
import djangoIcon from '../assets/icons/Django.svg'
import postgreSqlIcon from '../assets/icons/PostgreSQL.svg'
import expressIcon from '../assets/icons/Express.svg'
import nodeJsIcon from '../assets/icons/nodeJS.svg'
import mongoDbIcon from '../assets/icons/MongoDB.svg'
import sassIcon from '../assets/icons/Sass.svg'
import gitHubIcon from '../assets/icons/GitHub.svg'
import cssLogo from '../assets/icons/CSS.svg'
import htmlLogo from '../assets/icons/HTML.svg'
import herokuIcon from '../assets/icons/Heroku.svg'
import linkIcon from '../assets/icons/link.svg'
import project1Img from '../assets/images/Project1.png'
import project2Img from '../assets/images/Project2.png'
import project3Img from '../assets/images/Project3.png'
import project4Img from '../assets/images/Project4.png'



export default function Projects() {

    const projects = [
        {
            name: 'Minesweeper',
            skills: [{ name: 'JavaScript', logo: jsIcon }, { name: 'CSS', logo: cssLogo }, { name: 'HTML', logo: htmlLogo }],
            timeframe: 'Solo Project | 7 days',
            description: 'This first project is a grid-based game inspired by the classic Windows PC game. Using vanilla JavaScript for DOM manipulation, this first project includes separate files for HTML, CSS, and JS. The chosen theme is ‘The Three Little Pigs,’ where the game levels follow the tale\'s storyline.',
            deployment: 'https://annel18.github.io/GA-SEI-P1-Minesweeper/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P1-Minesweeper',
            img: project1Img
        },
        {
            name: 'Family Movie Night',
            skills: [{ name: 'JavaScript', logo: jsIcon }, { name: 'CSS', logo: cssLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'Sass', logo: sassIcon }, { name: 'React', logo: reactIcon }, { name: 'Node.js', logo: nodeJsIcon }],
            timeframe: 'Pair Project | 2 days',
            description: 'The second project is to build a React application that consumes a public API. We decided to create a website that showcases TV series and allows users to filter them by genre and sort them alphabetically or by best ratings. The app includes a router with several pages and links to official websites.',
            deployment: 'https://familymovienight.netlify.app/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P2-TVshows',
            img: project2Img
        },
        {
            name: 'Rent.Art',
            skills: [{ name: 'JavaScript', logo: jsIcon }, { name: 'CSS', logo: cssLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'Sass', logo: sassIcon }, { name: 'React', logo: reactIcon }, { name: 'Node.js', logo: nodeJsIcon }, { name: 'MongoDB', logo: mongoDbIcon }, { name: 'Express', logo: expressIcon }, { name: 'Heroku', logo: herokuIcon }],
            timeframe: 'Group Project | 10 days',
            description: 'This third project, a full-stack group effort, resulted in a website enabling customers to rent artwork from an online gallery for their homes. Utilising an Express API and a Mongo database, our backend serves data, consumed by a separate React frontend. We implemented four user profiles (Public, Art Appreciator, Artist, Admin), each with varied functionalities secured through routes and proper authorizations. CRUD methods manage art collections and user profiles. One of my main focuses was the index page with all its filtering functionalities.',
            deployment: 'https://art-rent-3ccae6efd44a.herokuapp.com/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P3-Rentart',
            img: project3Img
        },
        {
            name: 'Buildings.Data',
            skills: [{ name: 'JavaScript', logo: jsIcon }, { name: 'CSS', logo: cssLogo }, { name: 'HTML', logo: htmlLogo }, { name: 'Sass', logo: sassIcon }, { name: 'React', logo: reactIcon }, { name: 'Node.js', logo: nodeJsIcon }, { name: 'Python', logo: pyIcon }, { name: 'Django', logo: djangoIcon }, { name: 'PostgreSQL', logo: postgreSqlIcon }, { name: 'Heroku', logo: herokuIcon }],
            timeframe: 'Solo Project | 10 days',
            description: 'This final GA project is a solo endeavour, presenting an application for architects to streamline building briefs and consolidate \'Room Data Sheets\' for non-domestic sectors (eg. schools), where many rooms share identical characteristics. This tool assists architects in defining and compiling specifics such as finishes, furniture, and equipment into project-specific templates. The backend database has been implemented in Python using Django Framework and consumed in React on the client side.',
            deployment: 'https://building-data-f6ca9aff8146.herokuapp.com/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P4-Building_Data',
            img: project4Img
        },
    ]
    //! States
    const [index, setIndex] = useState(0)

    //! Functions
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex)
    }

    //! JSX
    return (
        <section className="page" id="projects" >
            <h1 className="section-title">Projects</h1>
            <p className="section-sub">The four projects presented here were the main deliverables as part of the General Assembly Software Engineering Bootcamp curriculum, a twelve-week intensive course equipping students for tech careers.</p>
            {/* <div className='carousel-page'> */}
            {/* touch means you can use with touchscreen, wrap continues with no hard stop */}
            <Carousel touch={true} wrap={true} data-bs-theme="dark" slide={true} interval={null} activeIndex={index} onSelect={handleSelect} >
                {/* map through art for carousel to cycle through */}
                {projects
                    .map((project, id) => {
                        return (
                            // has link to go to individual ID page
                            <Carousel.Item key={id} >
                                <Container fluid
                                // className="container-carousel"
                                >
                                    <Row
                                    // className="items-list"
                                    >
                                        <Col
                                            className='poster'
                                            xs={12}
                                            s={6}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}
                                        style={{ backgroundImage: `url(${project.img})`}}
                                        >
                                            {/* <div className="poster-container">
                                                <img className="poster" style={{ backgroundImage: `url(${project.img})` }}></img>
                                            </div> */}
                                        </Col>
                                        <Col
                                        // className='poster'
                                            xs={12}
                                            s={6}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}
                                        >
                                            <Row><h3>{project.name}</h3></Row>
                                            <Row><p>{project.timeframe}</p></Row>
                                            <Container>
                                                <Row>{project.skills
                                                    .map((skill, i) => {
                                                        return (
                                                            <Col
                                                                className='single-container'
                                                                key={i}
                                                                xs={2}
                                                                s={2}
                                                                md={2}
                                                                lg={2}
                                                                xl={1}
                                                                xxl={1}
                                                                title={skill.name}
                                                            >
                                                                <div className="rails" title={skill.name} style={{ height: '5rem' }}>
                                                                    <img className="thumbnail"  title={skill.name} src={skill.logo} alt={skill.name} />
                                                                </div>
                                                            </Col>
                                                        )
                                                    })
                                                }
                                                </Row>
                                            </Container>
                                            <Row><p className="justify">{project.description}</p></Row>
                                            <Row>
                                                <Col
                                                    className='single-container'
                                                    sm={6}
                                                >
                                                    <div className='button-container'>
                                                        <a href={project.GitHubLink} target="_blank">
                                                            <p className="button"><img src={gitHubIcon} alt={gitHubIcon} />View on GitHub</p>
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col
                                                    className='single-container'
                                                    sm={6}
                                                >
                                                    <div className='button-container'>
                                                        <a href={project.deployment} target="_blank">
                                                            <p className="button"><img src={linkIcon} alt={linkIcon} />Open Project</p>
                                                        </a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Container>
                                {/* <Carousel.Caption>
                                    </Carousel.Caption> */}
                            </Carousel.Item>
                        )
                    })}
            </Carousel>
            {/* </div > */}
        </section>
    )
}