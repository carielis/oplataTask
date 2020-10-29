import {useRouter} from "next/router";
import Header from "../../Components/Header/Header";
import InputBox from "../../Components/input/Inputbox";
import styled from "styled-components";

const Pages = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 20em;
    text-align:center;
    padding: 50px;
    padding-bottom: 30px;
    color: white;
    background-color: #333333;
    margin-top: 260px;
    border-radius: 30px;
`

let inputPage = () => {
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