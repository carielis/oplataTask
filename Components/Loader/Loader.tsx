import {Overlay,Position,Roller,Div} from "./style"
import React from "react";

const Loader : React.FC = () => {
    return (
        <>
            <Overlay>
                <Position>
                    <Roller>
                        <Div></Div>
                        <Div></Div>
                        <Div></Div>
                        <Div></Div>
                        <Div></Div>
                        <Div></Div>
                        <Div></Div>
                        <Div></Div>
                    </Roller>
                </Position>
            </Overlay>
        </>

    )
}

export default Loader;