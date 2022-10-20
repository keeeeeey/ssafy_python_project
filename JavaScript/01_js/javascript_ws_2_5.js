let ch
let answer = 0

function queen(row, n) {
    if (row === n) {
        answer += 1
        return
    } else {
        for (let col = 0; col < n; col++) {
            ch[row] = col
            if (is_ok(row)) {
                queen(row + 1, n)
            }
        }
    }
}

function is_ok(nth_row) {
    for (let i = 0; i < nth_row; i++) {
        if (ch[nth_row] === ch[i] || nth_row - i === Math.abs(ch[nth_row] - ch[i])) {
            return false
        }
    }
    return true
}

function findQueens(n) {
	// 이곳에 작성합니다.
    ch = new Array(n).fill(0)
    queen(0, n)
	return answer
}

console.log(findQueens(4)) // 2