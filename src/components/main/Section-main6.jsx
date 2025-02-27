import SectionDm6 from "./Data/Section-main6";
import "./style/Section_main6.css";

const  Section_main6 = () => {
{/*Funcion */};
    const Div2 = (props) => {
        return(
                <div className="Section-main6-div2">
                    <div>
                       <img src={props.logo} alt={props.DepLogo} />
                       <h3>{props.Percent}</h3>
                    </div>
                      <h2>{props.tecnology}</h2>
                </div>
        );
    };
{/*Mapeado y agregado de la informacion antes de ser retornada y exportada */};
    const skillsList = SectionDm6.map( SM6 => {
        return(
            <Div2 logo = {SM6.logo} DepLogo = {SM6.deplogo} Percent = {SM6.percent} tecnology = {SM6.tecnology} />
        );
    });

    return(
        <section className="Section-main6" id="Section-main6">
            <div className="Section-main6-div1" >
                <h1>Mis habilidades</h1>
                {/* <p>Plasmamos sus ideas y, por tanto, sus deseos en forma de un proyecto web único que le inspirará a usted y a sus clientes.</p> */}
            </div>
            <div className="Section-main6-Div2">
                {skillsList}
            </div>
        </section>
    );
};
export default Section_main6;