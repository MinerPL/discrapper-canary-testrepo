"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var l = n("735250");
n("470079");
var u = n("512722"),
  a = n.n(u),
  s = n("481060"),
  d = n("695346"),
  i = n("754424"),
  r = n("572004");

function o(e) {
  let {
    id: t,
    label: n,
    onSuccess: u,
    shiftId: o,
    showIconFirst: c
  } = e, E = d.DeveloperMode.useSetting();
  if (__OVERLAY__ || !E || !r.SUPPORTS_COPY || null == t) return null;
  let f = "devmode-copy-id-".concat(t);
  return (0, l.jsx)(s.MenuItem, {
    id: f,
    label: n,
    action: function(e) {
      let n = null != o && e.shiftKey ? o : t;
      a()(null != n, "cannot copy null text"), (0, r.copy)(n), null == u || u()
    },
    icon: i.default,
    showIconFirst: c
  }, f)
}