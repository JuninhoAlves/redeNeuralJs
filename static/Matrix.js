class Matrix {

    constructor(rows, cols){
        this._rows = rows
        this._cols = cols

        this._data = []

        for(let i = 0; i < rows; i++){
            let tempData = [];
            for(let j = 0; j < cols; j++){
                tempData.push(0)
            }
            this._data.push(tempData)
        }
    }

    randomize(){
        return this.map( (row, col) => Math.random() * 2 -1 )
    }

    map(func){

        this._data = this._data.map(
            (element, row) =>
                element.map( (value, col) => func(row, col, value) )
        );

        return this
    }

    static map(Matrix, func){
        console.log('teste')
    }
    
    static arrayToMatrix(array){
        let matrix = new Matrix(array.length, 1)
        return matrix.map( (row, col) => array[row] )
    }

    static add(matrixUm, matrixDois){

        let matrixResultado = new Matrix(matrixUm.rows, matrixDois.cols)

        matrixResultado.map( (row, col) =>  matrixUm.data[row][col] + matrixDois.data[row][col] )

        return matrixResultado
    }

    static multiply(matrixUm, matrixDois){
        let matrixResultado = new Matrix(matrixUm.rows, matrixDois.cols);

        matrixResultado.map( (row, col) => {
            let soma = 0
            for(let matrixUmCol = 0; matrixUmCol < matrixUm.cols; matrixUmCol++){
                let elementoUm = matrixUm.data[row][matrixUmCol]
                let elementoDois = matrixDois.data[matrixUmCol][col]
                soma+= elementoUm * elementoDois
            }
            return soma
        })

        return matrixResultado
    }

    get cols(){
        return this._cols
    }

    get rows(){
        return this._rows
    }

    get data(){
        return [].concat(this._data)
    }

    print(){
        console.table(this._data)
    }

}