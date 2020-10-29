import List from "../Components/Operators/ListenerOperator";
import Header from "../Components/Header/Header";
import {useState} from "react";
import styled from "styled-components";

const Mains = () => {
    type operator = { id: number; nameTag: string; urlTag: string};
    const [operators]= useState<operator[]>([
        {id: 1, nameTag: "МТС",      urlTag: "MTS"     },
        {id: 2, nameTag: "Билайн",   urlTag: "Beeline" },
        {id: 3, nameTag: "Мегафон",  urlTag: "Megafon" },

    ]);

  return (
      <>
        <Header title="Main page">
            <Page>
                <Container>
                    <List operators={operators} />
                </Container>
            </Page>
        </Header>
      </>
  )
}
const Container = styled.div`
                margin-left: auto;
                margin-right: auto;
                display: grid;
                grid-template-columns: 20em 20em 20em 20em;
                grid-template-rows: 1fr 1fr 1fr;
                gap: 0px 0px; 
                @media screen and (max-device-width: 768px) {
                transform: translate(0, -50%);
                margin-top: 250px;
                grid-template-columns: 20em;
                }                
`;

const Page = styled.div`
               background-size: cover;
               padding-top: 100px;
               padding-left: 0px;          
`

export default Mains