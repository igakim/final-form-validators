export default (gte, errorMessage = 'Value is shorter than required') => (value) => {
  if (!gte) throw Error((`Argument Error. Expected gte, got ${value}`));
  if (typeof gte !== 'number') throw Error(`Type Error. Length should be number, got ${typeof gte}`);
  if (!value) throw Error(`Argument Error. Expected value, got ${value}`);
  return value.length >= gte ? undefined : errorMessage
};
