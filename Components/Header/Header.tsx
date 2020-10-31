import Head from "next/head";
import Link from "next/link";
import {GlobalStyles} from "../../style/GlobalStyle";
import React from "react";

const Header = ({title, children}) => {
    return (
        <>
            <Head>
                <title> {title} | Oplata</title>
                <link href="https://fonts.googleapis.com/css2?family=Commissioner&display=swap" rel="stylesheet"/>
            </Head>
            <div className="Head">
                <Link href="/"><a className="link">Платежная система</a></Link>
            </div>
            <div>
                <GlobalStyles />
                {children}
            </div>
        </>

    )
}

export default Header;