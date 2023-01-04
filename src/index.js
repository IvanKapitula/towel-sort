
// You should implement your task here.

module.exports = function towelSort (matrix) {
        let result = '';
        for(let i = 0; i < matrix.length; i++){
            result = (result) + matrix[i].join('');
        }
        return result.split('').sort(function(a,b) {
            return a - b;
        }
        )
}
