import InputMask from "react-input-mask";
import {useState} from "react";
import Loader from "../Loader/Loader";
import Success from "../FinalOperations/success";
import Failed from "../FinalOperations/failed";
import {Btn} from "./style";

let InputBox = () => {
    const [isLoad,setLoad] = useState(false)
    const [ApiStatus,SetApiStatus] = useState("closed")
    let closed = () => {
        SetApiStatus("closed")
    }
    let  handleSubmit  =  (event) => {
        event.preventDefault();
         const randomApi = Boolean(Math.round(Math.random()));
         setLoad(true);
         if (randomApi) {
             setTimeout(() => {
                 SetApiStatus("success")
                 setLoad(false);
             }, 3000)
         } else {
             setTimeout(() => {
                 SetApiStatus("failed")
                 setLoad(false);
             }, 3000)
         }
        }
   return(
       <>
           {isLoad && <Loader/> }
           {(ApiStatus === "success") && <Success /> }
           {(ApiStatus === "failed") && <Failed set={() => closed()}/>}
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
               </div>
               <Btn type="submit">Пополнить</Btn>
           </form>
           <style jsx global>{`
              input {
                color: white;
                display: block;
                width: 100%;
                padding: 0 10px;
                line-height: 40px;
                font-family: 'Roboto', sans-serif;
                background: none;
                border-width: 0;
                border-bottom: 2px solid #4a90e2;
                transition: all 0.2s ease;
              }
              input:focus {
                outline: 0;
                border-color: #F77A52;
              }
           `}</style>
       </>
   )
}

export default InputBox;