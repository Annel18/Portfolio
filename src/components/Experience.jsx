/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"
import jdaLogo from '../assets/icons/jdaLogo.svg'
import gaLogo from '../assets/icons/GALogo.svg'
import ppImg from '../assets/icons/ppLogo.svg'
import jbsImg from '../assets/icons/jbsLogo.svg'
import wamLogo from '../assets/icons/wam-logo.png'



export default function Experience() {

    const experiences = [
        {
            jobTitle: 'Software Engineering Immersive',
            timeframe: 'General Assembly (Oct 2023 - Jan 2024)',
            img: gaLogo,
            description: '<p>This twelve-week course has been one of the most enjoyable and unforgettable experiences of my life. My love for learning combined with a natural understanding of logic and programming fundamentals has allowed me to develop my technical skills at an accelerated rate. Together with my technical development, the course has given me the opportunity to work with my classmates on various projects, giving me an acute awareness for the value of teamwork and the sharing of knowledge. I have finished the course with a great sense of pride in my achievements and my projects, and an insatiable appetite to continue to learn more.</p>'
        },
        {
            jobTitle: 'Senior Architect',
            timeframe: 'Penoyre & Prasad (Feb 2013 - July 2023)',
            img: ppImg,
            description: '<p>I attained my qualification as an architect while working with P&P. Since 2015, I\'ve served as a project architect, accumulating significant experience across diverse sectors, including Healthcare, Schools, Higher Education, Residential, and Science & Technology. This journey has provided me the opportunity to contribute to multiple award-winning projects. In addition to being a project architect on school and health projects, I worked extensively with BIM and excelled in CAD management. As part of the studio CAD Team, I have been instrumental in the creation of studio templates and workflow management.</br></br>Career path: <ul><li>Senior architect (2020 - 2023) </li><li>Architect (2015 - 2020) - I immediately fulfilled the role of Project Architect after qualification </li><li>Architectural Assistant (2013 - 2015)</ul></p>'
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
            description: '<p>Before moving to London I worked as an architectural assistant for JDA in Brussels, Belgium. - I mainly worked on the restoration of existing buildings, renovation and regeneration, such as the transformation of an old farm with listed façades into 25 dwellings.</p>'
        },
    ]

    //       //! Functions
    //   function createDescriptionMarkup() {
    //     return { __html: `${experiences.description}` };
    //   }

    return (
        <section className="page" id="experience">
            <h1 className="section-title">Experience</h1>
            <div >
                {experiences
                    .map((exp, id) => {
                        if (id%2!==0){
                            return (
                                <Container className="container-exp" key={id} fluid >
                                    <Row className="items-list" >
                                        <Col >
                                            <h2 style={{textAlign:'right'}}>{exp.jobTitle}</h2>
                                            <h5 style={{textAlign:'right'}}>{exp.timeframe}</h5>
                                            {/* {function createDescriptionMarkup() {
                                                return { __html: `${experiences.description}` }
                                            }
                                        } */}
                                            <div className="justify" dangerouslySetInnerHTML={{ __html: `${exp.description}` }} />
                                        </Col>
                                        <Col
                                            className="single-container"
                                            sm={6}
                                        // style={{alignItems:'flex-end'}}
                                        >
                                            <div style={{textAlign:'left'}} className="logo-container">
                                                {/* <div className="poster" style={{ backgroundImage: `url(${project.img})` }}></div> */}
                                                {/* <div className="poster" style={{ backgroundImage: `url(${exp.img})`, textAlign:'rigth' }}></div> */}
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
                                            sm={6}
                                        // style={{alignItems:'flex-end'}}
                                        >
                                            <div className="logo-container">
                                                {/* <div className="poster" style={{ backgroundImage: `url(${project.img})` }}></div> */}
                                                {/* <div className="poster" style={{ backgroundImage: `url(${exp.img})`, textAlign:'rigth' }}></div> */}
                                                <img className="logo" src={exp.img} alt={exp.img} />
                                            </div>
                                        </Col>
                                        <Col >
                                            <h2 >{exp.jobTitle}</h2>
                                            <h5>{exp.timeframe}</h5>
                                            {/* {function createDescriptionMarkup() {
                                                return { __html: `${experiences.description}` }
                                            }
                                        } */}
                                            <div className="justify" dangerouslySetInnerHTML={{ __html: `${exp.description}` }} />
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                    })}
                {/* </Carousel> */}
            </div >
        </section>
    )
}