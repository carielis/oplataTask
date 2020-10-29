import Head from "next/head";
import Link from "next/link";

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
            <div className="body">
                {children}
            </div>
            <style jsx global>{`
                .Head {
                   position: fixed;
                   top: 0;
                   left: 0;
                   width: 100%;
                   display: block;
                   color: #FFFFFF;
                   background-color: #333333;
                   padding: 10px;
                   font-size: 30px;
                }
                div {
                   font-family: 'Commissioner', sans-serif;
                   position: block;
                   
                }
                body {
                margin: 0;
                background-size: 100%;
                background-color: #F8F8FF ;
                }
                .link {
                    text-decoration: none;
                    color: #FFFFFF;
                }
                
            `}</style>
        </>

    )
}

export default Header;