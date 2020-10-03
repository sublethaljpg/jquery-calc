var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  console.log("User is using a mobile device.");
  $("body").css("height", "90vh");
  $("#calc").css("background-color", "yellow");
} else {
  console.log("User is not using a mobile device.");
}
