const GRID_NO = 4

function* range (max) {
    for (let i = 0; i < max; i++ ) yield i;
}

const isConflict = (solution, i) => {
  for(let idx of range(solution.length)){
    const itemI = solution[idx]
    const itemJ = idx
    const candidateI = i
    const candidateJ = solution.length
    if (candidateI === itemI || candidateJ === itemJ || Math.abs(candidateI - itemI) === Math.abs(candidateJ - itemJ)) {
      return true
    }
  }
  return false
}

solutions = []
const nQueensSolution = (solution= []) => {
  if(solution.length === GRID_NO) {
    solutions.push(solution)
    return
  }
  for (let i of range(GRID_NO)) {
    if (isConflict(solution, i)){
      continue
    }else {
      nQueensSolution([...solution, i])
    }
  }
}

const toString = (solution) => {
  let s = ''
  for (let j of range(GRID_NO)){
    for (let i of range(GRID_NO)){
      solution[j] === i ? s = s + ' Q' : s = s + ' *'
    }
    s = s + '\n'
  }
  return s
}

nQueensSolution([], 0)
for (let idx in solutions){
  console.log(toString(solutions[idx]))
}