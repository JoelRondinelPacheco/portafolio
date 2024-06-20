import { useEffect, useState } from "react";

export default function useHandleName() {
    const [name, setName] = useState("")
    const [message, setMessage] = useState("");

    function saveName(name) {
        localStorage.setItem("name", name);
        setName(name)
        setMessage(`Nice to meet you ${name}!`)
    }

    function handleResetName () {
        setName("");
        localStorage.removeItem("name")
    }

    useEffect(() => {
        let localName = localStorage.getItem("name");
        if (localName) {
            setName(localName)
            setMessage(`Hello again ${localName}!`)
        }
    }, [])

    return { name, saveName, message , handleResetName}
}