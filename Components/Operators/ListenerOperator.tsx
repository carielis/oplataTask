import Link from "next/link"
import {A, Select} from "./style";

const Listener = ({operators}) => {
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