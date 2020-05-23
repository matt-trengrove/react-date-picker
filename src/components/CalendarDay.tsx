import React, { FC } from 'react';
import { Moment } from 'moment';

export interface Props {
  day: Moment;
  month: number;
  showDaysOutsideMonth: boolean;
}

export const CalendarDay: FC<Props> = (props: Props) => {
  let date: number | string = '';
  
  if (props.showDaysOutsideMonth || props.day.month() === props.month)
    date = props.day.date();

  return (
    <td>{date}</td>
  );
};
