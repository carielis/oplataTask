import { Overlay} from "./style";
import Router from "next/router";
import React from "react";

let Success : React.FC = () => {
    return (
        <>
            <Overlay>
                <div>
                    Операция прошла успешно, деньги будут начислены в течении часа!
                </div>
                <div><button onClick={() => Router.replace('/')}>Принять</button></div>
            </Overlay>

        </>
    )
}

export default Success;