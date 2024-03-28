"use strict";
a.r(t), a.d(t, {
  default: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var l = a("442837"),
  i = a("481060"),
  u = a("417363"),
  r = a("877481"),
  d = a("358085"),
  s = a("689938");

function o(e, t) {
  let a = e.getBranchedName(t),
    o = (0, l.useStateFromStores)([u.default], () => {
      let t = u.default.getState(e.id, e.branchId);
      return null == t ? void 0 : t.installPath
    }, [e.branchId, e.id]);
  return null != o && (0, d.isDesktop)() ? (0, n.jsx)(i.MenuItem, {
    id: "create-shortcut",
    label: s.default.Messages.APPLICATION_CONTEXT_MENU_CREATE_DESKTOP_SHORTCUT,
    action: () => r.default.createShortcuts(!0, !1, a, e.id, o)
  }) : null
}