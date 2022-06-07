const calculateMinPairInArraySum = require('../Services/arrayService');

test('Correct array', () => {
    expect(calculateMinPairInArraySum("1, 2, 3, 4", true)).toBe(3);
    expect(calculateMinPairInArraySum("4, 0, 3, 19, 492, -10, 1", true)).toBe(-10);
    expect(calculateMinPairInArraySum("0, 0, 0", true)).toBe(0);
    expect(calculateMinPairInArraySum("2, 1, 0, -5, 4, -10, 1", true)).toBe(-15);
});

test('Correct array - not ignored errors mode', () => {
    expect(calculateMinPairInArraySum("1, 2, 3, 4", false)).toBe(3);
    expect(calculateMinPairInArraySum("4, 0, 3, 19, 492, -10, 1", false)).toBe(-10);
    expect(calculateMinPairInArraySum("0, 0, 0", false)).toBe(0);
    expect(calculateMinPairInArraySum("2, 1, 0, -5, 4, -10, 1", false)).toBe(-15);
});

test('Empty array', () => {
    expect(calculateMinPairInArraySum("", true)).toBe('Not enough items');
    expect(calculateMinPairInArraySum("", false)).toBe('Not enough items');
});

test('Incorrect array', () => {
    expect(calculateMinPairInArraySum("1, true, 2, false, null, 4, -10, 0", true)).toBe(-10);
    expect(calculateMinPairInArraySum("1,,,,,,,,1", true)).toBe(2);
});

test('Not enough items', () => {
    expect(calculateMinPairInArraySum("true, false, null, 1", true)).toBe('Not enough items');
    expect(calculateMinPairInArraySum("0", true)).toBe('Not enough items');
    expect(calculateMinPairInArraySum("true, false, null, NaN", true)).toBe('Not enough items');
});

test('Ignored errors mode - incorrect input', () => {
    expect(calculateMinPairInArraySum("true, false, null, 1", false)).toBe('Incorrect Input');
    expect(calculateMinPairInArraySum("1,,,,,,,,1", false)).toBe('Incorrect Input');
});