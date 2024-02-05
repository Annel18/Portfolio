/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import { useState } from 'react'
import ExperienceModalPPreel from './ExperienceModalPPreel'

import { Container, Row, Col } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'

import jdaLogo from '../assets/icons/jdaLogo.svg'
import gaLogo from '../assets/icons/GALogo.svg'
import ppImg from '../assets/icons/ppLogo.svg'
import jbsImg from '../assets/icons/jbsLogo.svg'
import wamLogo from '../assets/icons/wam-logo.png'
import reelIcon from '../assets/icons/Reel.svg'


export default function Experience() {

    const experiences = [
        {
            jobTitle: 'Software Engineering Immersive - Student',
            timeframe: 'General Assembly (Oct 2023 - Jan 2024)',
            img: gaLogo,
            description: '<p>This three-month program has been highly rewarding, allowing me to significantly improve my technical skills at a rapid pace. In addition to fostering my technical growth, it provided opportunities to collaborate with classmates on a variety of projects, emphasizing the importance of teamwork, pair programming, and knowledge exchange in the software engineering field. Finishing the course has instilled in me a profound sense of pride in my accomplishments and an ever-growing enthusiasm for continuous learning.</p>'
        },
        {
            jobTitle: 'Senior Architect',
            timeframe: 'Penoyre & Prasad (Feb 2013 - July 2023)',
            img: ppImg,
            projects: reelIcon,
            description: '<p>I attained my qualification as an architect while working with P&P. Since 2015, I\'ve served as a <a href="https://en.wikipedia.org/wiki/Project_architect" style="text-decoration:underline" target="blank">project architect</a>, accumulating significant experience across diverse sectors, including Healthcare, Schools, Higher Education, Residential, and Science & Technology. This journey has provided me the opportunity to contribute to multiple award-winning projects. In addition to being a project architect on school and health projects, I worked extensively with BIM and excelled in CAD management. As part of the studio CAD Team, I have been instrumental in the creation of studio templates and workflow management.</br></br>Career path: <ul><li>Senior architect (2020 - 2023) </li><li>Architect (2015 - 2020) </br> - After qualification, I immediately fulfilled the role of Project Architect, coordinating the needs of clients and coordinating external consultants (Structural, Mechanical, Fire, Acoustic Engineers, Lanscape Architects...) as lead designer; and took on the responsabilities for the design management of building projects </li><li>Architectural Assistant (2013 - 2015)</ul></p>'
        },
        {
            jobTitle: 'Architectural Assistant',
            timeframe: 'Walker and Martin (Dec 2012 - Feb 2013)',
            img: wamLogo,
            description: '<p>Completed a brief architectural assistant placement at WAM in collaboration with SOM and Westfield. I took charge of 3D modelling and planning the interior layout for a project situated on the periphery of the Olympic Park in Stratford.</p>'
        },
        {
            jobTitle: 'Designer',
            timeframe: 'Jason Bruges Studio (Oct 2011 - Nov 2012)',
            img: jbsImg,
            description: '<p>I worked as a Designer for the prestigious London-based art installation company, Jason Bruges Studio, where I specialised in designing interactive installations spanning three pivotal sectors: architecture, art, and brands. My contributions at JBS ranged from product design to landscape artworks and building facades, with projects executed in the EU and Canada.</p>'
        },
        {
            jobTitle: 'Architectural Assistant',
            timeframe: 'Jean-Charles De Groote & Associés (Feb 2010 - Sep 2010)',
            img: jdaLogo,
            description: '<p>Before moving to London I worked as an architectural assistant for JDA in Brussels, Belgium. I mainly worked on the restoration of existing buildings, renovation and regeneration, such as the transformation of an old farm with listed façades into 25 dwellings.</p>'
        },
    ]

    const [open, setOpen] = useState(false)
    const handleOpenProjectReelPP = () => setOpen(true)
    const handleCloseProjectReelPP = () => setOpen(false)

    return (
        <section className="page" id="experience">
            <h1 className="section-title">Experience</h1>
            <div >
                {experiences
                    .map((exp, id) => {
                        if (id % 2 !== 0) {
                            return (
                                <Container className="container-exp" key={id} fluid >
                                    <Row className="items-list" >
                                        <Col >
                                            <h2 style={{ textAlign: 'right' }}>{exp.jobTitle}</h2>
                                            <h5 style={{ textAlign: 'right' }}>{exp.timeframe}</h5>
                                            {exp.projects
                                                ?
                                                <>
                                                    <button className="button" onClick={handleOpenProjectReelPP} style={{ width: '-webkit-fill-available', margin: '0' }}><img src={exp.projects} alt={reelIcon} style={{ paddingRight: '1rem' }} />Projects Reel</button>
                                                    <Modal
                                                        size="lg"
                                                        show={open}
                                                        onHide={handleCloseProjectReelPP}
                                                        aria-labelledby="example-modal-sizes-title-lg"
                                                    >
                                                        <Modal.Header closeButton>
                                                            <Modal.Title id="example-modal-sizes-title-lg">
                                                                Penoyre & Prasad Portfolio Preview
                                                            </Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body className="modal-container">
                                                            <ExperienceModalPPreel setOpen={setOpen} />
                                                        </Modal.Body>
                                                    </Modal>
                                                </>
                                                :
                                                <></>
                                            }
                                            <div className="justify" dangerouslySetInnerHTML={{ __html: `${exp.description}` }} />
                                        </Col>
                                        <Col
                                            className="single-container"
                                            xs={0}
                                            s={6}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}
                                        >
                                            <div style={{ textAlign: 'left' }} className="logo-container">
                                                <img className="logo" src={exp.img} alt={exp.img} />
                                            </div>
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                        else {
                            return (
                                <Container className="container-exp" key={id} fluid >
                                    <Row className="items-list" >
                                        <Col
                                            className="single-container"
                                            xs={0}
                                            s={6}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}
                                        >
                                            <div className="logo-container">
                                                <img className="logo" src={exp.img} alt={exp.img} style={{ maxWidth: 'auto' }} />
                                            </div>
                                        </Col>
                                        <Col >
                                            <h2 >{exp.jobTitle}</h2>
                                            <h5>{exp.timeframe}</h5>
                                            <div className="justify" dangerouslySetInnerHTML={{ __html: `${exp.description}` }} />
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                    })}
            </div >
        </section>
    )
}