import {Overlay, Position} from "./style";
import Router from "next/router";
import React from "react";

let Success : React.FC = () => {
    return (
        <>
            <Overlay>
                <Position>
                    Операция прошла успешно, деньги будут начислены в течении часа!
                <div><button onClick={() => Router.replace('/')}>Принять</button></div>
                </Position>
            </Overlay>

        </>
    )
}

export default Success;