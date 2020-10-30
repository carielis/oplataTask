import Router from "next/router";
import {Overlay, Position} from "./style"
import React from "react";

let Failed : React.FC<{seter : any}> = ({seter}) => {
    return (
        <>
         <Overlay>
          <Position>
              Во время операции произошел сбой, повторите попытку!
              <div><button onClick={() => Router.replace('/')}>Принять</button><button onClick={() => seter()} >Закрыть</button></div>
          </Position>
         </Overlay>
        </>
    )
}

export default Failed;