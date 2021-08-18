import * as s from "./styles"

export default function Redirect( props ) {

    return (

        <>
            <s.div>

                <s.text>

                    {props.contentText}


                </s.text>

                <s.anchor href={props.link}>

                    {props.contentLink}

                </s.anchor>

            </s.div>

        </>
    )

}