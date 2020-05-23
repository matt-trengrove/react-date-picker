import React, { FC } from 'react';
import { Moment } from 'moment';

export interface Props {
  day: Moment;
}

export const CalendarDay: FC<Props> = (props: Props) => {
  return (
    <td>{props.day.date()}</td>
  );
};
