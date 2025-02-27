import lan_style from '../Languages/Languages.module.css'

const Languages = () => {

    const data = [
        { img: 'html.png', name: "HTML" },
        { img: 'css.png', name: "CSS" },
        { img: 'js.png', name: "JavaScript" },
        { img: 'react.png', name: "React" },
        { img: 'wordpress.png', name: "WordPress" },
        { img: 'figma.png', name: "Figma" }
    ];
    

    return (
        <section className={lan_style.main} id='languages'>
            <div className={lan_style.cards}>
                {data.map(function (elem) {
                    return <div className={lan_style.individual}>
                        <img src={elem.img} alt="language icon" />
                        <h2>{elem.name}</h2>
                    </div>
                })}
            </div>


        </section>
    )
}

export default Languages;