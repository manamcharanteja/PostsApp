const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

const isEmpty = (obj) =>
  obj == null || (typeof obj === "object" && Object.keys(obj).length === 0);

export { debounce, isEmpty };
