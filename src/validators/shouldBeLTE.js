export default (errorMessage) => (value, lte) => {
  if (!value) throw Error(`Argument Error. Expected value, got ${value}`);
  if (!lte) throw Error((`Argument Error. Expected lte, got ${value}`));
  return value.length <= lte ? undefined : errorMessage;
};
