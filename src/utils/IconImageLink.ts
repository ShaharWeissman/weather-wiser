export const weatherIconUrl = (IconNumber: number): string =>
  `https://developer.accuweather.com/sites/default/files/${formatIconNumber(
    IconNumber
  )}-s.png`;

function formatIconNumber(number: number): string {
  if (number < 10) {
    return `0${number}`;
  }
  return `${number}`;
}
