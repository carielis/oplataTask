import List from "../Components/Operators/ListenerOperator";
import Header from "../Components/Header/Header";
import React, {useState} from "react";
import {Page, Container} from "../style/GlobalStyle";

const Mains: React.FC = () => {
    type operator  = { id: number, nameTag: string, urlTag: string};
    const [operators] = useState<operator[]>([
        {id: 1, nameTag: "МТС",      urlTag: "MTS"     },
        {id: 2, nameTag: "Билайн",   urlTag: "Beeline" },
        {id: 3, nameTag: "Мегафон",  urlTag: "Megafon" },

    ]);

  return (
      <>
        <Header title="Main page">
            <Page>
                <Container>
                    <List operators={operators } />
                </Container>
            </Page>
        </Header>
      </>
  )
}

export default Mains