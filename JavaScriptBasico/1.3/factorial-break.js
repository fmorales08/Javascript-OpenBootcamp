function factorial(num) {
	var result = 1;
	while (num) {
		if (num == 0 || num == 1) {
			break;
		} else {
			result = result * num;
			num = num - 1;
		}
	}
}
