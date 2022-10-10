//Найти пары Числа Фибоначчи которые удовлетворяют условию
//start time 18:22
//end time 18:38

const fibonacciCombination = (target) => {
	let currenItem = 1;
	while (true) {
		const item = fibonacci(currenItem) * fibonacci(currenItem + 1);
		if (item == target) {
			return [fibonacci(currenItem), fibonacci(currenItem + 1), true];
		}
		if (item > target) {
			return [fibonacci(currenItem), fibonacci(currenItem + 1), false];
		}
		currenItem = currenItem + 1;
	}
}

const fibonacci = (value) => {
	if (value <= 1) {
		return value;
	}
	else {
		return fibonacci(value - 1) + fibonacci(value - 2);
	}
}

console.log(fibonacciCombination(714));