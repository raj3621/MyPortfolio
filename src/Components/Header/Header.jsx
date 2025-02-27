import { Link } from 'react-router-dom';
import style from '../Header/Header.module.css';
import img from '/src/assets/logo (2).png'


const Header = () => {

    return (
        <>
            <section className={style.main}>
                <div className={style.logo}>
                    <Link to='/'>
                        <img src={img} alt="hello" />
                        <h6>Satish Bansal</h6>
                    </Link>
                </div>

                {/* Dynamic menu classes */}
                <div className={style.left_nav}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><a href="#languages">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#experience">Experience</a></li>

                    </ul>

                    <div className={style.btn}>
                        <button><Link to='/connect'>Connect</Link></button>
                    </div>
                </div>


            </section>
        </>
    );
};

export default Header;
