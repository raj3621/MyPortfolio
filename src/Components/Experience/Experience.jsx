import style from '../Experience/Experience.module.css'

const Experience = () => {

    const data = [
        {
            duration: 'July 2024 to October 2024',
            img: 'src/assets/web-colonizer (1).png',  // ✅ Correct Path
            designation: 'Wordpress Developer Intern',
            responsibility: 'Creating Layouts, Maintenance, Adding Functionality Raw coding'
        },
        {
            duration: 'October 2024 to Ongoing 2025',
            img: 'src/assets/RLF (2).png',  // ✅ Correct Path
            designation: 'Wordpress Developer',
            responsibility: 'Creating Complete website, Maintenance Existing PHP website, Adding Functionality, Raw coding, C-panel'
        }
    ]

    return (
        <div className={style.main} id='experience'>
            <h1>My <span>Experiece</span></h1>
            <div className={style.experience}>
                {data.map(function (elem) {

                    return <div className={style.exp_1}>
                        <div className={style.img}>
                            <img src={elem.img} alt="company logo" />
                        </div>
                        <div className={style.cont}>
                            <p> {elem.duration}</p>
                            <span>Designation</span>
                            <h2>{elem.designation}</h2>
                            <span>Responsibilities</span>
                            <h2>{elem.responsibility} </h2>
                        </div>
                    </div>
                })}

            </div>
        </div>
    )
}

export default Experience