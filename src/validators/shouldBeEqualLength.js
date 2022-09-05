export default (len, errorMessage = 'Value is longer than required') => (value) => {
  if (!len) throw Error((`Argument Error. Expected lte, got ${value}`));
  if (typeof len !== 'number') throw Error(`Type Error. Length should be number, got ${typeof len}`);
  if (!value) throw Error(`Argument Error. Expected value, got ${value}`);
  return value.length === len ? undefined : errorMessage;
};
