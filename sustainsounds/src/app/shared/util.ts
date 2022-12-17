export function dateFormatter(date: Date): string {
  const uglyDate = date.toLocaleString().split(', ');
  const dateArray = uglyDate[0].split('/');

  return `${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`;
}
