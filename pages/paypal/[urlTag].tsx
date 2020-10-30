import {useRouter} from "next/router";
import Header from "../../Components/Header/Header";
import InputBox from "../../Components/input/Inputbox";
import {Pages} from "../../style/GlobalStyle";
import React from "react";



const inputPage: React.FC = () => {
    const router = useRouter();
        return (
        <>
            <Header title={`Пополнение ${router.query.urlTag}`}>
                <Pages>
                    <div><h3>Пополнение счета {router.query.urlTag}</h3></div>
                    <InputBox />
                </Pages>
            </Header>

        </>
    )
}

export default inputPage;