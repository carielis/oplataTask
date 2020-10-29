import { Overlay} from "./style";
import Router from "next/router";

let Success = () => {
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