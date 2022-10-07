//Вывести правильную и обратную диагональ(уже не помню так ли они называются) квадратной матрицы(двумерный массив)
//Start time 17:31
//End time 17:48

const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

let firstD = []
let secondD = []

arr.forEach((item, index, array) => {
	firstD.push(array[index][index]);
	secondD.push(array[index][(array.length - 1) - index])
});

console.log(firstD);
console.log(secondD);
