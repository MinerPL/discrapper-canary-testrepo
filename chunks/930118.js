"use strict";
s.r(t), s.d(t, {
  updateLocation: function() {
    return i
  }
});
var a = s("570140");

function i(e) {
  a.default.wait(() => a.default.dispatch({
    type: "APPLICATION_STORE_LOCATION_CHANGE",
    location: e
  }))
}