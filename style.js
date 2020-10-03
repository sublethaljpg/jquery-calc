var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

if (isMobile) {
  console.log("User is using a mobile device.");
  $("#calc").css("height", "calc(100vh - 88px)");
} else {
  console.log("User is not using a mobile device.");
}
