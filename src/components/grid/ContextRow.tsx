import { Cell } from './Cell'

interface Props {
    solution: string
}

export const ContextRow = (props: Props) => {

    let emptyCells

    if (props.solution) {

        emptyCells = Array.from(Array(props.solution.length))
    }

    return (
        <>
        {props.solution && emptyCells ?
        <>
        <div className="flex justify-center mb-1">
        {emptyCells.map((_, i) => (
            <Cell key={i} value={props.solution.charAt(i)} />
        ))}
        </div>
        </>
        :
        null}
        </>
    )
}
