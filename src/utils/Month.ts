const monthMap = [
  "Январь",
  "Ферваль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

/**
 * zero based array:
 * 0 - january
 * ...
 * 11 - december
 *
 */
const getMonthString = (month: number) => monthMap[month];

export default getMonthString;
