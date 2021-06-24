$(document).ready(function () {

  let cellContainer = $(".input-cell-container");

  for (let i = 1; i <= 100; i++) {
    let answer = "";
    let n = i;

    while (n > 0) {
      let rem = n % 26;
      if (rem == 0) {
        answer = "Z" + answer;
        n = Math.floor(n / 26) - 1;
      } else {
        answer = String.fromCharCode(rem - 1 + 65) + answer;
        n = Math.floor(n / 26);
      }
    }

    let column = $(`<div class="column-name colcod-${answer} colId-${i}" >${answer}</div>`);
    $(".column-name-container").append(column);

    let row = $(`<div class="row-name" id="rowId-${i}">${i}</div>`);
    $(".row-name-container").append(row);
  }

});
