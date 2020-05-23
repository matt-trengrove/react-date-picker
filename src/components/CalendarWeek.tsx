import React, { FC } from 'react';
import { Moment } from 'moment';
import { CalendarDay } from './CalendarDay';

export interface Props {
  week: Moment[];
}

export const CalendarWeek: FC<Props> = (props: Props) => {
  return (
    <tr>
      {props.week.map(day => <CalendarDay key={day.date()} day={day}/>)}
    </tr>
  );
};
