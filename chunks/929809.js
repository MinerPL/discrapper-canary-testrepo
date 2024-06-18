"use strict";
n.d(t, {
  H: function() {
    return i
  },
  c: function() {
    return r
  }
});
var s = n(570140);

function r(e) {
  s.Z.wait(() => s.Z.dispatch({
    type: "NUF_NEW_USER",
    newUserType: e
  }))
}

function i() {
  s.Z.wait(() => s.Z.dispatch({
    type: "NUF_COMPLETE"
  }))
}