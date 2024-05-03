"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
  }
}), l("653041"), l("47120");
var a = l("735250"),
  u = l("470079"),
  n = l("442837"),
  d = l("481060"),
  s = l("493683"),
  r = l("447543"),
  i = l("904245"),
  o = l("159300"),
  f = l("592125"),
  c = l("984933"),
  E = l("430824"),
  m = l("496675"),
  M = l("699516"),
  S = l("771845"),
  _ = l("594174"),
  g = l("981631"),
  I = l("689938");

function R(e, t) {
  s.default.ensurePrivateChannel(e).then(e => {
    null != f.default.getChannel(e) && i.default.sendInvite(e, t, "context_menu", null)
  })
}

function C(e) {
  let {
    user: t,
    guildId: l,
    onAction: s
  } = e, i = (0, n.useStateFromStores)([_.default], () => _.default.getCurrentUser(), []), f = (0, n.useStateFromStoresArray)([S.default, E.default, m.default], () => {
    let e = S.default.getFlattenedGuildIds(),
      t = [];
    return e.forEach(e => {
      let a = E.default.getGuild(e);
      null != a && (0, o.canViewInviteModal)(m.default, a) && a.id !== l && t.push(a)
    }), t
  }, [l]), [C, A] = u.useState({});
  return (null == i ? void 0 : i.id) === t.id || t.bot || 0 === f.length || M.default.isBlocked(t.id) ? null : (0, a.jsx)(d.MenuItem, {
    id: "invite-to-server",
    label: I.default.Messages.INVITE_TO_SERVER,
    children: f.map(e => C[e.id] ? (0, a.jsx)(d.MenuItem, {
      id: e.id,
      disabled: !0,
      label: I.default.Messages.INVITE_SENT
    }, e.id) : (0, a.jsx)(d.MenuItem, {
      id: e.id,
      label: e.name,
      action: () => {
        null == s || s(), ! function(e, t) {
          let l = c.default.getDefaultChannel(e.id, !0, g.Permissions.CREATE_INSTANT_INVITE);
          if (null != l) {
            if (A({
                ...C,
                [e.id]: !0
              }), !m.default.can(g.Permissions.CREATE_INSTANT_INVITE, e) && null != e.vanityURLCode) {
              R(t, e.vanityURLCode);
              return
            }
            r.default.createInvite(l.id, {
              max_uses: 1,
              unique: !0
            }, "User Invite Context Menu").then(e => R(t, e.code))
          }
        }(e, t.id)
      }
    }, e.id))
  })
}