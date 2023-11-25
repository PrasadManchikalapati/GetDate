function getDate(days) {
  const addDays = require("date-fns/addDays");
  const res = addDays(new Date(2020, 7, 22), days);
  return `${res.getDate()}-${res.getMonth()+1}-${res.getFullYear()}`;
};
module.exports = getDate;
