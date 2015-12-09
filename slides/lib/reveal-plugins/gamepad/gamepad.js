(function () {
  var gamepad = new Gamepad();

  gamepad.bind(Gamepad.Event.BUTTON_DOWN, function (e) {
    switch (e.control) {
      case "RIGHT_BOTTOM_SHOULDER":
      case "RIGHT_TOP_SHOULDER":
        Reveal.next();
        break;
      case "LEFT_BOTTOM_SHOULDER":
      case "LEFT_TOP_SHOULDER":
        Reveal.prev();
        break;
      case "DPAD_DOWN":
        Reveal.down();
        break;
      case "DPAD_RIGHT":
        Reveal.right();
        break;
      case "DPAD_UP":
        Reveal.up();
        break;
      case "DPAD_LEFT":
        Reveal.left();
        break;
      case "HOME":
      case "FACE_1":
        Reveal.toggleOverview();
        break;
      case "SELECT_BACK":
      case "START_FORWARD":
        Reveal.togglePause();
        break;
      default:
        console.log(e.control);
    }
  });

  gamepad.init();
})();
