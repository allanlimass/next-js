'use client'

import Header from "@/components/Header"
import { useState } from "react"
import ShowState from "@/components/ShowState"

export default function UseState() {
    const [ count, setCount ] = useState<number>(0)

    function sum() {
        let c = count
        c++
        setCount(c)
    }

    function sub() {
        let c = count
        c--
        setCount(c)
    }

    return (
        <div>
            <Header/>
            <h1>useState</h1>
            <ShowState amount={count}></ShowState>
            <div className="flex gap-2 mt-2">
                <button onClick={sum}>+ Adicionar</button>
                <button onClick={sub}>- Subtrair</button>
            </div>
        </div>
    )
}