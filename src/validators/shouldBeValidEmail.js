import isEmail from 'validator/lib/isEmail';

export default (errorMessage) => (value) => {
  if (!value) throw Error(`Argument Error. Expected value, got ${value}`);
  return isEmail(value) ? undefined : errorMessage;
};
