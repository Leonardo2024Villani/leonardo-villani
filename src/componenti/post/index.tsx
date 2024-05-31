import React, { useState } from "react";
import { useContext } from "react";
import { Contesto, TContesto } from "../../context";

export default function Post() {

    const {jsonData, setJsonData} = useContext(Contesto) as TContesto;
    const [text, setText] = useState<string>('');

function salvaNota() {



    const nuovo = {
        id: 0,
        title: "Titolo",
        body: text,
        tags: [""],
        reactions: { 
            likes: 0,
            dislikes: 0 
        },
        views: 1, 
        userId: 1
      }

      jsonData?.push(nuovo)
      setJsonData([...jsonData!])
      

    }

        return (
            <div>
                <textarea name="testo" id="testo" onChange={(e) => {
                    setText(e.target.value)
                }}></textarea>
                <button onClick={salvaNota}>Salva nota</button>
            </div>
        )
}
