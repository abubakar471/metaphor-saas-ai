"use client"

import { useEffect } from "react"
import { Crisp } from "crisp-sdk-web"

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("20870ffb-3102-455c-a869-b75441068cb5")
    }, []);

    return null
}

export default CrispChat