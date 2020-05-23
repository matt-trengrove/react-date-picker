import { Moment } from 'moment';

export function getWeeksInMonth(month: Moment): Moment[][] {
  const weeks: Moment[][] = [];

  const firstOfMonth = month.clone().startOf('month');
  const lastOfMonth = month.clone().endOf('month');
  const daysFromPrevMonth = firstOfMonth.day();
  const daysFromNextMonth = 6 - lastOfMonth.day();

  let currentDay = firstOfMonth.clone().subtract(daysFromPrevMonth, 'days');
  const lastDay = lastOfMonth.clone().add(daysFromNextMonth, 'days');

  let currentWeek: Moment[] = [];

  while (currentDay.dayOfYear() <= lastDay.dayOfYear()) {
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }

    currentWeek.push(currentDay);
    currentDay = currentDay.clone().add(1, 'days');
  }

  return weeks;
}
