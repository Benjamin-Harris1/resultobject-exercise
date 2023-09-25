"use strict";

function createResult(resultData) {
  const Result = {
    id: resultData.id,
    location: resultData.competitionLocation,
    compName: resultData.competitionName,
    placement: resultData.competitionPlacement,
    date: resultData.date,
    discipline: resultData.discipline,
    memberId: resultData.memberId,
    type: resultData.resultType,
    time: resultData.time,
    getTimeAsString() {
      const minutes = Math.floor(this.time / (60 * 1000));
      const seconds = Math.floor((this.time % (60 * 1000)) / 1000);
      const milliseconds = this.time % 1000;
      return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}.${milliseconds.toString().padStart(3, "0")}`;
    },
    setTimeFromFormattedString: function (formattedTime) {
      const [minutes, seconds, milliseconds] = formattedTime.split(/[:.]/).map(Number);
      this.time = minutes * 60000 + seconds * 1000 + milliseconds;
    },
  };
  return Result;
}
