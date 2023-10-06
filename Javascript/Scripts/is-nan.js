function isNaN(value) {
  // 1. Convert the value to a Number using the Number constructor.
  const num = Number(value);

  // 2. Check if the result is NaN.
  // NaN is the only JavaScript value that is not equal to itself.
  return num !== num;
}
