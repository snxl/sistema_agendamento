import {useState} from "react"

import * as s from "./styles"

import btnShowPassword from "../../assets/showPassword.svg"
import checked from "../../assets/checked.svg"


export default function Input (props) {

    const [minimalLength, setLength] = useState(true)

    function changeType( event ){

            props.type === "password"? props.setType("text"):props.setType("password")

    }

    function checkUserLenght(event){

        if(props.placeContent === "Email"){

            if(event.length >= 1) return setLength(false);
            else return setLength(true);

        }

    }

    function changed( event ){
        
        checkUserLenght(event.target.value)

        props.setValue(event.target.value);

    }

    
    return (

        <>  

            <s.div
                marginDiv={props.margin}
            >

                    <s.input
                        type={props.type}
                        placeholder={props.placeContent}
                        value={props.value}
                        onChange={ e => changed(e)}
                        onFocus={ e => e.target.style.opacity = "100%"}
                        onBlur={ e => e.target.style.opacity = "80%" }
                        className={props.color}
                        pattern={props.pattern}
                        required={props.required}
                        minLength={props.minlength}
                    />

                    {props.showPassword && (
                        
                        <s.img 
                            src={btnShowPassword}
                            onClick={ e => changeType(e)}
                        />
                    
                    )}

                    {props.checked && (
                        
                        <s.img 
                            src={checked} 
                            onClick={ e => changeType(e)}
                            displayInp={minimalLength}
                        />
                    
                    )}

            </s.div>
            

        </>

    )

}