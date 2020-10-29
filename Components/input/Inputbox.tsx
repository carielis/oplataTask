import InputMask from "react-input-mask";
import React from "react"
import {useState} from "react";
import Loader from "../Loader/Loader";
import Success from "../FinalOperations/success";
import Failed from "../FinalOperations/failed";
import {GlobalStyles} from "./../../style/GlobalStyle";
import {string} from "prop-types";

const InputBox = () => {

    enum status  {success = "success", failed  = "failed" , close   = "close"}
    const [isLoad,setLoad]  = useState<boolean>(false)
    const [Api, SetApi] = useState<string>(status.close)

    const  handleSubmit  =  (event) => {
         event.preventDefault();
         const randomApi = Boolean(Math.round(Math.random()));
         setLoad(true);
         if (randomApi) {
             setTimeout(() => {
                 SetApi(status.success)
                 setLoad(false);
             }, 3000)
         } else {
             setTimeout(() => {
                 SetApi(status.failed)
                 setLoad(false);
             }, 3000)
         }
        }
   return(
       <>
           {isLoad && <Loader/> }
           {(Api === status.success) && <Success /> }
           {(Api === status.failed ) && <Failed set={() => SetApi(status.close)}/>}
           <GlobalStyles />
           <form  onSubmit={() => {handleSubmit(event); }}>
               <div className="block">
                   <InputMask
                       placeholder="Введите номер"
                       pattern="^\+7 \(\d{3}\) \d{3} \d{2} \d{2}$"
                       title="Поле является обязательным"
                       mask="+7 (999) 999 99 99"
                       required
                   />
               </div>
               <div>
                   <InputMask
                           placeholder="Введите сумму пополнения"
                           pattern="((^[1-9][0-9]?[0-9]?$)|(^1000$))"
                           title="От 1 до 1000 рублей"
                           mask="9999"
                           maskChar=""
                           required
                   />
                    <style jsx global>{`
                    
             
                    `}</style>
               </div>
               {(Api === status.close) ? <button type="submit" >Пополнить</button> : <button type="submit" disabled>Пополнить</button> }
           </form>
       </>
   )
}

export default InputBox;