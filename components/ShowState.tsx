interface ShowStateProps {
    amount: number,
    fAmount: any
}

export default function ShowState(props: ShowStateProps) {
    function operator(op: number) {
        let c = props.amount
        c += op
        props.fAmount(c)
    }

    return (
        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-200 w-100 m-auto mt-4">
            <div className="text-6xl font-bold p-4 rounded-lg bg-white w-90 text-center">
                {props.amount}
            </div>
            <div className="flex gap-2 mt-2">
                <button onClick={() => operator(1)}>+ Adicionar</button>
                <button onClick={() => operator(-1)}>- Subtrair</button>
            </div>
        </div>
    )
}