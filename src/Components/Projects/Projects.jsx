import style from '../Projects/Projects.module.css';
import img1 from '/src/assets/Amazon.png';
import img2 from '/src/assets/Myntra.png';
import img3 from '/src/assets/Motorola.png';
import img4 from '/src/assets/Haavi.png';
import img5 from '/src/assets/Raised(1).png';
import img6 from '/src/assets/Amazon.png';

const Projects = () => {
    return (
        <div className={style.main} id='projects'>
            <h1>My Recent <span>Projects</span></h1>
            <div className={style.projects}>
                <div className={style.card}>
                    <img src={img1} alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Amazon.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://marketplace-6b23c.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={img2} alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Myntra.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://myntra-official.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={img3} alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Motorola.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://motorola-2f3c6.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={img4} alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Haavi.in Wordpress Ecommerce Website</h2>
                        <span>Technology Used </span>
                        <p>Elementor, Woocommerce</p>
                        <button><a href="https://haavi.in/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={img5} alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Raised Lines Foundation Wordpress NPO Website</h2>
                        <span>Technology Used </span>
                        <p>Elementor, WooCommerce</p>
                        <button><a href="https://raisedlines.org/" target='_blank'>View Project</a></button>
                    </div>
                </div>
                <div className={style.card}>
                    <img src={img6} alt="Project - 1" />
                    <div className={style.card_cont}>
                        <h2>Amazon.in Website Clone(only Front-end)</h2>
                        <span>Technology Used </span>
                        <p>HTML, CSS, JS, jQuery</p>
                        <button><a href="https://marketplace-6b23c.web.app/" target='_blank'>View Project</a></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects