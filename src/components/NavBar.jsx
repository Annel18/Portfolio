/* eslint-disable react/prop-types */
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

export default function NavBar({ navLinks, bckgImg }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function Example() {
        return (
            <>
                {['start', 'end', 'top', 'bottom'].map((placement, idx) => (
                    <OffCanvasExample key={idx} placement={placement} name={placement} />
                ))}
            </>
        );
    }

    return (
        <>
            <nav className='navBar-large'>
                <ul>
                    <li>
                        {navLinks.map((link, i) => <a key={i} href={`#${link.toLowerCase()}`}>{link} </a>)}
                    </li>
                </ul>
            </nav>
            <div className='navBar-small navBar'>
                <div variant="primary" onClick={handleShow} className="me-2">
                    <div className='navButton'></div>
                    <div className='navButton'></div>
                    <div className='navButton'></div>
                </div>
                <Offcanvas show={show} onHide={handleClose} placement={'top'}>
                    {/* <Offcanvas.Header closeButton>
                        <Offcanvas.Title></Offcanvas.Title>
                    </Offcanvas.Header> */}
                    <Offcanvas.Body>
                        <nav>
                            <ul>
                                <li>
                                    {navLinks.map((link, i) => <a key={i} href={`#${link.toLowerCase()}`}>{link} </a>)}
                                </li>
                            </ul>
                        </nav>
                    </Offcanvas.Body>
                </Offcanvas>
            </div>

        </>
    )
}