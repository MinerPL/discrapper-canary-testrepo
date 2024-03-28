"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var l = n("442837"),
  s = n("481060"),
  i = n("846027"),
  r = n("131951");

function o() {
  let e = (0, l.useStateFromStores)([r.default], () => Object.values(r.default.getInputDevices())),
    t = (0, l.useStateFromStores)([r.default], () => r.default.getInputDeviceId());
  return e.map(e => {
    let {
      id: n,
      disabled: l,
      name: r
    } = e;
    return (0, a.jsx)(s.MenuRadioItem, {
      id: "input-".concat(n),
      group: "input-devices",
      disabled: l,
      label: r,
      checked: n === t,
      action: () => i.default.setInputDevice(n)
    }, "input-".concat(n))
  })
}