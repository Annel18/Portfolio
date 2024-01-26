import NavBar from './components/NavBar'
import Home from './components/Home'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Interests from './components/Interests'
import Contacts from './components/Contacts'

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
                <NavBar navLinks={navLinks} />
            </header>
            <main>
                <Home />
                <Projects />
                <Experience />
                <AboutMe />
                <Interests />
                <Contacts />
            </main>
        </>
    )
}
