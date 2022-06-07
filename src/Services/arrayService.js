export function calculateMinPairInArraySum(arrayInString) {
    let array = parseStringToNumbersArray(arrayInString);

    let [firstNumber, secondNumber] = findMinimumPairInArray(array);
    let sum = firstNumber + secondNumber;

    alert(`sum : ${sum}`);
    return sum;
}

function findMinimumPairInArray(numbersArray) {
    if (numbersArray.length < 2) {
        return;
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

    alert(`first: ${firstMinNumber}  second: ${secondMinNumber}`);
    return [firstMinNumber, secondMinNumber];
}

function parseStringToNumbersArray(arrayInString) {
    let array = arrayInString.split(",");
    let resultArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!isNaN(Number(array[i])) && array[i].trim() !== '') {
            resultArray.push(Number(array[i]));
        }
    }

    console.log(`get ${resultArray}`);

    return resultArray;
}

