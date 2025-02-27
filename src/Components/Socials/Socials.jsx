import style from '../Socials/Socials.module.css'
import { Link } from 'react-router-dom';
import logo from '/src/assets/logo (2).png';
import social1 from '/src/assets/instagram.png';
import social2 from '/src/assets/linkedin.png';
import social3 from '/src/assets/gmail.png';
import social4 from '/src/assets/github.png';


const Socials = () => {

    return (
        <div className={style.main}>
            <div className={style.name}>
                <img src={logo} alt="main image" />
                <h1>Satish Bansal</h1>
            </div>
            <button className={style.btn}><Link to='/connect'> Connect with me</Link></button>
            <p>Let's connect with our socials</p>
            <div className={style.social}>

                <a href="https://www.instagram.com/satishbansal450/" target='_blank'><img src={social1} alt="social-media-icon" /></a>
                <a href="https://www.linkedin.com/in/satish-bansal-a88a82203/" target='_blank'><img src={social2} alt="social-media-icon" /></a>
                <a href="mailto:satishbansal931149@gmail.com" target='_blank'><img src={social3} alt="social-media-icon" /></a>
                <a href="https://github.com/Satish-Bansal" target='_blank'><img src={social4} alt="social-media-icon" /></a>


            </div>


        </div>
    )
}

export default Socials