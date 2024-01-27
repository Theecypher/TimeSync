export function convertTimer(timer) {
  const date = new Date(timer);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  return formattedHours + ":" + formattedMinutes;
}
export const getAmPm = (timer) => {
  const date = new Date(timer);
  const hours = date.getHours();
  const ampm = hours >= 12 ? "pm" : "am";
  return ampm;
};
