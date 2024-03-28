"use strict";
a.r(t), a.d(t, {
  default: function() {
    return T
  }
}), a("653041"), a("47120");
var l = a("735250"),
  n = a("470079"),
  u = a("442837"),
  d = a("481060"),
  s = a("493683"),
  i = a("447543"),
  o = a("904245"),
  r = a("159300"),
  f = a("592125"),
  c = a("984933"),
  M = a("430824"),
  m = a("496675"),
  E = a("699516"),
  g = a("771845"),
  I = a("594174"),
  C = a("981631"),
  _ = a("689938");

function S(e, t) {
  s.default.ensurePrivateChannel(e).then(e => {
    null != f.default.getChannel(e) && o.default.sendInvite(e, t, "context_menu", null)
  })
}

function T(e, t) {
  let a = (0, u.useStateFromStores)([I.default], () => I.default.getCurrentUser(), []),
    s = (0, u.useStateFromStoresArray)([g.default, M.default, m.default], () => {
      let e = g.default.getFlattenedGuildIds(),
        a = [];
      return e.forEach(e => {
        let l = M.default.getGuild(e);
        null != l && (0, r.canViewInviteModal)(m.default, l) && l.id !== t && a.push(l)
      }), a
    }, [t]),
    [o, f] = n.useState({});
  return (null == a ? void 0 : a.id) === e.id || e.bot || 0 === s.length || E.default.isBlocked(e.id) ? null : (0, l.jsx)(d.MenuItem, {
    id: "invite-to-server",
    label: _.default.Messages.INVITE_TO_SERVER,
    children: s.map(t => o[t.id] ? (0, l.jsx)(d.MenuItem, {
      id: t.id,
      disabled: !0,
      label: _.default.Messages.INVITE_SENT
    }, t.id) : (0, l.jsx)(d.MenuItem, {
      id: t.id,
      label: t.name,
      action: () => (function(e, t) {
        let a = c.default.getDefaultChannel(e.id, !0, C.Permissions.CREATE_INSTANT_INVITE);
        if (null != a) {
          if (f({
              ...o,
              [e.id]: !0
            }), !m.default.can(C.Permissions.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) {
            S(t, e.vanityURLCode);
            return
          }
          i.default.createInvite(a.id, {
            max_uses: 1,
            unique: !0
          }, "User Invite Context Menu").then(e => S(t, e.code))
        }
      })(t, e.id)
    }, t.id))
  })
}