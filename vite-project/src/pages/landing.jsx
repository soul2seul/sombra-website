
import {DefaultPlayer as Video} from 'react-html5video'
import introVideo from '../assets/ANIMACION_INICIO_FINAL.mp4'
import 'react-html5video/dist/styles.css'


export default function Landing () {
    return (
    <div>
        <header>
            <nav>
                <ul className="nav--landing">
                    <li>
                    <a href="/home"> + </a>
                    </li>
                    <li>
                    <a href="/home"> PAGINA DE INICIO </a>
                    </li>
                    
                </ul>
            </nav>
        </header>
        
    <Video autoPlay loop>
        <source src={introVideo}  type="video/mp4" className="video--container"></source>
    </Video>
    </div>
    )
}