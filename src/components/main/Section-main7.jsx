import SectionDm7 from "../data/Section-main7";
import "./style/Section_main7.css";

const Section_main7 = () => {

    const Div2 = (props) => {

        return(
            
                <div className="Card-services">
                    <div className="Card-services-div1" >
                        <img src={props.clientePhoto} alt={props.clienteName + " Photo"} />
                        <p>{props.opinion}</p>
                    </div>
                    <div className="Card-services-div2">
                        <h3>{props.clienteName}</h3>
                        <p>{props.PositionWork}</p>
                    </div>
                </div>
        )
    }

    const Client_opinion_List = SectionDm7.map( SM7 => {
        return(
            <Div2 clientePhoto = {SM7.clientePhoto} clienteName = {SM7.clientName} opinion = {SM7.opinion} PositionWork = {SM7.positionWork} />
        )
    })

    return(
        <section className="Section-main7" id="Section-main7">
            <div className="Section-main7-div1">
                <h1>My Client's Stories</h1>
                <p>Empowering people in new a digital journey with my super services</p>
            </div>
            <div className="Section-main7-div2">
            {Client_opinion_List}
            </div>
        </section>
    )
}
export default Section_main7