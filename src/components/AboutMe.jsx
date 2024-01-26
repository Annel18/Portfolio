/* eslint-disable react/prop-types */
import { Container, Row, Col } from "react-bootstrap"
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
import photoShopIcon from '../assets/icons/PhotoShop.svg'
import illustratorIcon from '../assets/icons/Illustrator.svg'
import indesignLogo from '../assets/icons/Indesign.svg'
import vsCodeLogo from '../assets/icons/vsCode.svg'
import processingLogo from '../assets/icons/Processing.svg'
import arduinoLogo from '../assets/icons/Arduino.svg'


export default function AboutMe() {

    const skills = [
        { logo: jsIcon, name: 'JavaScript' },
        { logo: reactIcon, name: 'React' },
        { logo: sassIcon, name: 'Sass' },
        { logo: nodeJsIcon, name: 'Node.js' },
        { logo: pyIcon, name: 'Python' },
        { logo: djangoIcon, name: 'Django' },
        { logo: postgreSqlIcon, name: 'PostgreSQL' },
        { logo: mongoDbIcon, name: 'MangoDB' },
        { logo: expressIcon, name: 'Express' },
        { logo: photoShopIcon, name: 'PhotoShop' },
        { logo: illustratorIcon, name: 'Illustrator' },
        { logo: indesignLogo, name: 'Indesign' },
        { logo: processingLogo, name: 'Processing' },
        { logo: arduinoLogo, name: 'Arduino' },
        { logo: vsCodeLogo, name: 'VS Code' },
        { logo: gitHubIcon, name: 'GitHub' },
    ]

    return (
        <section className="page" id="about me">
            <h1 className="section-title">About Me</h1>
            <p className="section-sub">Throughout my architectural career spanning diverse sectors, I&apos;ve had the privilege of contributing to multiple award-winning projects. My journey led me to explore coding, initially during my MA in Architecture and Digital Media, and later while working with various computer-aided design tools. This exploration eventually steered me towards the path of software engineering. I thrive on close collaboration with colleagues and external consultancy. I find fulfilment in roles within medium-sized offices where personal connections foster satisfaction and meaningful contributions to the company.</p>
            <div className='index-page'>
                <Container fluid className="container-grid">
                    <Row className="items-list">
                        {skills
                            // .sort((a, b) => a.name.localeCompare(b.name))
                            .map((skill, i) => {
                                { console.log(skill.name) }
                                return (
                                    <Col
                                        className='single-container'
                                        key={i}
                                        xs={6}
                                        md={4}
                                        lg={3}
                                    >
                                        <div className="rails">
                                            <div className="thumbnail" style={{ backgroundImage: `url(${skill.logo})` }}></div>
                                            <p>{skill.name}</p>
                                        </div>
                                    </Col>
                                )
                            })}
                    </Row>
                </Container>
            </div >
        </section>
    )
}