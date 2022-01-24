// 千分位
export const format = (v) => {
  const reg = /\d{1,3}(?=(\d{3})+$)/g;
  return `${v}`.replace(reg, "$&,");
};
