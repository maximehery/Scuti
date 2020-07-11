class Matrix {
    constructor(list) {
        this.coefs = list;
        this.dimension = { m: this.coefs.length, n: this.coefs[0].length };
    }

    display(i, j) {
        if((typeof i !== "undefined") && (typeof j !== "undefined")) {
            return this.coefs[i - 1][j - 1];
        } else {
                return this.coefs;
            }
        }

    getDimension() {
        return ["lines: " + this.dimension.m, "columns: " + this.dimension.n];
    }

    multiplication(lambda) {
        let newMatrix = [];
        for(let m = 0; m < this.dimension.m; m++) {
            newMatrix.push([]);
            for(let n = 0; n < this.dimension.n; n++) {
                newMatrix[m].push(this.coefs[m][n] * lambda);
            }
        }
        newMatrix = new Matrix(newMatrix);
        return newMatrix.display();
    }

    multiplicationMatrices(matrix) {
        /*
        2   3             3  0             .6.      .-6.
        -1 10      x      0  -2            .-3.      -20
        */

        if(this.dimension.n === matrix.dimension.m) {
            const dimension = { m: this.dimension.m, n: matrix.dimension.n };
            const z = matrix.dimension.m;
            let newMatrix = [];
            let coefficient = 0;

            for(let m = 0; m < dimension.m; m++) {
                newMatrix.push([]);
                for(let n = 0; n < dimension.n; n++) {
                    coefficient = 0;
                    for(let i = 0; i < z; i++) {
                        coefficient = coefficient + this.coefs[m][i] * matrix.coefs[i][n]
                    }
                    newMatrix[m].push(coefficient);
                }
            }

            return newMatrix;
        } else {
            console.log("These two matrices can not be multiplied...");
        }
    }
}