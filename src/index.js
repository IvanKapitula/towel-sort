
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined){
        return [];
    }else {
        let result = [];
        let matrixMod = matrix.map( function(item,index){
            if ((index + 1) % 2 === 0){
                return item.reverse();
            }else{
                return item;
            }
        })
        for(let key of matrixMod){
            result = result.concat(key);
        }
        return result;
    }
}
