interface CardProps {
    product: string,
    amount: number,
    discount: number,
    function: any,
    children: any
}

export default function Card(props: CardProps) {
    return (
        <div className={`m-4 p-4 border ${props.discount > 0 ? 'border-red-500': 'border-blue-500'} rounded-lg p-8`}>
            <div>Produto: {props.product}</div>
            <div>Valor: R$ {props.amount}</div>
            {props.discount > 0 && (
                <div>
                    <div>Desconto: R$ {props.discount}</div>
                    <div>Líquido: R$ {props.amount - props.discount}</div>
                </div>
            )}
            <div>{props.children}</div>
        </div>
    )
}