"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  }
});
var l = n("735250");
n("470079");
var u = n("512722"),
  a = n.n(u),
  i = n("481060"),
  o = n("695346"),
  r = n("754424"),
  s = n("572004");

function c(e) {
  let {
    id: t,
    label: n,
    onSuccess: u,
    shiftId: c,
    showIconFirst: d,
    showWithoutDeveloperMode: f
  } = e, _ = o.DeveloperMode.useSetting();
  if (__OVERLAY__ || !(f || _) || !s.SUPPORTS_COPY || null == t) return null;
  let E = "devmode-copy-id-".concat(t);
  return (0, l.jsx)(i.MenuItem, {
    id: E,
    label: n,
    action: function(e) {
      let n = null != c && e.shiftKey ? c : t;
      a()(null != n, "cannot copy null text"), (0, s.copy)(n), null == u || u()
    },
    icon: r.default,
    showIconFirst: d
  }, E)
}