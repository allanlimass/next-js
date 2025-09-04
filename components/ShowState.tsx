interface ShowStateProps {
    amount: number,
    sum: any,
    sub: any
}

export default function ShowState(props: ShowStateProps) {
    return (
        <div className="flex flex-col items-center p-4 rounded-lg bg-gray-200 w-100 m-auto mt-4">
            <div className="text-6xl font-bold p-4 rounded-lg bg-white w-90 text-center">
                {props.amount}
            </div>
            <div className="flex gap-2 mt-2">
                <button onClick={props.sum}>+ Adicionar</button>
                <button onClick={props.sub}>- Subtrair</button>
            </div>
        </div>
    )
}