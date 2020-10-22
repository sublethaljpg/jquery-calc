function zero() {
  $("#calcOutputText").text("0");
}

function clear() {
  $("#calcOutputText").text("");
}

function output(content) {
  $("#calcOutputText").append(content);
}

function setOutput(number) {
  $("#calcOutputText").text(number);
}

function getOutput() {
  return $("#calcOutputText").text();
}

function getResult(number) {
  return Math.round(eval($("#calcOutputText").text()) * 100) / 100;
}

$(document).ready(function () {
  zero();
  $("#C").text.append;

  $("#C").click(function () {
    zero();
  });

  $("#point, .number, .operator").click(function () {
    if ($("#calcOutputText").text()[0].includes("0") === true) {
      clear();
    }
    output($(this).attr("value"));
  });

  $("#equals").click(function () {
    $("#calcOutputText").text(getResult());
  });

  $("#negative").click(function () {
    if ($("#calcOutputText").text()[0] == "-") {
      $("#calcOutputText").text($("#calcOutputText").text().replace("-", ""));
    } else if ($("#calcOutputText").text()[0] != "-") {
      $("#calcOutputText").text("-" + $("#calcOutputText").text());
    }
  });

  $("#backspace").click(function () {
    $("#calcOutputText").text(
      $("#calcOutputText")
        .text()
        .replace(
          $("#calcOutputText").text()[$("#calcOutputText").text().length - 1],
          ""
        )
    );
  });

  $("CE").click(function () {
    $;
  });

  setInterval(() => {
    if ($("#calcOutputText").text() == "") {
      zero();
    }
  }, 500);
});
