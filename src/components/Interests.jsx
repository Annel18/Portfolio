/* eslint-disable react/prop-types */
// import { Link } from 'react-router-dom'
import { Container, Row, Col } from "react-bootstrap"
import knitLogo from '../assets/icons/knittingLogo.svg'
import circuit from '../assets/icons/circuit.svg'
import musicLogo from '../assets/icons/musicLogo.svg'



export default function Interests() {

    const Interests = [
        {
            title: 'Knitting',
            img: knitLogo,
            description: '<p>Since learning knitting two years ago, I have been making many clothes (hats, scarves, cardigans, hoodies..) and have become obsessed with learning new techniques and creating new patterns.</p>'
        },
        {
            title: 'Electronics',
            img: circuit,
            description: '<p>I enjoy fiddling with Processing and Arduino and I recently made a touch lamp with conductive paint, LED strips and frosted glass. Playing with Arduino breadboards kept me busy in lockdown.</p>'
        },
        {
            title: 'Music',
            img: musicLogo,
            description: '<p>I play the violin and piano</p>'
        }
    ]

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