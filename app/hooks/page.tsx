'use client'

import Header from "@/components/Header"
import { useState } from "react"
import ShowState from "@/components/ShowState"

export default function UseState() {
    const [ count, setCount ] = useState<number>(0)
    return (
        <div>
            <Header/>
            <h1>useState</h1>
            <ShowState amount={count} fAmount={setCount}></ShowState>
        </div>
    )
}