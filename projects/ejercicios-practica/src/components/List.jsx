import { useState } from "react";

export default function List({ data }) {

    const [index, setIndex] = useState(1);


    return (
        <ul className="list-group">
            {data.map((element, i) =>
                <li
                    onClick={() => setIndex(i)}
                    key={i}
                    className={`list-group-item ${index == i ? "active" : ""}`}>
                    {element}
                </li>
            )}

           
        </ul>


    )
}

