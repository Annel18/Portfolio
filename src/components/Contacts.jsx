/* eslint-disable react/prop-types */
import gitHubIcon from '../assets/icons/GitHub.svg'
import linkedInLogo from '../assets/icons/LinkedIn.svg'
import emailLogo from '../assets/icons/Email.svg'



export default function Contacts() {


    return (
        <section className="page" id="contacts">
            <h1 className="section-title">Contacts</h1>
            <div className="section-sub">
                <a href='mailto:annelaure.guiot@gmail.com' target="_blank">
                    <h5><img style={{ height: '2rem' }} src={emailLogo} alt={emailLogo} /> Email</h5>
                </a>
                <a href='https://www.linkedin.com/in/anne-laure-guiot/' target="_blank">
                    <h5><img style={{ height: '2rem' }} src={linkedInLogo} alt={linkedInLogo} /> LinkedIn</h5>
                </a>
                <a href='https://github.com/Annel18' target="_blank">
                    <h5><img style={{ height: '2rem' }} src={gitHubIcon} alt={gitHubIcon} /> GitHub</h5>
                </a>
            </div >
        </section>
    )
}