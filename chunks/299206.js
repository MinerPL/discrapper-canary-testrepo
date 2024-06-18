"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250);
n(470079);
var r = n(512722),
  s = n.n(r),
  o = n(481060),
  a = n(695346),
  l = n(754424),
  u = n(572004);

function _(e) {
  let {
    id: t,
    label: n,
    onSuccess: r,
    shiftId: _,
    showIconFirst: d,
    showWithoutDeveloperMode: c,
    focusedClassName: E
  } = e, I = a.Sb.useSetting();
  if (__OVERLAY__ || !(c || I) || !u.wS || null == t) return null;
  let T = "devmode-copy-id-".concat(t);
  return (0, i.jsx)(o.MenuItem, {
    id: T,
    label: n,
    action: function(e) {
      let n = null != _ && e.shiftKey ? _ : t;
      s()(null != n, "cannot copy null text"), (0, u.JG)(n), null == r || r()
    },
    icon: l.Z,
    showIconFirst: d,
    focusedClassName: E
  }, T)
}