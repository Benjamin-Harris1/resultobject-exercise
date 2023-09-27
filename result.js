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
    translateDiscipline() {
      if (this.discipline == "backstroke") {
        this.discipline = "ryg";
      } else if (this.discipline == "breaststroke") {
        this.discipline = "bryst";
      } else if (this.discipline == "crawl") {
        this.discipline = "crawl";
      } else if (this.discipline == "freestyle") {
        this.discipline = "freestyle";
      } else if (this.discipline == "butterfly") {
        this.discipline = "butterfly";
      }
    },
    translateType() {
      if (this.type == "competition") {
        this.type = "stævne";
      } else if (this.type == "training") {
        this.type = "træning";
      }
      console.log(this.type);
    },
  };
  return Result;
}

function formatDate(dateString) {
  const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };

  const date = new Date(dateString);
  return date.toLocaleDateString("da-DK", options);
}

export { createResult, formatDate };
