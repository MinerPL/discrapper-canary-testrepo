"use strict";
n.d(t, {
  Z: function() {
    return s
  }
}), n(47120);
var l = n(131951);

function s() {
  return Object.entries(l.Z.getVideoDevices()).map(e => {
    let [t, n] = e;
    return {
      id: "camera:" + n.id,
      name: n.name,
      url: ""
    }
  })
}