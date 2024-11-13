import { Link } from "react-router-dom"
import './Navbar.css'

function NavButton(props) {
    return (
        <Link className='nav-btn' to={props.href}>
            {props.text}
        </Link>
    );
}

function Navbar({ links }) {
    console.log(links);
    const title = "NASA";

    return (
        <nav>
            <img className="logo" src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" alt="logo"/>
            <div className='titulo'>
                <h1>{title}</h1>
            </div>
            {links && links.map((link, inx) => (
                <NavButton href={link.href} text={link.text} key={inx} />
            ))}
        </nav>
    );
}

export default Navbar;
