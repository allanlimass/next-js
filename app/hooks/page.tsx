'use client'

import Header from "@/components/Header"
import { useState } from "react"

export default function UseState() {
    const [ count, setCount ] = useState<number>(0)

    function counter() {
        let c = count
        c++
        setCount(c)
    }

    return (
        <div>
            <Header/>
            <h1>useState</h1>
            <div>{count}</div>
            <button onClick={counter}>Adicionar</button>
        </div>
    )
}