import style from '../Slider/Slider.module.css'
import img from '/src/assets/udemy (1).png';

const Slider = () => {
    return (
        <div className={style.main}>
            <h1>My <span>Cerificates</span></h1>
            <img src={img} alt="udemy certificate" />
        </div>
    )
}

export default Slider       