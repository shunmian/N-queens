const N = 4

function* range (max) {
    for (let i = 0; i < max; i++ ) yield i;
}

const isConflict = (solution, i) => {
  for(let idx of range(solution.length)){
    const itemI = solution[idx]
    const itemJ = idx
    const candidateI = i
    const candidateJ = solution.length
    if (candidateI === itemI || // horizontal conflict
        candidateJ === itemJ || // vertical conflict
        Math.abs(candidateI - itemI) === Math.abs(candidateJ - itemJ) // diagonal conflict
    ) {
      return true
    }
  }
  return false
}


solutions = []
const dfs = (solution = []) => {
  if(solution.length === N) {
    solutions.push(solution)
    return
  }
  for (let i of range(N)) {
    if (isConflict(solution, i)){
      continue
    }else {
      dfs([...solution, i])
    }
  }
}

const toString = (solution) => {
  let s = ''
  for (let j of range(N)){
    for (let i of range(N)){
      solution[j] === i ? s = s + ' Q' : s = s + ' *'
    }
    s = s + '\n'
  }
  return s
}

dfs([], 0)
for (let solution of solutions){
  console.log(toString(solution))
}