var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  console.log("User is using a mobile device.");
  $("body").css("height", "100vh");
  $("#calc").css("height", "100%");
  $("#calc").css("background-color", "yellow");
} else {
  console.log("User is not using a mobile device.");
}
