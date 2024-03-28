"use strict";
n.r(e), n.d(e, {
  default: function() {
    return l
  }
});
var a = n("735250");
n("470079");
var u = n("442837"),
  d = n("481060"),
  i = n("978085"),
  r = n("283595"),
  c = n("417363");

function l(t, e) {
  let n = (0, u.useStateFromStores)([c.default], () => c.default.getLaunchOptions(t.id, t.branchId)),
    l = (0, u.useStateFromStores)([r.default], () => r.default.getActiveLaunchOptionId(t.id, t.branchId));
  return n.length < 2 ? null : n.map(n => (0, a.jsx)(d.MenuItem, {
    id: n.id,
    label: n.name,
    action: a => {
      n.id !== l && i.setActiveLaunchOptionId(t.id, t.branchId, n.id), null == e || e(a)
    }
  }, n.id))
}