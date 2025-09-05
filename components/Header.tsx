import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex gap-4 p-4 bg-red-500 mb-4">
            <Link href={"/"}>Home</Link>
            <Link href={{ 
                pathname: "/products",
                query: {
                    name: "Emanuel",
                    age: 30
                } 
            }}>Produtos</Link>
            <Link href={"/orders"}>Ordens</Link>
            <Link href={"/hooks"}>Hooks</Link>
            <Link href={"/inputs"}>Inputs</Link>
            <Link href={"/useeffect"}>UseEffect</Link>
        </nav>
    )
}