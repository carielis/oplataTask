import Router from "next/router";
import {Btn, Overlay} from "./style";
let failed = ({set}) => {
    return (
        <>
         <Overlay>
          <div>
              Во время операции произошел сбой, повторите попытку!
              <div><Btn onClick={() => Router.replace('/')}>Принять</Btn><Btn onClick={() => set()} >Закрыть</Btn></div>
          </div>
         </Overlay>
        </>
    )
}

export default failed;