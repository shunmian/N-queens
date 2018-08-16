
function* range (max) {
  for (let i = 0; i < max; i++ ) yield i;
}

class NQueens {
  constructor(N) {
    this.N = N
    this.solutions = []
  }

  getSolutions(){
    this.dfs()
    return this.solutions
  }

  isConflict(solution, i){
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

  dfs(solution = []) {
    if(solution.length === this.N) {
      this.solutions.push(solution)
      return
    }
    for (let i of range(this.N)) {
      if (this.isConflict(solution, i)){
        continue
      }else {
        this.dfs([...solution, i])
      }
    }
  }

  toString(solution){
    let s = ''
    for (let j of range(this.N)){
      for (let i of range(this.N)){
        solution[j] === i ? s = s + ' Q' : s = s + ' *'
      }
      s = s + '\n'
    }
    return s
  }
}

const nQueens = new NQueens(8)
for (solution of nQueens.getSolutions()) {
  console.log(nQueens.toString(solution))
}