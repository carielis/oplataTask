import {Btn, Overlay} from "./style";
import Router from "next/router";

let success = () => {
    return (
        <>
            <Overlay>
                <div>
                    Операция прошла успешно, деньги будут начислены в течении часа!
                </div>
                <div><Btn onClick={() => Router.replace('/')}>Принять</Btn></div>
            </Overlay>

        </>
    )
}

export default success;