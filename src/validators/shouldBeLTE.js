export default (lte, errorMessage = 'Value is longer than required') => (value) => {
  if (!value) throw Error(`Argument Error. Expected value, got ${value}`);
  if (!lte) throw Error((`Argument Error. Expected lte, got ${value}`));
  return value.length <= lte ? undefined : errorMessage;
};
