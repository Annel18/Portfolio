/* eslint-disable react/prop-types */
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
            skills: [jsIcon, cssLogo, htmlLogo],
            timeframe: 'Solo Project | 7 days',
            description: 'This first project is a grid-based game inspired by the classic Windows PC game. Using vanilla JavaScript for DOM manipulation, this first project includes separate files for HTML, CSS, and JS. The chosen theme is ‘The Three Little Pigs,’ where the game levels follow the tale\'s storyline.',
            deployment: 'https://annel18.github.io/GA-SEI-P1-Minesweeper/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P1-Minesweeper/blob/main/README.md',
            img: project1Img
        },
        {
            name: 'Family Movie Night',
            skills: [jsIcon, cssLogo, htmlLogo, sassIcon, reactIcon, nodeJsIcon],
            timeframe: 'Pair Project | 2 days',
            description: 'The second project is to build a React application that consumes a public API. We decided to create a website that showcases TV series and allows users to filter them by genre and sort them alphabetically or by best ratings. The app includes a router with several pages and links to official websites.',
            deployment: 'https://familymovienight.netlify.app/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P2-TVshows/blob/main/README.md',
            img: project2Img
        },
        {
            name: 'Rent.Art',
            skills: [jsIcon, cssLogo, htmlLogo, sassIcon, reactIcon, nodeJsIcon, mongoDbIcon, expressIcon, herokuIcon],
            timeframe: 'Group Project | 10 days',
            description: 'This third project, a full-stack group effort, resulted in a website enabling customers to rent artwork from an online gallery for their homes. Utilising an Express API and a Mongo database, our backend serves data, consumed by a separate React frontend. We implemented four user profiles (Public, Art Appreciator, Artist, Admin), each with varied functionalities secured through routes and proper authorizations. CRUD methods manage art collections and user profiles. One of my main focuses was the index page with all its filtering functionalities.',
            deployment: 'https://artrent-6d502dba1723.herokuapp.com/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P3-Rentart/blob/main/README.md',
            img: project3Img
        },
        {
            name: 'Buildings.Data',
            skills: [jsIcon, cssLogo, htmlLogo, sassIcon, reactIcon, nodeJsIcon, pyIcon, djangoIcon, postgreSqlIcon, herokuIcon],
            timeframe: 'Solo Project | 10 days',
            description: 'This final GA project is a solo endeavour, presenting an application for architects to streamline building briefs and consolidate \'Room Data Sheets\' for non-domestic sectors (eg. schools), where many rooms share identical characteristics, this tool assists architects in defining and compiling specifics such as finishes, furniture, and equipment into project-specific templates. The backend database has been implemented in Python using Django Framework and consumed in React on the client side.',
            deployment: 'https://building-data-f6ca9aff8146.herokuapp.com/',
            GitHubLink: 'https://github.com/Annel18/GA-SEI-P4-Building_Data/blob/main/README.md',
            img: project4Img
        },
    ]

    return (
        <section className="page" id="projects" >
            <h1 className="section-title">Projects</h1>
            {/* <div className='carousel-page'> */}
            {/* touch means you can use with touchscreen, wrap continues with no hard stop */}
            <Carousel touch={true} wrap={true} data-bs-theme="dark" slide={true} >
                {/* map through art for carousel to cycle through */}
                {projects
                    .map((project, id) => {
                        return (
                            // has link to go to individual ID page
                            <Carousel.Item key={id}>
                                <Container fluid
                                // className="container-grid"
                                >
                                    <Row
                                        className="items-list"
                                    >
                                        <Col
                                            // className='single-container'
                                            sm={6}
                                        // style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat', minHeight: '500px' }}
                                        >
                                            <div className="poster-container">
                                                <div className="poster" style={{ backgroundImage: `url(${project.img})` }}></div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <Row><h3>{project.name}</h3></Row>
                                            <Row><p>{project.timeframe}</p></Row>
                                            <Row>{project.skills
                                                .map((skill, i) => {
                                                    return (
                                                        <Col
                                                            className='single-container'
                                                            key={i}
                                                            sm={1}
                                                        >
                                                            <div className="rails" style={{ height: '5rem' }}>
                                                                <img className="thumbnail" src={skill} alt={skill} />
                                                            </div>
                                                        </Col>
                                                    )
                                                })
                                            }
                                            </Row>
                                            <Row><p className="justify">{project.description}</p></Row>
                                            <Row>
                                                <Col className='single-container' sm={1} >
                                                    <div className="rails" style={{ height: '5rem' }}>
                                                        <a href={project.GitHubLink} target="_blank">
                                                            <img className="thumbnail" src={gitHubIcon} alt={gitHubIcon} />
                                                        </a>
                                                    </div>
                                                </Col>
                                                <Col className='single-container' sm={1}>
                                                    <div className="rails" style={{ height: '5rem' }}>
                                                        <a href={project.deployment} target="_blank">
                                                            <img className="thumbnail" src={linkIcon} alt={linkIcon} />
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