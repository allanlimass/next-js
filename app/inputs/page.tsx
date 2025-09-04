'use client'

import Header from "@/components/Header"
import { useState } from "react"

const courses = [
    "HTML",
    "React",
    "C++",
    "JavaScript",
    "Arduino",
    "CSS",
    "Next.js",
    "Node.js"
]

const getCourses = courses.map(course => {
    return <option key={course} value={course}>{course}</option>
})

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
                        {getCourses}
                    </select>
                </div>
            </div>
        </div>
    )
}