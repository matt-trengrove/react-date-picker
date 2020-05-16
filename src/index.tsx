import React, { FC, HTMLAttributes } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  name?: string;
}

// Please do not use types off of a default export module or else Storybook Docs will suffer.
// see: https://github.com/storybookjs/storybook/issues/9556
export const HelloWorld: FC<Props> = ({ name }) => {
  return <div>{`Hello, ${name || 'World'}`}</div>;
};
