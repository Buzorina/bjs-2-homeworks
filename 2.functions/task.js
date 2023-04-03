function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;
	if (arr.length === 0) {
		return 0;
	}

	for (let i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}

		if (max < arr[i]) {
			max = arr[i];
		}
		sum += arr[i];
		let avg = parseFloat((sum / arr.length).toFixed(2));
	}

	let avg = parseFloat((sum / arr.length).toFixed(2));

	return {
		min: min,
		max: max,
		avg: avg
	};
}

function summElementsWorker(...arr) {
	let sum = 0;
	if (arr.length === 0) {
		return 0;
	}

	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

function differenceMaxMinWorker(...arr) {
	let min = Infinity;
	let max = -Infinity;
	if (arr.length === 0) {
		return 0;
	}

	for (i = 0; i < arr.length; i++) {
		if (min > arr[i]) {
			min = arr[i];
		}

		if (max < arr[i]) {
			max = arr[i];
		}
	}
	let difference = max - min;

	return difference;
}

function differenceEvenOddWorker(...arr) {
	let sumEvenElement = 0;
	let sumOddElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	let differenceEvenOdd = sumEvenElement - sumOddElement;
	return differenceEvenOdd;
}

function averageEvenElementsWorker(...arr) {
	let sumEvenElement = 0;
	let countEvenElement = 0;
	if (arr.length === 0) {
		return 0;
	}
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
			countEvenElement++;
		}
	}
	let averageEvenElements = parseFloat(sumEvenElement / countEvenElement);
	return averageEvenElements;
}

function makeWork(arrOfArr, func) {
	let maxWorkerResult = -Infinity;

	for (let i = 0; i < arrOfArr.length; i++) {
		const funcResult = func(...arrOfArr[i]);

		if (funcResult > maxWorkerResult) {
			maxWorkerResult = funcResult;
		}
	}
	return maxWorkerResult;
}