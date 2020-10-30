import Link from "next/link"
import {A, Select} from "./style";
import React from "react";

interface iOperators {
    id      : number,
    nameTag : string,
    urlTag  : string
}

const Listener: React.FC<{ operators: iOperators[] }> = ({operators}) => {
    return (
        <>
            {operators.map((p) =>
                <div key={p.id}  >
                    <Link href={`/paypal/${p.urlTag}`}>
                        <Select> <A>{p.nameTag}</A></Select>
                    </Link>
                </div>
            )}
        </>
    )
}

export default Listener;