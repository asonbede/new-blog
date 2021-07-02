export const getTimeDiff = (oDatePublished) => {
  const oResult = {};
  let timeToShow = "";
  var oToday = new Date();

  var nDiff = oToday.getTime() - oDatePublished;

  // Get diff in days
  oResult.days = Math.floor(nDiff / 1000 / 60 / 60 / 24);
  nDiff -= oResult.days * 1000 * 60 * 60 * 24;

  // Get diff in hours
  oResult.hours = Math.floor(nDiff / 1000 / 60 / 60);
  nDiff -= oResult.hours * 1000 * 60 * 60;

  // Get diff in minutes
  oResult.minutes = Math.floor(nDiff / 1000 / 60);
  nDiff -= oResult.minutes * 1000 * 60;

  // Get diff in seconds
  oResult.seconds = Math.floor(nDiff / 1000);

  // var timeValueArr = [];
  // for (let time in oResult) {
  //   timeValueArr.push(oResult[time]);
  // }
  // const max = Math.max(...timeValueArr);
  for (let time in oResult) {
    if (oResult[time] > 0) {
      timeToShow = oResult[time].toString() + " " + time + " " + "ago";
      return timeToShow;
    }
  }
};
