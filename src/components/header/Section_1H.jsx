import SectionDH1 from "./Data/SectionHeader";
import "./style/Section_1H.css"

const Section_1H = () => {

    const headerlist = SectionDH1.map( H => {
        return <img src={H.Logo}/>
    });

    const Contratame = () => {
        scroll(0,3300);
    };
     
    // const Servicios = () => {
    //     scroll(0,1000);
    // };

    const Proyectos = () => {
        scroll(0,1100);
    };

    const Educacion = () => {
        scroll(0,2150);
    };

    const Habilidades = () => {
        scroll(0,2700);
    }

    return(
        <section className="Section-header1">
            <div className="S-header-div1">
            {headerlist}
            <h1>UrpirioDev</h1>
            </div>
            <div className="S-header-div2">
                <nav>
                    {/* <a onClick={Servicios}>Servicios</a> */}
                    <a onClick={Proyectos}>Proyectos</a>
                    <a onClick={Educacion}>Educacion</a>
                    <a onClick={Habilidades}>Habilidades</a>
                    {/* <a href="#Section-main7">Testimonials</a> */}
                    {/* <a href="#Section-main8">Contacto</a> */}
                </nav>
                <div>
                    <button onClick={Contratame}>Contactame</button>
                </div>
            </div>
        </section>
    )
}
export default Section_1H