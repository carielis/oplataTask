import styled from "styled-components";

export const Select = styled.div`
                    margin-top: 20px;
                    width: 110px;
                    height: 50px;
                    padding-top: 10px;
                    text-align: center;
                    border-radius: 10px;
                    background-color: #4d4d4d;
                    margin-left: 30%;
                    padding: 10px;
                    padding-top: 50px;
                    
                    margin-left: 0 auto;
                    @media screen and (max-device-width: 768px) {
                        width: 200px;
                        height: 50px;
                        margin: 0 auto;
                        margin-top: 30px;
                    } 

                 :hover {
                 box-shadow: 0px 0px 23px -3px #000000;
                    transition: 1s;
                    width: 110px;
                    height: 60px;
                    margin-left: 29%;
                    padding-top: 60px;
                    cursor: pointer; 
                    @media screen and (max-device-width: 768px) {
                        margin: 0 auto;
                        width: 210px;
                        margin-top: 20px;
                    }                 
                 }

`

export const A = styled.a`
                   color: #FFFF;
                   text-decoration: none;
`