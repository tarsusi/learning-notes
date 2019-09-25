// Taken from https://www.kirupa.com/html5/check_if_you_are_on_a_touch_enabled_device.htm

function isTouchSupported() {
  var msTouchEnabled = window.navigator.msMaxTouchPoints;
  var generalTouchEnabled = "ontouchstart" in document.createElement("div");

  return msTouchEnabled || generalTouchEnabled;
}
