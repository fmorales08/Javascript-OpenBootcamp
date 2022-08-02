const factorial = (n) => {
	let total = 1;
	if (n === 0) {
		return 1;
	}
	for (i = 1; i <= n; i++) {
		total = total * i;
	}
	console.log(total);
	return total;
};

console.log(factorial(10));
