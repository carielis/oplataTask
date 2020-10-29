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

export default Style