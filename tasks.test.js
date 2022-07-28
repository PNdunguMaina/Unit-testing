const {stringLength, reverseString, Calculator} = require('./tasks');
test ('string char count', () => {
    // arrange
    const string = 'helloworld';
    // act
    const strFunction = stringLength(string);
    // ascert
    expect(stringLength('helloworld')).toBe(10);
});

test ('throw error if string char count not between 0 & 10', () => {
    // arrange
    const string = 'How are you doing?';
    // act
    const strFunction = () => {
        stringLength.length;
    }
    // ascert
    expect(strFunction).toThrowError()
})

test ('take a string and return its reverse', () => {
    // arrange
    const string = 'hello';
    // act
    const strFunction = reverseString(string);
    // ascert
    expect(strFunction).toBe(reverseString(string));
})

test('properly add two numbers', () => {
    // arrange
    const x = 1;
    const y = 2;

    // act
    const calculate = new Calculator();
    const numFunction = calculate.add();

    // ascert
    expect (numFunction).toBe(3);
})

test('properly subtract two numbers', () => {
    // arrange
    const x = 1;
    const y = 2;

    // act
    const calculate = new Calculator();
    const numFunction = calculate.subtract();

    // ascert
    expect (numFunction).toBe(-1);
})

test('properly divide two numbers', () => {
    // arrange
    const x = 1;
    const y = 2;

    // act
    const calculate = new Calculator();
    const numFunction = calculate.divide();

    // ascert
    expect (numFunction).toBe(0.5);
})

test('properly multiply two numbers', () => {
    // arrange
    const x = 1;
    const y = 2;

    // act
    const calculate = new Calculator();
    const numFunction = calculate.multiply();

    // ascert
    expect (numFunction).toBe(2);
})

test ('return string with first character capitalized', () => {
    // arrange
    const string = 'hello';

    // act
    const strFunction = capitalize(string);

    // ascert
    expect (strFunction).toBe('Hello');

})