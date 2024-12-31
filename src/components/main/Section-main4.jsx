import "./style/Section_main4.css";


const Section_main4 = () =>{

    function All(){
        document.getElementById("Web").style.display = "flex";
        document.getElementById("Web2").style.display = "flex";
        document.getElementById("Web3").style.display = "flex";
        document.getElementById("Web4").style.display = "flex";
        document.getElementById("NoContent").style.display = "none";

        let All = document.getElementById("All").style.background = "linear-gradient(90deg,blue,#0077b6,#90e0ef)";
        let Apps = document.getElementById("Apps").style.background = "none";
        let Webs = document.getElementById("Webs").style.background = "none";
        let Expe = document.getElementById("UX_UI").style.background = "none";
    }
    function Apps(){

        document.getElementById("Web").style.display = "none";
        document.getElementById("Web2").style.display = "none";
        document.getElementById("Web3").style.display = "none";
        document.getElementById("Web4").style.display = "none";
        document.getElementById("NoContent").style.display = "flex";

        let All = document.getElementById("All").style.background = "none";
        let Apps = document.getElementById("Apps").style.background = "linear-gradient(90deg,blue,#0077b6,#90e0ef)";
        let Webs = document.getElementById("Webs").style.background = "none";
        let Expe = document.getElementById("UX_UI").style.background = "none";
    }
    function Webs(){
        document.getElementById("Web").style.display = "flex";
        document.getElementById("Web2").style.display = "flex";
        document.getElementById("Web3").style.display = "flex";
        document.getElementById("Web4").style.display = "flex";
        document.getElementById("NoContent").style.display = "none";

        let Apps = document.getElementById("All").style.background = "none";
        let All = document.getElementById("Apps").style.background = "none";
        let Webs = document.getElementById("Webs").style.background = "linear-gradient(90deg,blue,#0077b6,#90e0ef)";
        let Expe = document.getElementById("UX_UI").style.background = "none"
    }
    function Expe(){
        document.getElementById("Web").style.display = "none";
        document.getElementById("Web2").style.display = "none";
        document.getElementById("Web3").style.display = "none";
        document.getElementById("Web4").style.display = "none";
        document.getElementById("NoContent").style.display = "flex";

        let Apps = document.getElementById("All").style.background = "none";
        let All = document.getElementById("Apps").style.background = "none";
        let Webs = document.getElementById("Webs").style.background = "none";
        let Expe = document.getElementById("UX_UI").style.background = "linear-gradient(90deg,blue,#0077b6,#90e0ef)";
    }



    return(
        <div className="Section-main4-div1">
            <h1>My Recent Works</h1>
            <nav>
                <button id="All" onClick={All} className="All" >All</button>
                <button id="Apps" onClick={Apps}  className="Apps" >Apps</button>
                <button id="Webs" onClick={Webs} className="Webs" >Webs</button>
                <button id="UX_UI" onClick={Expe} className="UX-UI" >UX/UI</button>
            </nav>
        </div>
    )
}
export default Section_main4