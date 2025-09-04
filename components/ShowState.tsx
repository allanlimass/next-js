interface ShowStateProps {
    amount: number
}

export default function ShowState(props: ShowStateProps) {
    return (
        <div>
            {props.amount}
        </div>
    )
}