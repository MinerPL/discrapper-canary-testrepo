"use strict";
n.d(t, {
  Z: function() {
    return l
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(846027),
  a = n(131951);

function l() {
  let e = (0, r.e7)([a.Z], () => Object.values(a.Z.getVideoDevices())),
    t = (0, r.e7)([a.Z], () => a.Z.getVideoDeviceId());
  return e.map(e => {
    let {
      id: n,
      disabled: r,
      name: a
    } = e;
    return (0, i.jsx)(s.MenuRadioItem, {
      group: "video-devices",
      id: "video-device-".concat(n),
      disabled: r,
      label: a,
      checked: n === t,
      action: () => o.Z.setVideoDevice(n)
    }, "video-device-".concat(n))
  })
}