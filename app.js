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
    result.translateDiscipline();
    result.translateType();

    // CONVERT TO UPPER CASE
    // const capitalizedDiscipline = result.discipline.charAt(0).toUpperCase() + result.discipline.slice(1);
    // const capitalizedType = result.type.charAt(0).toUpperCase() + result.type.slice(1);
    const html =
      /*html*/
      `
            <tr>
            <td>${result.date}</td>
            <td>${result.memberId}</td>
            <td>${result.discipline}</td>
            <td>${result.type}</td>
            <td>${result.time}</td>
            </tr>
        `;
    document.querySelector("#results tbody").insertAdjacentHTML("beforeend", html);
  }
}
