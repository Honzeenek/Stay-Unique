import './reset.css'
import './Nav.css'
import logo from './assets/logo.png'
import glow from './assets/glow.png'
export default function Nav() {
    return (
        <nav>
            <img src={glow} alt={'Top Glow'} className={'glowTop'}></img>
            <ul>
                <div className="nav-left">
                    <img alt={'logo'} src={logo} className={'logo'}></img>
                    <li className={'navItem'}><a>About</a></li>
                    <li className={'navItem'}><a>Work</a></li>
                    <li className={'navItem'}><a>Contact</a></li>
                </div>
                <p>Jan Páleník</p>
            </ul>
        </nav>
    )
}