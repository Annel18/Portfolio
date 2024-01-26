/* eslint-disable react/prop-types */
import gitHubIcon from '../assets/icons/GitHub.svg'
import linkedInLogo from '../assets/icons/LinkedIn.svg'
import emailLogo from '../assets/icons/Email.svg'



export default function Contacts() {


    return (
        <section className="page" id="contacts">
            <h1 className="section-title">Contacts</h1>
            <div className="section-sub">
                <h5><img style={{ height: '2rem' }} src={emailLogo} alt={emailLogo} /> Email</h5>
                <h5><img style={{ height: '2rem' }} src={gitHubIcon} alt={gitHubIcon} /> GitHub</h5>
                <h5><img style={{ height: '2rem' }} src={linkedInLogo} alt={linkedInLogo} /> LinkedIn</h5>
            </div >
        </section>
    )
}