export default (errorMessage) => (value1, value2) => (value1 === value2 ? undefined : errorMessage);
