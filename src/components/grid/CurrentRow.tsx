import { Cell } from './Cell'
import { solution, unicodeSplit } from '../../lib/words'
import { ContextRow } from './ContextRow'

type Props = {
  guess: string
  className: string
  contextClues: string[]
}

export const CurrentRow = (props: Props) => {
  const splitGuess = unicodeSplit(props.guess)
  const emptyCells = Array.from(Array(solution.length - splitGuess.length))
  const classes = `flex justify-center mb-1 w-full ${props.className}`

  return (
    <div className="flex w-full justify-between">
      <div className="w-full">
        <ContextRow solution={props.contextClues[0]}/>
      </div>
      <div className={classes}>
        {splitGuess.map((letter, i) => (
          <Cell key={i} value={letter} />
        ))}
        {emptyCells.map((_, i) => (
          <Cell key={i} />
        ))}
      </div>
      <div className="w-full">
        <ContextRow solution={props.contextClues[0]}/>
      </div>
    </div>
  )
}
