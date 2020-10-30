import InputMask from "react-input-mask";
import React from "react"
import {useState} from "react";
import Loader from "../Loader/Loader";
import Success from "../FinalOperations/success";
import Failed from "../FinalOperations/failed";


const InputBox : React.FC = () => {
    enum status  {success = "success", failed  = "failed" , close   = "close"}
    const [isLoad,setLoad]  = useState<boolean>(false)
    const [Api, setApi] = useState<string>(status.close)
    const [disabled, setDisabled] = useState<boolean>(false)
    const  handleSubmit  =  (event: Event) => {
         event.preventDefault();
         const randomApi = Boolean(Math.round(Math.random()));
         setDisabled(true)
         setLoad(true);
         if (randomApi) {
             setTimeout(() => {
                 setDisabled(false)
                 setApi(status.success)
                 setLoad(false);
             }, 3000)
         } else {
             setTimeout(() => {
                 setDisabled(false)
                 setApi(status.failed)
                 setLoad(false);
             }, 3000)
         }
        }
   return(
       <>
           {isLoad && <Loader/> }
           {(Api === status.success) && <Success /> }
           {(Api === status.failed ) && <Failed set={() => setApi(status.close)}/>}
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
               <button type="submit" disabled={disabled} >Пополнить</button>
           </form>
       </>
   )
}

export default InputBox;