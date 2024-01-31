import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import PP_QEii from '../assets/images/PP_QEII.jpg'
import PP_BMAprimary from '../assets/images/PP_BMAprimary.jpg'
import PP_BMApavillion from '../assets/images/PP_BMApavillion.jpg'
import PP_BMAsecondary from '../assets/images/PP_BMAsecondary.jpg'
import PP_Barlby from '../assets/images/PP_Barlby.jpg'
import PP_Cura from '../assets/images/PP_CURA.jpg'
import PP_muswellHillPractice from '../assets/images/PP_muswellHillPractice.jpg'
import PP_smms from '../assets/images/PP_smms.jpg'
import PP_grenfellNusery from '../assets/images/PP_grenfellNusery.jpg'
import PP_UoKExtension from '../assets/images/PP_UoKExtension.jpg'
import PP_UoKRefurb from '../assets/images/PP_UoKRefurb.jpg'

export default function ExperienceModalPPreel() {
    projects = [
        {
            image: PP_QEii,
            sector: 'Healthcare',
            name: 'New QEII Hospital',
            clients: 'Assemble Community Partnership Limited',
            ribaStagesOfInvolvement: '4',
            roles: 'Architectural Assistant',
            completion: '2015',
            awards: [
                'RIBA Sustainability Award',
                'World Architecture Festival Award, \'Health - Completed Buildings\'',
                'European Healthcare Design Award, \'Interior Design & Arts\' (with Art in Site)',
                'European Healthcare Design Award, \'Healthcare Building under 25,000m&sup2;\'',
                'WAN Healthcare Award',
                'Civic Trust Award',
                'RIBA National Award',
                'RIBA Regional Award',
                'Building Better Healthcare Awards, \'Best Primary Care Development\'',
                'Building Better Healthcare Awards, \'Best Acute Hospital Development\''],
        },
        {
            image: PP_Cura,
            sector: 'Healthcare',
            name: 'CURA Template for Willmott Dixon',
            clients: 'Willmott Dixon',
            ribaStagesOfInvolvement: '1 - 4',
            roles: 'Project Architect',
            completion: '-',
            awards: [],
        },
        {
            image: PP_muswellHillPractice,
            sector: 'Healthcare',
            name: 'Muswell Hill Practice',
            clients: 'NHS North Central London CCG',
            ribaStagesOfInvolvement: 'ALL',
            roles: 'Project Architect & PD',
            completion: '2022',
            awards: [],
        },
        {
            image: PP_smms,
            sector: 'Schools',
            name: 'St Mary Magdalene CofE School',
            clients: 'Royal Borough of Greenwich',
            ribaStagesOfInvolvement: '1-3',
            roles: 'Architectural Assistant',
            completion: '2019',
            awards: [],
        },
        {
            image: PP_BMAprimary,
            sector: 'Schools',
            name: 'Bobby More Academy - Primary ',
            clients: 'David Ross Education Trust',
            ribaStagesOfInvolvement: 'ALL',
            roles: 'Project Architect',
            completion: '2017',
            awards: ['BD Education Architect of the Year 2020'],
        },
        {
            image: PP_BMApavillion,
            sector: 'Schools',
            name: 'Bobby More Academy - Pavillion ',
            clients: 'David Ross Education Trust',
            ribaStagesOfInvolvement: 'ALL',
            roles: 'Project Architect',
            completion: '2018',
            awards: [
                'Building Awards 2019: Small Project of the Year (up to £5m)',
                'BD Education Architect of the Year 2020'],
        },
        {
            image: PP_BMAsecondary,
            sector: 'Schools',
            name: 'Bobby More Academy - Secondary ',
            clients: 'David Ross Education Trust',
            ribaStagesOfInvolvement: 'ALL',
            roles: 'Architect',
            completion: '2018',
            awards: [
                'RIBA Regional Award; London East',
                'BD Education Architect of the Year 2020'],
        },
        {
            image: PP_Barlby,
            sector: 'Schools',
            name: 'New Barlby and Kensington Queensmill Schools',
            clients: 'Royal Borough of Kensington & Chelsea',
            ribaStagesOfInvolvement: '4',
            roles: 'Project architect (temporary maternity leave cover)',
            completion: '2022',
            awards: ['RIBA Regional Award; London East', 'BD Education Architect of the Year 2020'],
        },
        {
            image: PP_grenfellNusery,
            sector: 'Schools',
            name: 'Grenfell Nursery',
            clients: 'Royal Borough of Kensington & Chelsea',
            ribaStagesOfInvolvement: '3-4',
            roles: 'Specifier',
            completion: '2023',
            awards: ['AJ100 Community Impact of the Year award'],
        },
        {
            image: PP_UoKExtension,
            sector: 'Higher Education ',
            name: 'Templeman Library New Extension',
            clients: 'University of Kent',
            ribaStagesOfInvolvement: '4-5',
            roles: 'Architectural Assistant',
            completion: '2015',
            awards: ['Concrete Society Award', 'Graphisoft UK BIM, \'Public Sector Project of the Year\' Award'],
        },
        {
            image: PP_UoKRefurb,
            sector: 'Higher Education ',
            name: 'Templeman Library Refurbishment',
            clients: 'University of Kent',
            ribaStagesOfInvolvement: '4',
            roles: 'Architectural Assistant',
            completion: '2017',
            awards: ['Concrete Society Award', 'Graphisoft UK BIM, \'Public Sector Project of the Year\' Award'],
        }
    ]
    return (
        <section className="page" id="projects" >
            <h1 className="section-title">Projects</h1>
            {/* <div className='carousel-page'> */}
            {/* touch means you can use with touchscreen, wrap continues with no hard stop */}
            <Carousel touch={true} wrap={true} data-bs-theme="dark" slide={true} interval={null} activeIndex={index} onSelect={handleSelect}>
                {/* map through art for carousel to cycle through */}
                {projects
                    .map((project, id) => {
                        return (
                            // has link to go to individual ID page
                            <Carousel.Item key={id}>
                                <Container fluid
                                // className="container-carousel"
                                >
                                    <Row
                                        className="items-list"
                                    >
                                        <Col
                                            // className='single-container'
                                            // sm={true}
                                            xs={0}
                                            s={6}
                                            md={6}
                                            lg={6}
                                            xl={6}
                                            xxl={6}
                                        // style={{ backgroundImage: `url(${project.img})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}
                                        >
                                            <div className="poster-container">
                                                <div className="poster" style={{ backgroundImage: `url(${project.image})` }}></div>
                                            </div>
                                        </Col>
                                        <Col>
                                            <Row><p>{project.sector}</p></Row>
                                            <Row><h3>{project.name}</h3></Row>
                                            <Row><p>Client: {project.clients}</p></Row>
                                            <Row><p>RIBA stages: {project.ribaStagesOfInvolvement}</p></Row>
                                            <Row><p>Role: {project.roles}</p></Row>
                                            <Row><p>Completion Date: {project.completion}</p></Row>
                                            <Row><p>Awards:</p></Row>
                                            <Container>
                                                <Row>{project.awards
                                                    .map((award, i) => {
                                                        return (
                                                            <Row
                                                                // className='single-container'
                                                                key={i}
                                                            >
                                                                <p>{award}</p>
                                                            </Row>
                                                        )
                                                    })
                                                }
                                                </Row>
                                            </Container>

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