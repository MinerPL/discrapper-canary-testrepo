"use strict";
n.r(t), n.d(t, {
  default: function() {
    return d
  }
});
var r = n("37983");
n("884691");
var o = n("627445"),
  u = n.n(o),
  i = n("77078"),
  a = n("845579"),
  l = n("662255"),
  s = n("306160");

function d(e) {
  let {
    id: t,
    label: n,
    onSuccess: o,
    shiftId: d,
    showIconFirst: T
  } = e, E = a.DeveloperMode.useSetting();
  if (__OVERLAY__ || !E || !s.SUPPORTS_COPY || null == t) return null;
  let A = "devmode-copy-id-".concat(t);
  return (0, r.jsx)(i.MenuItem, {
    id: A,
    label: n,
    action: function(e) {
      let n = null != d && e.shiftKey ? d : t;
      u(null != n, "cannot copy null text"), (0, s.copy)(n), null == o || o()
    },
    icon: l.default,
    showIconFirst: T
  }, A)
}