import styled from "styled-components";

export const Overlay = styled.div`
                    color: #CCCCCC;
                    font-size: 30px;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    right: 0;
                    background-color: #000000a1;
                    position: fixed;
                    align-items: center;
                    justify-content: center;
                    z-index: 10;
                    transition: opacity0 .2s ease-in;
        
`
export const Position = styled.div`
             padding-top: 14em;
             @media screen and ( max-device-height: 634px) {
              padding-top: 10em;
             }
             @media screen and ( max-device-height: 515px) {
              padding-top: 5em;
             }
`

