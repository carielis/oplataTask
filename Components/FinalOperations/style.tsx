import styled from "styled-components";


export const Btn = styled.button`
                border: 0;
                text-decoration: none;
                outline: none;
                display: inline-block;
                width: 140px;
                height: 45px;
                line-height: 45px;
                border-radius: 45px;
                margin: 30px 20px;
                font-family: 'Montserrat', sans-serif;
                font-size: 11px;
                text-transform: uppercase;
                text-align: center;
                letter-spacing: 3px;
                font-weight: 600;
                color: #524f4e;
                background: white;
                box-shadow: 0 8px 15px rgba(0,0,0,.1);
                transition: .3s;
              :hover {
                background: #2EE59D;
                box-shadow: 0 15px 20px rgba(46,229,157,.4);
                color: white;
                transform: translateY(-7px);
              }
`

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
                    padding-top: 14em;
                
`

