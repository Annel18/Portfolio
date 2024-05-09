/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"
import Interests from '../assets/data/Interests.js'



export default function Interests() {



    return (
        <section className="page" id="interests">
            <h1 className="section-title">Interests</h1>
            <div >
                {Interests
                    .map((interest, id) => {
                        if (id % 2 === 0) {
                            return (
                                <Container className="container-exp" key={id} fluid >
                                    <Row className="items-list" >
                                        <Col
                                            className="single-container"
                                            sm={6}
                                        // style={{alignItems:'flex-end'}}
                                        >
                                            <div className="logo-container" style={{height:'5rem'}}>
                                                <img className="logo" src={interest.img} alt={interest.img} style={{height:'10rem'}}/>
                                            </div>
                                        </Col>
                                        <Col >
                                            <h2>{interest.title}</h2>
                                            <div className="justify" dangerouslySetInnerHTML={{ __html: `${interest.description}` }} />
                                        </Col>
                                    </Row>
                                </Container>
                            )
                        }
                        else {
                            return (
                                <Container className="container-exp" key={id} fluid >
                                    <Row className="items-list" >
                                        <Col >
                                            <h2 style={{textAlign:'right'}}>{interest.title}</h2>
                                            <div className="justify" dangerouslySetInnerHTML={{ __html: `${interest.description}` }} />
                                        </Col>
                                        <Col
                                            className="single-container"
                                            sm={6}
                                        >
                                            <div style={{textAlign:'left', height:'5rem'}} className="logo-container">
                                                <img className="logo" src={interest.img} alt={interest.img} style={{height:'8rem'}}/>
                                            </div>
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