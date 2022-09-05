export default (...validators) => (
  (value, allValues) => validators.reduce(
    (error, validator) => error || validator(value, allValues),
    undefined,
  )
);
