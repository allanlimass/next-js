'use client'

import Header from "@/components/Header"
import { useState, useEffect } from "react"

export default function UseEffect() {
    const [cont, setCont] = useState(0)

    useEffect(() => {
        alert('UseEffect foi ativado!')
    })

    function add() {
        let c = cont
        c++
        setCont(c)
    }

    return (
        <div>
            <Header />
            <h1>UseEffect</h1>
            <div>
                <p>{`Valor de cont: ${cont}`}</p>
                <button onClick={add}>Adicionar +1</button>
            </div>
        </div>
    )
}