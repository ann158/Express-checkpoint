module.exports = function (req, res, next) {
  const now = new Date();
  const day = now.getDay(); // Sunday = 0, Monday = 1, ..., Saturday = 6
  const hour = now.getHours(); // 0 to 23

  const isWorkingDay = day >= 1 && day <= 5;
  const isWorkingHour = hour >= 9 && hour < 17;

  if (isWorkingDay && isWorkingHour) {
    next();
  } else {
    res.send('<h1>Sorry, our site is only available during working hours (Mon–Fri, 9AM–5PM)</h1>');
  }
};