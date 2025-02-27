import lan_style from '../Languages/Languages.module.css'

const Languages = () => {

    const data = [
        {
            img: 'src/assets/html.png',
            name: "HTML"
        },
        {
            img: 'src/assets/css.png',
            name: "CSS"
        },
        {
            img: 'src/assets/js.png',
            name: "javaScript"
        },
        {
            img: 'src/assets/react.png',
            name: "React"
        },
        {
            img: 'src/assets/wordpress.png',
            name: "Wordpress"
        },
        {
            img: 'src/assets/figma.png',
            name: "Figma"
        }
    ]

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