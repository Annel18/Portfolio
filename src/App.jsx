import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contacts from './components/Contacts'
import bckgImg from './assets/images/YarnFreddie.avif'
import gitHubIcon from './assets/icons/GitHub.svg'

export default function App() {

    const navLinks = [
        'Home ',
        'Projects',
        'Experience',
        'About Me',
        'Interests',
        'Contacts'
    ]

    return (
        <>
            <header>
                <Home />
            </header>
            <main >
                <NavBar navLinks={navLinks} bckgImg={bckgImg} />
                {/* <div style={{ backgroundImage: `url(${bckgImg})`, backgroundSize: 'cover', backgroundRepeat: 'repeat-y', position: 'fixed', width: '100vw', height: '100vh', zIndex: '-1' }}>
                    <div></div>
                </div> */}
                <img src={bckgImg} alt={bckgImg} style={{ width: '100vw', height: '100vh', zIndex: '-2', position: 'fixed', top: 0, left: 0 }} />
                <Projects />
                <Experience />
                <AboutMe />
                <Interests />
                <Contacts />
            </main>
            <footer>
                <a href='https://github.com/Annel18/Portfolio' target="_blank">
                    <p><img style={{ height: '2rem' }} src={gitHubIcon} alt={gitHubIcon} /> Portfolio Source Code</p>
                </a>
            </footer>
        </>
    )
}
