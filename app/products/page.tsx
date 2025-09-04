'use client'

import Card from "@/components/Card";
import Header from "@/components/Header";
import { useRouter, useSearchParams } from "next/navigation";

function calcDescount(amount: number, discount: number) {
  return amount - discount;
}

const products = [
  { id: 1, product: "Mouse", amount: 49.9, discount: 9.9 },
  { id: 2, product: "Teclado", amount: 69.9, discount: 9.9 },
  { id: 3, product: "Monitor", amount: 459.9, discount: 0.0 }
]

export default function Products() {
    const router = useRouter()
    const params = useSearchParams()

    const name = params.get("name");
    const age = params.get("age");
    
    return (
        <div>
            <Header />
            <h1>Produtos</h1>
            <p>{name}</p>
            <div className="flex justify-center">
                <>
                {products.map(product => (
                    <div key={product.id}>
                        <Card product={product.product} amount={product.amount} discount={product.discount} function={calcDescount}>
                            Teste
                        </Card>
                    </div>
                ))}
                </>
            </div>
        </div>
    )
}