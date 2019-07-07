const warningOnce = require('..');

beforeEach(() => {
    jest.spyOn(console, 'error').mockImplementation(() => {});
});

afterEach(() => {
    console.error.mockRestore();
});

it(`should throw an exception if no message was specified`, () => {
    expect(() => { warningOnce(true); }).toThrow(/requires a warning/i);
    expect(() => { warningOnce(false); }).toThrow(/requires a warning/i);
});

it(`should throw only when the condition was not meet`, () => {
    warningOnce(false, 'warning message'); // - Should call console.error
    warningOnce(true, 'warning message');  // - Should not call console.error

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('Warning: warning message');
});

it(`should format message with arguments`, () => {
    warningOnce(false, 'warning %s with one argument', 'message');
    warningOnce(false, 'warning %s with %s arguments', 'message', 'two');

    expect(console.error).toHaveBeenCalledTimes(2);
    expect(console.error).toHaveBeenCalledWith('Warning: warning message with one argument');
    expect(console.error).toHaveBeenCalledWith('Warning: warning message with two arguments');
});

it(`should throw the message only once when called multiple time`, () => {
    warningOnce(false, 'a warning message');
    warningOnce(false, 'a warning message');
    warningOnce(false, 'a warning message');

    expect(console.error).toHaveBeenCalledTimes(1);
    expect(console.error).toHaveBeenCalledWith('Warning: a warning message');
});
