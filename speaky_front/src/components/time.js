const date = new Date();
const year = String(date.getFullYear());
const month = ('0' + (date.getMonth() + 1)).slice(-2);
const day = ('0' + date.getDate()).slice(-2);
const hours = ('0' + date.getHours()).slice(-2);
const minutes = ('0' + date.getMinutes()).slice(-2);
const seconds = ('0' + date.getSeconds()).slice(-2);
const timeStr = hours + ':' + minutes + ':' + seconds;
const dateStr = year + '-' + month + '-' + day;

export const dateCheck = (data) => {
  let date = new Date();
  let year = String(date.getFullYear());
  let month = ('0' + (date.getMonth() + 1)).slice(-2);
  let day = ('0' + date.getDate()).slice(-2);
  let date1 = new Date(data[0], data[1], data[2]);
  let date2 = new Date(year, month, day);
  let btMs = date2.getTime() - date1.getTime();
  let btDay = btMs / (1000 * 60 * 60 * 24);
  if (btDay <= 1) {
    return '1일';
  }
  if (btDay <= 7) {
    return '1주일';
  }
  if (btDay <= 31) {
    return '한달';
  }
  if (btDay <= 365) {
    return '1년';
  }
};
export const dateRevert = (data) => {
  let date = data;
  date = date.split(' ');
  let result = date[0].split('-');
  return result;
};
export const curdate = dateStr + ' ' + timeStr;
