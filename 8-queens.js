const GRID_NO = 4

const isConflict = (solution, i) => {
  const j = solution.length
  for(let idx = 0; idx < j; idx++){
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
  for (let i = 0; i < GRID_NO; i++){  //if not conflict, call nQueensSolution  res.push(i)
    if (isConflict(solution, i)){
      continue
    }else {
      nQueensSolution([...solution,i])
    }
    //else do nothing
  }
}

nQueensSolution([], 0)
console.log(solutions)