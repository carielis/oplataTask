import List from "../Components/Operators/ListenerOperator";
import Header from "../Components/Header/Header";
import {useState} from "react";
import styled from "styled-components";

const Container = styled.div`
                margin-left: auto;
                margin-right: auto;
                display: grid;
                grid-template-columns: 20em 20em 20em 20em;
                grid-template-rows: 1fr 1fr 1fr;
                gap: 0px 0px;   
`;

const Page = styled.div`
               background-size: cover;
               padding-top: 100px;
               padding-left: 0px;          
`

const Style = {
    Page : Page,
    Container : Container
}



let Mains = () => {
    const [operators] = useState([
        {id: 1, nameTag: "МТС",      urlTag: "MTS "    },
        {id: 2, nameTag: "Билайн",   urlTag: "Beeline" },
        {id: 3, nameTag: "Мегафон",  urlTag: "Megafon" },

    ]);
  return (
      <>
        <Header title="Main page">
            <Style.Page>
                <Style.Container>
                    <List operators={operators} />

                </Style.Container>
            </Style.Page>
        </Header>
      </>
  )
}

export default Mains