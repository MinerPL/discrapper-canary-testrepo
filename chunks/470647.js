"use strict";
s.r(t), s.d(t, {
  default: function() {
    return u
  }
});
var a = s("735250");
s("470079");
var n = s("442837"),
  l = s("481060"),
  i = s("657254"),
  r = s("716364"),
  o = s("474873"),
  d = s("871465");

function u(e) {
  let {
    className: t
  } = e, s = (0, n.useStateFromStores)([o.default], () => o.default.getSoundpack()), {
    allowAprilFoolsSoundpack: u
  } = i.default.useExperiment({
    location: "a96548_1"
  }, {
    autoTrackExposure: !1
  });
  if (!u) return null;
  let c = u ? (0, d.getSoundpackOptionsAprilFools2023)() : [];
  return (0, a.jsx)(l.SingleSelect, {
    className: t,
    onChange: e => (0, r.setSoundpack)(e),
    value: s,
    options: c
  })
}