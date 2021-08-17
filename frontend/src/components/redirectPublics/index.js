import * as s from "./styles"

export default function Redirect( props ) {

    return (

        <>
            <s.text>

                {props.contentText}

                <s.anchor href={props.link}>

                    {props.contentLink}

                </s.anchor>

            </s.text>
        </>
    )

}