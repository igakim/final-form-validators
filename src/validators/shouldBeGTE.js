export default (gte, errorMessage = 'Value is shorter than required') => (value) => {
  if (!value) throw Error(`Argument Error. Expected value, got ${value}`);
  if (!gte) throw Error((`Argument Error. Expected gte, got ${value}`));
  return value.length >= gte ? undefined : errorMessage
};
