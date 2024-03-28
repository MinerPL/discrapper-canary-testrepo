"use strict";
n.r(t), n.d(t, {
  ignoreDevice: function() {
    return i
  },
  neverShowModal: function() {
    return d
  },
  setDevice: function() {
    return s
  }
});
var a = n("570140");

function s(e, t, n) {
  a.default.dispatch({
    type: "CONNECTED_DEVICE_SET",
    displayName: e,
    connectedDevicePreference: t,
    location: n
  })
}

function i(e) {
  a.default.dispatch({
    type: "CONNECTED_DEVICE_IGNORE",
    displayName: e
  })
}

function d() {
  a.default.dispatch({
    type: "CONNECTED_DEVICE_NEVER_SHOW_MODAL"
  })
}