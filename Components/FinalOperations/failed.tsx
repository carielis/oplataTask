import Router from "next/router";
import {Overlay} from "./style"
let Failed = ({set}) => {
    return (
        <>
         <Overlay>
          <div>
              Во время операции произошел сбой, повторите попытку!
              <div><button onClick={() => Router.replace('/')}>Принять</button><button onClick={() => set()} >Закрыть</button></div>
          </div>
         </Overlay>
        </>
    )
}

export default Failed;