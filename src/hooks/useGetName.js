import { useEffect, useState } from "react";

export default function useGetName() {
    const [name, setName] = useState("")

    useEffect(() => {
        let localName = localStorage.getItem("name");
        if (localName) {
            setName(localName)
        }
    }, [])

    return { name, setName }
}