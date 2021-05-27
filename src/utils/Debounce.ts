export function debounce(func: Function, waitMilliseconds = 50) {
  let timeoutId: number;

  let promises: {
    resolve: (x: Function) => void;
    reject: (reason?: any) => void;
  }[] = [];

  const debouncedFunction = function (
    this: ThisParameterType<Function>,
    ...args: any
  ) {
    const context = this;
    return new Promise((resolve, reject) => {
      if (timeoutId !== undefined) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(func, waitMilliseconds);

      promises.push({ resolve, reject });
    });
  };

  debouncedFunction.cancel = function (reason?: any) {
    if (timeoutId !== undefined) {
      clearTimeout(timeoutId);
    }
    // console.log(promises);

    promises.forEach(({ reject }) => reject(reason));
    promises = [];
  };

  return debouncedFunction;
}
