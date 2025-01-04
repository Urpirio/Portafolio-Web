import { flushSync } from "react-dom";
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


    const BtnSelectD = ()=>{
        change_BtnSelect = false;
        clearInterval(change_BtnSelect1);
        change_BtnSelect1 = null;
        console.log("esto corre")
    };
    const BtnSelectO = () =>{
        change_BtnSelect1 = true;
        clearInterval(change_BtnSelect);
        change_BtnSelect = null;
    }

var change_BtnSelect1;
var change_BtnSelect;
    const btndefault = () => {
        if(Btn_sltn != "--Please choose a option--" ){
            Btn_sltn.replaceChildren("--Please choose a option--");
            ContainerSelect.style.display = "none";
            change_BtnSelect = setTimeout(BtnSelectD,1000)

        }else{
            Btn_sltn.replaceChildren("--Please choose a option--");
            ContainerSelect.style.display = "none";
            change_BtnSelect = setTimeout(BtnSelectD,1000)
        };
    };
    
    const WebDesign = () =>{

        if (document.getElementById("btn-selection1") == "--Please choose a option--"){
            Btn_sltn.replaceChildren("Web Design");
            ContainerSelect.style.display = "none";
            change_BtnSelect1 = setInterval(BtnSelectO,1000);
        }else{
            Btn_sltn.replaceChildren("Web Design");
            ContainerSelect.style.display = "none";
            change_BtnSelect1 = setInterval(BtnSelectO,1000);
        };
    };
    
    const UI_UX = () =>{

        if (Btn_sltn == "--Please choose a option--"){
            Btn_sltn.replaceChildren("UI/UX Design");
            ContainerSelect.style.display = "none";
            change_BtnSelect1 = setInterval(BtnSelectO,1000);
        }else{
            Btn_sltn.replaceChildren("UI/UX Design");
            ContainerSelect.style.display = "none";
            change_BtnSelect1 = setInterval(BtnSelectO,1000);
        };

    };

    const AppDesign = () =>{
        if (Btn_sltn == "--Please choose a option--"){
            Btn_sltn.replaceChildren("App Design");
            ContainerSelect.style.display = "none";
            change_BtnSelect1 = setInterval(BtnSelectO,1000);
        }else{
            Btn_sltn.replaceChildren("App Design");
            ContainerSelect.style.display = "none";
            change_BtnSelect1 = setInterval(BtnSelectO,1000);
        };
    };

    const HandleSubmit = (e)=>{

        e.preventDefault();
        
        if (SendM == 5){
            const serviceID = 'default_service';
            const templateID = 'template_9m5c6k3';
            emailjs.sendform(serviceID,templateID,this).then(()=>{
                document.getElementById("GlobalError").style.display = "none";
                document.getElementById("GlobalSend").style.display = "flex";
            }
        )
        }else{
            console.log("No se envio la informacion");
        }
    };

    /*Funcion para el envio del furmulario a una base de datos.*/ ;
var SendM;
var SendError;
const Sendmessage= () => {

 /*Input de la first Name */
 if (document.getElementById("inputtext1").value == ""){

    document.getElementById("Error1").style.display ="flex";
    SendError = 1;

 }else{

    document.getElementById("Error1").style.display ="none";
    SendM = 1; 
    console.log(`Valor1 de contador = ${SendM} `);

 };
 
 /*Input de Last Name */
 if (document.getElementById("inputtext2").value == ""){

    document.getElementById("Error2").style.display ="flex";
    SendError = SendError + 1;

  }else{

    document.getElementById("Error2").style.display ="none";
    SendM = SendM + 1;
    console.log(`Valor2 de contador = ${SendM} `);

  };
  
  /*Input de email address */
  if (document.getElementById("inputtext3").value == ""){

    document.getElementById("Error3").style.display ="flex";
    SendError = SendError + 1;

  }else{

    document.getElementById("Error3").style.display ="none";
    SendM = SendM + 1;
    console.log(`Valor3 de contador = ${SendM} `);

  }

/*Input de Phone Number */
if (document.getElementById("inputtext4").value == ""){
    
    document.getElementById("Error4").style.display ="flex";
    SendError = SendError + 1;

  }else{

    document.getElementById("Error4").style.display ="none";
    SendM = SendM + 1;
    console.log(`Valor4 de contador = ${SendM} `);

  }

  if(change_BtnSelect1 == true){

    document.getElementById("Error5").style.display ="none";
    SendM = SendM + 1;
    console.log(`Valor4 de contador = ${SendM} `);

  }else if(change_BtnSelect == false){

    document.getElementById("Error5").style.display ="flex";
    SendError = SendError + 1;
    console.log(SendError);

  }else{

    document.getElementById("Error5").style.display ="flex";
    SendError = SendError + 1;
    console.log(SendError);

  }

  if (SendError == 5){
    document.getElementById("GlobalError").style.display = "flex";
    document.getElementById("GlobalSend").style.display = "none";
  }else if(SendM != 5){
    document.getElementById("GlobalSend").style.display = "none";
  };



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
                       <input  id="inputtext1" type="text" name="First_name" placeholder="First name" />
                        <p id="Error1" >Please fill out this field.</p>
                    </div>

                    <div>
                       <input   id="inputtext2" type="text" name="Last_name" placeholder="Last name" />
                        <p id="Error2">Please fill out this field.</p>
                    </div>

                </div>

                <div className="form-div3" >

                    <div>
                       <input   id="inputtext3" type="email" name="Email_address" placeholder="Email address"/>
                       <p id="Error3" >Please fill out this field.</p>
                    </div>

                    <div>
                       <input   id="inputtext4" type="number" name="Phone number" placeholder="Phone number" />
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

                    <textarea placeholder="Message" name="message"></textarea>
                    <p></p>

                </div>

                <div className="form-btn-sendMessage">

                    <button onClick={Sendmessage} type="Submit" >Send Message</button>
                    <div id="GlobalError" ><p >One or more fields have an error. Please check and try again.</p></div>
                    <div id="GlobalSend" ><p >Thank you for your message. It has been sent.</p></div>
                </div>
            </form>
            <Section_main8P2/>
            
        </section>
    );
}
export default Section_main8;
