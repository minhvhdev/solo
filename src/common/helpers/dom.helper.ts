import { DragEvent, DragEventHandler } from 'react';

import { FORMAT_JSON } from '@common/constants';

export const getDomData = (
  e: DragEvent<HTMLDivElement>,
  name: string,
): string => {
  return e.currentTarget.dataset[name] as string;
};

export const setDragData = (
  e: DragEvent<HTMLDivElement>,
  data: object | string,
): void => {
  e.dataTransfer.setData(FORMAT_JSON, JSON.stringify(data));
};

export const getDragData = <T>(e: DragEvent<HTMLDivElement>): T => {
  return JSON.parse(e.dataTransfer.getData(FORMAT_JSON)) as T;
};

export const defaultDragOver: DragEventHandler<HTMLDivElement> = (e) => {
  e.preventDefault();
};
