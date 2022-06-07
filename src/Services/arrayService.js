function calculateMinPairInArraySum(arrayInString, isIgnoredErrorsMode) {
    let array = parseStringToNumbersArray(arrayInString, isIgnoredErrorsMode);

    if (typeof array === "string") {
        return array;
    }

    let [firstNumber, secondNumber] = findMinimumPairInArray(array);

    if (firstNumber === null && secondNumber === null) {
        return 'Not enough items';
    }

    return firstNumber + secondNumber;
}

function findMinimumPairInArray(numbersArray) {
    if (numbersArray.length < 2) {
        return [null, null];
    }

    let firstMinNumber = numbersArray[0];
    let secondMinNumber = numbersArray[1];

    for (let i = 2; i < numbersArray.length; i++) {
        if (numbersArray[i] < firstMinNumber) {
            if (firstMinNumber < secondMinNumber) {
                secondMinNumber = firstMinNumber;
            }
            firstMinNumber = numbersArray[i];
        } else if (numbersArray[i] < secondMinNumber) {
            if (secondMinNumber < firstMinNumber) {
                firstMinNumber = secondMinNumber;
            }
            secondMinNumber = numbersArray[i];
        }
    }

    return [firstMinNumber, secondMinNumber];
}

function parseStringToNumbersArray(arrayInString, isIgnoredErrorsMode) {
    if (arrayInString.trim().length === 0) {
        return 'Not enough items';
    }

    let array = arrayInString.split(",");
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!isNaN(Number(array[i])) && array[i].trim() !== '') {
            resultArray.push(Number(array[i]));
        } else if (!isIgnoredErrorsMode) {
            return "Incorrect Input";
        }
    }

    return resultArray;
}

module.exports = calculateMinPairInArraySum;