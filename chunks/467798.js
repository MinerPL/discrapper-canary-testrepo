"use strict";
n.d(t, {
  BH: function() {
    return o
  },
  ZP: function() {
    return a
  },
  vD: function() {
    return s
  }
});
var i = n(528151);
let r = "@silent",
  s = new RegExp("^".concat(r, "(\\s|$)"));

function o() {
  return i.D.getCurrentConfig({
    location: "456bd9_1"
  }, {
    autoTrackExposure: !1
  }).allowSending
}

function a(e) {
  return null == e ? [!1, ""] : o() && null != e.match(s) ? [!0, e.substring(r.length).trim()] : [!1, e]
}