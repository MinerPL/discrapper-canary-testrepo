"use strict";

function i(e) {
  return null != e && new Date(e) > new Date
}

function r(e) {
  return i(null == e ? void 0 : e.communicationDisabledUntil)
}
n.d(t, {
  J: function() {
    return i
  },
  b: function() {
    return r
  }
})