export default (bool) => (validate) => (bool ? validate : () => {});
