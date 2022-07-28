const stringLength = require('./tasks');
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