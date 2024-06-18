"use strict";
n.d(t, {
  Qh: function() {
    return s
  },
  SO: function() {
    return o
  },
  Zw: function() {
    return a
  }
});
var i = n(570140),
  r = n(19759);

function s(e) {
  i.Z.dispatch({
    type: "DEV_TOOLS_SETTINGS_UPDATE",
    settings: e
  })
}

function o() {
  s({
    displayTools: !r.Z.displayTools
  })
}

function a() {
  i.Z.dispatch({
    type: "ANALYTICS_LOG_CLEAR"
  })
}