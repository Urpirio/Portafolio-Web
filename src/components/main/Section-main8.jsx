import Section_main8P2 from "./Section-main8P2";
import React, {useState} from "react";

const  Section_main8 = () => {
    let btn_Selection = "--Please choose a option--";
    let ContainerSelect = document.getElementById("Btn-selection");
    let Btn_sltn = document.getElementById("btn-selection1");
    let [btn_Selection1, setBtn_Selection] = useState(false);

    function Btn_Selection(){
        
        setBtn_Selection(!btn_Selection1);
        btn_Selection1 ? document.getElementById("Btn-selection").style.display = "none" : document.getElementById("Btn-selection").style.display = "flex";


    }


/*Funcion para el envio del furmulario a una base de datos.*/ ;
var Contador;
const Sendmessage= () => {

 /*Input de la first Name */
 if (document.getElementById("inputtext1").value == ""){

    document.getElementById("Error1").style.display ="flex";
 }else{
    document.getElementById("Error1").style.display ="none";
    Contador = 1; 
    console.log(`Valor1 de contador = ${Contador} `);
 };
 
 /*Input de Last Name */
 if (document.getElementById("inputtext2").value == ""){

    document.getElementById("Error2").style.display ="flex";
  }else{
    document.getElementById("Error2").style.display ="none";
    Contador = Contador + 1;
    console.log(`Valor2 de contador = ${Contador} `);
  };
  
  /*Input de email address */
  if (document.getElementById("inputtext3").value == ""){

    document.getElementById("Error3").style.display ="flex";
  }else{
    document.getElementById("Error3").style.display ="none";
    Contador = Contador + 1;
    console.log(`Valor3 de contador = ${Contador} `);
  }

/*Input de Phone Number */
if (document.getElementById("inputtext4").value == ""){
    
    document.getElementById("Error4").style.display ="flex";
  }else{
    document.getElementById("Error4").style.display ="none";
    Contador = Contador + 1;
    console.log(`Valor4 de contador = ${Contador} `);
  }

 
}


    const btndefault = () => {
        if(Btn_sltn != "--Please choose a option--" ){
            Btn_sltn.replaceChildren("--Please choose a option--");
            ContainerSelect.style.display = "none";
        }else{
            Btn_sltn.replaceChildren("--Please choose a option--");
            ContainerSelect.style.display = "none";
        };
    };
    
    const WebDesign = () =>{

        if (document.getElementById("btn-selection1") == "--Please choose a option--"){
            Btn_sltn.replaceChildren("Web Design");
            ContainerSelect.style.display = "none";
        }else{
            Btn_sltn.replaceChildren("Web Design");
            ContainerSelect.style.display = "none";
        };
    };
    
    const UI_UX = () =>{

        if (Btn_sltn == "--Please choose a option--"){
            Btn_sltn.replaceChildren("UI/UX Design");
            ContainerSelect.style.display = "none";
        }else{
            Btn_sltn.replaceChildren("UI/UX Design");
            ContainerSelect.style.display = "none";
        };

    };

    const AppDesign = () =>{
        if (Btn_sltn == "--Please choose a option--"){
            Btn_sltn.replaceChildren("App Design");
            ContainerSelect.style.display = "none";
        }else{
            Btn_sltn.replaceChildren("App Design");
            ContainerSelect.style.display = "none";
        };
    };

    const HandleSubmit = (e)=>{

        e.preventDefault();
        
        if (Contador == 4){
            console.log("Se envio la informacion");
        }else{
            console.log("No se envio la informacion");
        }
    };

    return(
        <section className="Section-main8" id="Section-main8">
            <form onSubmit={HandleSubmit}  className="form" >

                <div className="form-div1">
                    <h1>Let’s work together!</h1>
                    <p>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                </div>

                <div className="Form-div2">

                    <div>
                       <input  id="inputtext1" type="text" placeholder="First name" />
                        <p id="Error1" >Please fill out this field.</p>
                    </div>

                    <div>
                       <input   id="inputtext2" type="text" placeholder="Last name" />
                        <p id="Error2">Please fill out this field.</p>
                    </div>

                </div>

                <div className="form-div3" >

                    <div>
                       <input   id="inputtext3" type="email" placeholder="Email address"/>
                       <p id="Error3" >Please fill out this field.</p>
                    </div>

                    <div>
                       <input   id="inputtext4" type="number" placeholder="Phone number" />
                       <p id="Error4" >Please fill out this field.</p>
                    </div>

                </div>

                <div className="form-div4" >

                    <button onClick={Btn_Selection} id="btn-selection1" >{btn_Selection}</button>
                    <p id="Error5">Please fill out this field.</p>

                 <div className="Btn-Selection" id="Btn-selection">

                    <button onClick={btndefault} className="btn-first-selection">--Please choose a option--</button>
                    <button onClick={WebDesign} >Web Design</button>
                    <button onClick={UI_UX} >UI/UX Design</button>
                    <button onClick={AppDesign} className="btn-last-selection">App Design</button>

                 </div>
                </div>

                

                <div className="form-div5">

                    <textarea placeholder="Message"></textarea>

                </div>

                <div className="form-btn-sendMessage">

                    <button onClick={Sendmessage} type="Submit" >Send Message</button>
                    <div ><p>One or more fields have an error. Please check and try again.</p></div>

                </div>
            </form>
            <Section_main8P2/>
            
        </section>
    );
}
export default Section_main8;
