import SectionDH1 from "./Data/SectionHeader";
import "./style/Section_1H.css"

const Section_1H = () => {

    const headerlist = SectionDH1.map( H => {
        return <img src={H.Logo}/>
    });

    const Contratame = () => {
        window.location.href = '#Section-main8';
    }

    return(
        <section className="Section-header1">
            <div className="S-header-div1">
            {headerlist}
            <h1>UrpirioDev</h1>
            </div>
            <div className="S-header-div2">
                <nav>
                    <a href="#Section-main3">Servicios</a>
                    <a href="#Section-main4">Proyectos</a>
                    <a href="#Section-main5">Educacion</a>
                    <a href="#Section-main6">Habilidades</a>
                    {/* <a href="#Section-main7">Testimonials</a> */}
                    <a href="#Section-main8">Contacto</a>
                </nav>
                <div>
                    <button onClick={Contratame}>¡Contrátame!</button>
                </div>
            </div>
        </section>
    )
}
export default Section_1H