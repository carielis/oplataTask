import styled from "styled-components";

export const Select = styled.div`
                    margin-top: 20px;
                    width: 100px;
                    height: 50px;
                    padding-top: 10px;
                    text-align: center;
                    border-radius: 10px;
                    background-color: #4d4d4d;
                    margin-left: 30%;
                    padding: 10px;
                    padding-top: 50px;
                    box-shadow: 0px 0px 23px -8px #000000;
                    margin-left: 0 auto;
                    @media screen and (max-device-width: 768px) {
                    width: 200px;
                    height: 50px;
                    margin-left: auto;
                    margin-right: auto;
                    } 

                 :hover {
                    transition: 1s;
                    width: 110px;
                    height: 60px;
                    margin-left: 29%;
                    padding-top: 60px;
                    cursor: pointer;                  
                 }

`

export const A = styled.a`
                   color: #FFFF;
                   text-decoration: none;
`