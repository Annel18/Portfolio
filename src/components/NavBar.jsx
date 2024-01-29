/* eslint-disable react/prop-types */
export default function NavBar({ navLinks, bckgImg }) {

    return (
        <>
            <nav style={{zIndex:'2'}}>
                <ul>
                    <li>
                        {navLinks.map((link, i) => <a key={i} href={`#${link.toLowerCase()}`}>{link} </a>)}
                    </li>
                </ul>
            </nav>
            {/* <nav> */}
            {/* <img src={bckgImg} alt={bckgImg} style={{ width: '100vw', height:'100vh', zIndex:'-2' , position: 'sticky' }}/> */}
            {/* <div style={{ backgroundImage: `url(${bckgImg})`, backgroundSize: 'contain', height: '100vh', width: '100vw', position: 'sticky', zIndex:'-2'}}></div> */}
            {/* </nav> */}
        </>
    )
}