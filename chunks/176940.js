"use strict";
l.r(t), l.d(t, {
  default: function() {
    return s
  }
}), l("47120");
var a = l("131951");

function s() {
  return Object.entries(a.default.getVideoDevices()).map(e => {
    let [t, l] = e;
    return {
      id: "camera:" + l.id,
      name: l.name,
      url: ""
    }
  })
}