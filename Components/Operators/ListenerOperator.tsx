import Link from "next/link"
import {A, Select} from "./style";
import React from "react";

const Listener: React.FC<{ operators: any }> = ({operators}) => {
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