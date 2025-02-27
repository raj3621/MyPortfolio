import Hero_style from '../Hero/Hero.module.css'

const Hero = () => {
    const onButtonClick = () => {
        const pdfUrl = "Satish Bansal CV (2).pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Satish Bansal CV (2).pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <div className={Hero_style.main}>
                <h1>Hi, I am <span>Satish Bansal</span><br />
                    Bringing Your Vision to the <br />
                    Digital World</h1>

                <p className={Hero_style.shayari}>Design se <span>pyaar</span>, code se junoon, Aapke<span> sapno</span> ko jeene ka hai hamara dard aur<span> sukoon</span>.</p>
                <button className={Hero_style.btn} onClick={onButtonClick}>Download CV</button>
            </div>
        </>
    )
}

export default Hero; 