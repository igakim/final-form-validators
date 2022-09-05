export default (errorMessage = 'This field is required!') => (value) => (value ? undefined : errorMessage);
