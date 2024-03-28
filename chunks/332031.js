"use strict";
a.r(t), a.d(t, {
  default: function() {
    return r
  }
});
var l = a("735250");
a("470079");
var n = a("442837"),
  u = a("481060"),
  d = a("655922"),
  s = a("158776"),
  i = a("981631"),
  o = a("689938");

function r(e) {
  let t = (0, n.useStateFromStores)([s.default], () => (0, d.default)(s.default.findActivity(e, e => e.type === i.ActivityTypes.STREAMING)), [e]);
  return null == t ? null : (0, l.jsx)(u.MenuItem, {
    id: "watch-stream",
    label: o.default.Messages.WATCH_STREAM,
    action: () => window.open(t, "_blank")
  })
}