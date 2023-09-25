"use strict";

import * as result from "./result.js";

main();

async function main() {
  const results = await getResults();
  showResults(results);
}

async function getResults() {
  const response = await fetch("results.json");
  const data = response.json();
  return data;
}

function showResults(results) {
  document.querySelector("#results tbody").innerHTML = "";
  const sortedByTime = results.sort((a, b) => a.time.localeCompare(b.time));
  for (const result of sortedByTime) {
    const html =
      /*html*/
      `
            <tr>
            <td>${result.date}</td>
            <td>${result.memberId}</td>
            <td>${result.discipline}</td>
            <td>${result.resultType}</td>
            <td>${result.time}</td>
            </tr>
        `;
    document.querySelector("#results tbody").insertAdjacentHTML("beforeend", html);
  }
}
