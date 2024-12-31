import SectionHeader from "../data/SectionHeader"
import  "./style/section_main.css";

const Section_main = () =>{

    const imgDev = SectionHeader.map( Dev => {
        return <img src={Dev.ImagenDev} alt="Foto de Desarrollador" />
    })

    return(
        <section className="Section-main">
            <div className="S-main-div1">
                <div>
                    <h2>I am Urpirio</h2>
                    <h1>Web Developer + UX Designer</h1>
                    <p>I break down complex user experience problems to create integrity focussed solutions that connect billions of people</p>
                </div>
                <div className="S-main-div1-div2">
                    <a href="src/assets/Urpirio Junior Moreno Vargas Cv (1) (1).pdf" download="Urpirio Junior Moreno Vargas Cv (1) (1).pdf"><button>Download CV<i class='bx bx-download'></i></button></a>
                    <i class='bx bxl-instagram' ></i>
                    <i class='bx bxl-linkedin' ></i>
                    <i class='bx bxl-github' ></i>
                </div>
            </div>
            <div className="S-main-div2">
                {imgDev}
            </div>
        </section>
    )
}

export default Section_main