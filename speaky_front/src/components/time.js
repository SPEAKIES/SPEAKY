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
  let date1 = year + month + day;
  if (Number(date1) - Number(data) <= 1) {
    return '1일';
  }
  if (Number(date1) - Number(data) <= 7) {
    return '1주일';
  }
  if (Number(date1) - Number(data) <= 31) {
    return '한달';
  }
  if (Number(date1) - Number(data) <= 365) {
    return '1년';
  }
};
export const dateRevert = (data) => {
  let date = data;
  date = date.split(' ');
  date = date[0].split('-');
  let result = date[0] + date[1] + date[2];
  return result;
};
export const curdate = dateStr + ' ' + timeStr;
