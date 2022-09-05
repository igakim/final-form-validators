export default (lte, errorMessage = 'Value is longer than required') => (value) => {
  if (!lte) throw Error((`Argument Error. Expected lte, got ${value}`));
  if (typeof lte !== 'number') throw Error(`Type Error. Length should be number, got ${typeof lte}`);
  if (!value) throw Error(`Argument Error. Expected value, got ${value}`);
  return value.length <= lte ? undefined : errorMessage;
};
