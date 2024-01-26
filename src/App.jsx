import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contacts from './components/Contacts'
import bckgImg from './assets/images/YarnFreddie.avif'

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
                {/* <div style={{ backgroundImage: `url(${bckgImg})`, backgroundSize: 'cover', backgroundRepeat: 'repeat-y', position: 'fixed', width: '100vw', height: '100vh', zIndex: '-1' }}> */}
                <Projects />
                <Experience />
                <AboutMe />
                <Interests />
                <Contacts />
                {/* </div> */}
            </main>
        </>
    )
}
