import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
         
              button {
                border: 0;
                text-decoration: none;
                outline: none;
                display: inline-block;
                width: 140px;
                height: 45px;
                line-height: 35px;
                border-radius: 45px;
                margin-left: 10px;
                margin-top: 20px;
                font-size: 11px;
                text-transform: uppercase;
                text-align: center;
                letter-spacing: 3px;
                font-weight: 600;
                color: #524f4e;
                background: white;
                box-shadow: 0 8px 15px rgba(0,0,0,.1);
                transition: .3s;
                @media screen and (max-device-width: 768px) {
                    font-size: 15px;
                     width: 145px;
                     font-weight: 700;
                     padding-left: 10px;
                     margin-top: 20px;
                     letter-spacing: 2px;
                }
              }
              button:hover {
                background: #2EE59D;
                box-shadow: 0 15px 20px rgba(46,229,157,.4);
                color: white;
                transform: translateY(-7px);
              }
              input {
                        color: white;
                        display: block;
                        width: 100%;
                        padding: 0 10px;
                        line-height: 40px;
                        font-family: 'Roboto', sans-serif;
                        background: none;
                        border-width: 0;
                        border-bottom: 2px solid #4a90e2;
                        transition: all 0.2s ease;
                        @media screen and (max-device-width: 768px) {
                            font-size: 15px;
                            padding: 10px;
                            
                        }
                    }
                    input:focus {
                        outline: 0;
                        border-color: #F77A52;
                    }
                    h3 {
                        @media screen and (max-device-width: 768px) {
                            font-size: 19px;
                        }
                    }
`