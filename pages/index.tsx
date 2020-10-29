import List from "../Components/Operators/ListenerOperator";
import Header from "../Components/Header/Header";
import {useState} from "react";
import style from "./styles"

let Mains = () => {
    const [operators] = useState([
        {id: 1, nameTag: "МТС",      urlTag: "MTS "    },
        {id: 2, nameTag: "Билайн",   urlTag: "Beeline" },
        {id: 3, nameTag: "Мегафон",  urlTag: "Megafon" },

    ]);
  return (
      <>
        <Header title="Main page">
            <style.Page>
                <style.Container>
                    <List operators={operators} />

                </style.Container>
            </style.Page>
        </Header>
      </>
  )
}

export default Mains