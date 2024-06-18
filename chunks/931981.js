"use strict";
n.d(t, {
  V: function() {
    return A
  },
  e: function() {
    return N
  }
}), n(47120);
var i, r = n(735250);
n(470079);
var s = n(442837),
  o = n(481060),
  a = n(570140),
  l = n(592125),
  u = n(271383),
  _ = n(944486),
  d = n(594174),
  c = n(696202),
  E = n(689938),
  I = n(579805);

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = new Set;
class S extends(i = s.ZP.PersistedStore) {
  initialize(e) {
    null != e && (h = new Set(e))
  }
  hasId(e) {
    return h.has(e)
  }
  getState() {
    return [...h]
  }
}
T(S, "displayName", "PTOStore"), T(S, "persistKey", "PTOStore");
let f = new S(a.Z, {}),
  N = e => (0, s.e7)([u.ZP, d.default, f], () => {
    let t = d.default.getCurrentUser();
    if (null == t || !t.isStaff() || !e.isDM()) return !1;
    let n = d.default.getUser(e.getRecipientId());
    if (!(null == n ? void 0 : n.isStaff())) return !1;
    let i = u.ZP.getNicknames(n.id).some(e => e.endsWith("[PTO]") || e.endsWith("[OOO]"));
    return i ? !f.hasId(n.id) && i : (h.delete(n.id) && f.emitChange(), !1)
  }),
  A = () => (0, r.jsxs)("div", {
    className: I.bar,
    children: [E.Z.Messages.STAFF_PTO_NOTICE, (0, r.jsx)(o.Clickable, {
      className: I.closeButton,
      onClick: () => {
        let e = _.Z.getChannelId();
        if (null == e) return;
        let t = l.Z.getChannel(e);
        null != t && t.isPrivate() && !h.has(t.getRecipientId()) && (h.add(t.getRecipientId()), f.emitChange())
      },
      children: (0, r.jsx)(c.Z, {
        className: I.closeIcon
      })
    })]
  })