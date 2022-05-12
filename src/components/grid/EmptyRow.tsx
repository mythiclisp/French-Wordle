import { solution } from '../../lib/words'
import { Cell } from './Cell'

interface Props {
  solution: string
  contextClues: string[]
  index: number
  guesses: number
}

export const EmptyRow = (props: Props) => {

  const emptyCells = Array.from(Array(solution.length))

  return (
    <div className={"flex w-full justify-between"}>
      <div className="flex justify-center mb-1 w-full">
        {emptyCells.map((_, i) => (
          <Cell key={i} />
        ))}
      </div>
    </div>
  )
}
