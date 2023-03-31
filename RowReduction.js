// Row reduce a matrix without putting it into echelon form
// Return value is the resulting matrix
function rowReduction(matrix) {
    let row, column;
    let currentPivotTo = 0

    let numRows = matrix.length
    let numColumns = matrix[0].length

    // Loop through each column checking for pivots
    for (column = 0; column < numColumns; column++) {
        // Find pivot row for this column
        let pivotRow = -1;
        for (row = currentPivotTo; row < numRows; row++) {
            if (matrix[row][column] != 0) {
                pivotRow = row;
                break;
            }
        }

        // If no pivot row, move to next column
        if (pivotRow == -1) {
            continue;
        }

        // Move pivot row to top of matrix
        if (pivotRow != currentPivotTo) {
            let tempArray = matrix[pivotRow]
            matrix[pivotRow] = matrix[currentPivotTo]
            matrix[currentPivotTo] = tempArray
            pivotRow = currentPivotTo
        }

        // Calculate the current pivot value
        const pivot = matrix[pivotRow][column];

        // Update each row based on pivot row
        for (let i = pivotRow + 1; i < numRows; i++) {
            const factor = matrix[i][column] / pivot;
            for (let j = column; j < numColumns; j++) {
                matrix[i][j] -= factor * matrix[pivotRow][j];
            }
        }

        // Increment row to be pivoted to
        currentPivotTo += 1
        if (currentPivotTo == numRows) {
            break;
        }
    }

    return matrix;
}

// Reduce a matrix to reduced row echelon form
// Return value is the resulting matrix
function rowReductionEchelon(matrix) {
    let numRows = matrix.length
    let numColumns = matrix[0].length

    let row, column;
    let currentPivotTo = 0

    // Loop through each column checking for pivots
    for (column = 0; column < numColumns; column++) {
        // Find pivot row for this column
        let pivotRow = -1;
        for (row = currentPivotTo; row < numRows; row++) {
            if (matrix[row][column] != 0) {
                pivotRow = row;
                break;
            }
        }

        // If no pivot row, move to next column
        if (pivotRow == -1) {
            continue;
        }

        // Move pivot row to top of matrix
        if (pivotRow != currentPivotTo) {
            let tempArray = matrix[pivotRow]
            matrix[pivotRow] = matrix[currentPivotTo]
            matrix[currentPivotTo] = tempArray
            pivotRow = currentPivotTo
        }

        // Calculate the current pivot value
        const pivot = matrix[pivotRow][column];

        // Reduce the pivot row based on the pivot
        for (let j = column; j < numColumns; j++) {
            matrix[pivotRow][j] = matrix[pivotRow][j] / pivot;
        }

        // Update each row based on pivot row
        for (let i = 0; i < numRows; i++) {
            if (i == pivotRow) {
                continue;
            }

            let factor = matrix[i][column];


            for (let j = column; j < numColumns; j++) {
                matrix[i][j] -= factor * matrix[pivotRow][j];
            }
        }

        // Increment row to be pivoted to
        currentPivotTo += 1
        if (currentPivotTo == numRows) {
            break;
        }
    }

    return matrix;
}
