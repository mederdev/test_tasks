//Найти пары Числа Фибоначчи которые удовлетворяют условию
//start time 18:22
//end time 18:38



const fibonacciCombination = (target) => {
	let paras = [0, 1];
	while ((paras[0] * paras[1]) < target) {
		paras = [paras[1], paras[0] + paras[1]];
	}
	return [paras[0], paras[1], paras[0] * paras[1] == target];
}

console.log(fibonacciCombination(800));