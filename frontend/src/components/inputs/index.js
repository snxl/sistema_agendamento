import * as s from "./styles"


export default function Input (props) {
    
    return (

        <>  

            <s.input
                type={props.type}
                placeholder={props.placeContent}
                value={props.value}
                onChange={ e => props.setValue(e.target.value)}
                onFocus={ e => e.target.style.opacity = "100%"}
                onBlur={ e => e.target.style.opacity = "50%" }
            />

        </>

    )

}