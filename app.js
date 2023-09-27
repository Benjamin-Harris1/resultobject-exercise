"use strict";

import * as result from "./result.js";

main();

async function main() {
  const results = await getResults();
  showResults(results);
}

async function getResults() {
  const response = await fetch("results.json");
  const data = await response.json();
  return data.map((resultData) => {
    resultData.date = result.formatDate(resultData.date);
    return result.createResult(resultData);
  });
}

function showResults(results) {
  document.querySelector("#results tbody").innerHTML = "";
  const sortedByTime = results.sort((a, b) => a.time.localeCompare(b.time));
  for (const result of sortedByTime) {
    let resultTypeText;
    let resultDisciplineText;

    if (result.isTraining() === true) {
      resultTypeText = "Træning";
    } else if (result.isCompetition() === true) {
      resultTypeText = "Konkurrence";
    }

    if (result.isBackStroke() === true) {
      resultDisciplineText = "ryg";
    } else if (result.isButterfly() === true) {
      resultDisciplineText = "butterfly";
    } else if (result.isCrawl() === true) {
      resultDisciplineText = "crawl";
    } else if (result.isBreastStroke() === true) {
      resultDisciplineText = "bryst";
    } else if (result.isFreeStyle() === true) {
      resultDisciplineText = "freestyle";
    }
    const html =
      /*html*/
      `
            <tr>
            <td>${result.date}</td>
            <td>${result.memberId}</td>
            <td>${resultDisciplineText}</td>
            <td>${resultTypeText}</td>
            <td>${result.time}</td>
            </tr>
        `;
    document.querySelector("#results tbody").insertAdjacentHTML("beforeend", html);
  }
}
