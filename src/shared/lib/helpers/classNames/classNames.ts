export const classNames = (
  cls: string,
  additional: (string | undefined)[] = [],
): string => {
  return [
    cls,
    ...additional.filter(Boolean),
  ].join(' ');
};
