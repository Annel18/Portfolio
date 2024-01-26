/* eslint-disable react/prop-types */
export default function NavBar({ navLinks }) {

    return (
        <nav>
            <ul>
                <li>
                    {navLinks.map((link, i) => <a key={i} href={`#${link.toLowerCase()}`}>{link} </a>)}
                </li>
            </ul>
        </nav>
    )
}