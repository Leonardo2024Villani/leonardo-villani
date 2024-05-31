import React, { useContext } from "react";
import { ClassAttributes } from "react";
import { Contesto, TContesto } from "../../context";
import { Post } from "../../types";

export default function Test() {

    const {jsonData, setJsonData} = useContext(Contesto) as TContesto;

    return (
        <span id="body">
            {jsonData?.posts.map((elemento: Post) => (
                <div>
                <p>Post id: {elemento.id}</p>
                <p>{elemento.body}</p>
                </div>
            ))}
        </span>
    )

}
