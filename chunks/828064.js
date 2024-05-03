"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var u = n("735250");
n("470079");
var r = n("481060"),
  a = n("547972"),
  s = n("326528");

function l() {
  let e = (0, s.useGameSettingsTabs)().map(e => (0, u.jsx)(r.MenuItem, {
    id: e.id,
    label: e.title,
    action: () => (0, a.default)(e.id)
  }, e.id));
  return (0, u.jsx)(u.Fragment, {
    children: e
  })
}