import { DragEvent, DragEventHandler, MouseEventHandler } from 'react';

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

export const rippleEffect: MouseEventHandler<HTMLElement> = (event) => {
  const className = 'ripple-effect';
  const parentElement = event.currentTarget;

  const circle = document.createElement('span');
  const diameter = Math.max(
    parentElement.clientWidth,
    parentElement.clientHeight,
  );
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${
    event.clientX - (parentElement.offsetLeft + radius)
  }px`;
  circle.style.top = `${event.clientY - (parentElement.offsetTop + radius)}px`;
  circle.classList.add(className);

  const ripple = parentElement.getElementsByClassName(className)[0];

  if (ripple) {
    ripple.remove();
  }

  parentElement.appendChild(circle);
};
