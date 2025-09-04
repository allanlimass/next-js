'use client'

import Header from "@/components/Header"
import { useState } from "react"

export default function Inputs() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [course, setCourse] = useState<string>('')

    return (
        <div>
            <Header/>
            <h1>Inputs</h1>
            <div className="flex flex-col items-center">
                <div className="flex flex-col gap-2 mt-2 w-1/2">
                    <label htmlFor="">
                        Nome:
                    </label>
                    <input 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Digite seu nome aqui..." 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2 w-1/2">
                    <label htmlFor="">
                        E-mail:
                    </label>
                    <input 
                        type="text" 
                        name="email" 
                        id="email"
                        placeholder="Digite seu e-mail aqui..." 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2 mt-2 w-1/2">
                    <label htmlFor="">Curso</label>
                    <select 
                        name="course" 
                        id="course" 
                        onChange={(e) => setCourse(e.target.value)} 
                        value={course}
                    >
                        <option value="HTML">HTML</option>
                        <option value="React">React</option>
                        <option value="C++">C++</option>
                        <option value="JavaScript">JavaScript</option>
                        <option value="Arduino">Arduino</option>
                        <option value="CSS">CSS</option>
                        <option value="Next.js">Next.js</option>
                        <option value="Node.js">Node.js</option>
                    </select>
                </div>
            </div>
        </div>
    )
}