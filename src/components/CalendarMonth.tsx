import React, { FC } from 'react';
import { Moment } from 'moment';

import { getWeeksInMonth } from '../utils/getWeeksInMonth';
import { CalendarWeek } from './CalendarWeek';

export interface Props {
  month: Moment;
  showDaysOutsideMonth: boolean;
}

export const CalendarMonth: FC<Props> = (props: Props) => {
  const weeksInMonth = getWeeksInMonth(props.month);

  return (
    <table>
      <thead>
        <tr>
          <th colSpan={7}>{props.month.format('MMMM')}</th>
        </tr>
      </thead>
      <tbody>
        {weeksInMonth.map((week, idx) =>
          <CalendarWeek 
            key={idx}
            week={week}
            month={props.month.month()}
            showDaysOutsideMonth={props.showDaysOutsideMonth}
          />
        )}
      </tbody>
    </table>
  );
};
