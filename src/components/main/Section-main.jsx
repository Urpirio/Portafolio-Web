import SectionIMG from "./Data/SectionIMG";
import  "./style/section_main.css";

const Section_main = () =>{

    // const imgDev = SectionIMG.map( Dev => {
    //     return <img src={Dev.ImagenDev} alt="Foto de Desarrollador" />
    // })

    // const imgDev2 = SectionIMG.map( Dev => {
    //     return <img src={Dev.ImagenDev} alt="Foto de Desarrollador" id="imgDev2" />
    // });

    const Instagram = () => {
        window.location.href = 'https://www.instagram.com/urpirio.junior/';
    };

    const Linkedin = () => {
        window.location.href = 'https://do.linkedin.com/in/urpirio-junior-moreno-vargas-95294b269';
    };

    const Githud = () => {
        window.location.href = 'https://github.com/Urpirio';
    };

    return(
        <section className="Section-main">
            <div className="S-main-div1">
                <div>
                    <h2>Soy Urpirio Junior</h2>
                    <h1>Desarrollador Web + Diseñador UX</h1>
                    <img src='https://media.licdn.com/dms/image/v2/D4E03AQHjeBH8_1JH1A/profile-displayphoto-shrink_200_200/B4EZVIasOjHMAY-/0/1740676711914?e=2147483647&v=beta&t=9gKXTlIa2Q0O_gR31xz2Jwcd0VxYZnfbAuHbof3TQ3s' alt="Foto de Desarrollador" id="imgDev2" />
                    <p>Analizo problemas complejos de la experiencia del usuario para crear soluciones centradas en la integridad que conecten a miles de millones de personas.</p>
                </div>
                <div className="S-main-div1-div2">
                    <a href="src/components/main/Data/Urpirio Junior Moreno Vargas Cv (1) (1).pdf" download="Urpirio Junior Moreno Vargas Cv (1) (1).pdf"><button>Download CV<i class='bx bx-download'></i></button></a>
                    <div>
                    <i onClick={Instagram} class='bx bxl-instagram' ></i>
                    <i onClick={Linkedin} class='bx bxl-linkedin' ></i>
                    <i onClick={Githud} class='bx bxl-github' ></i>
                    </div>
                </div>
            </div>
            <div className="S-main-div2">
                <img src="https://media.licdn.com/dms/image/v2/D4E03AQHjeBH8_1JH1A/profile-displayphoto-shrink_200_200/B4EZVIasOjHMAY-/0/1740676711914?e=2147483647&v=beta&t=9gKXTlIa2Q0O_gR31xz2Jwcd0VxYZnfbAuHbof3TQ3s" alt="" />
            </div>
        </section>
    )
}

export default Section_main