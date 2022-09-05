export default (valueToEqual, errorMessage = 'Values must be equal') => (value) => (value === valueToEqual ? undefined : errorMessage);
