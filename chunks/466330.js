"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var a = t("735250");
t("470079");
var u = t("442837"),
  s = t("115850"),
  l = t("481060"),
  r = t("159300"),
  i = t("984933"),
  o = t("496675"),
  c = t("981631"),
  d = t("689938");

function f(e) {
  let {
    source: n,
    guild: t,
    channel: a,
    stageInstance: s
  } = e, l = (0, u.useStateFromStores)([i.default], () => i.default.getDefaultChannel(t.id, !0, c.Permissions.CREATE_INSTANT_INVITE)), d = (0, u.useStateFromStores)([o.default], () => (0, r.canViewInviteModal)(o.default, t, a, s)), f = E(n, t, d && null != a ? a : l), _ = I(n);
  return null == a && n === c.InstantInviteSources.GUILD_CONTEXT_MENU ? null : d || null != l ? f : _
}
let E = (e, n, u) => (0, a.jsx)(l.MenuItem, {
    id: "invite-people",
    label: d.default.Messages.INVITE_PEOPLE,
    color: "brand",
    icon: e === c.InstantInviteSources.GUILD_HEADER ? s.GroupPlusIcon : void 0,
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: s
      } = await Promise.all([t.e("99387"), t.e("7654"), t.e("92893")]).then(t.bind(t, "560114"));
      return t => (0, a.jsx)(s, {
        ...t,
        guild: n,
        channel: u,
        source: e
      })
    })
  }),
  I = e => (0, a.jsx)(l.MenuItem, {
    id: "invite-people",
    label: d.default.Messages.INVITE_PEOPLE,
    color: "brand",
    icon: e === c.InstantInviteSources.GUILD_HEADER ? s.GroupPlusIcon : void 0,
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("88358")]).then(t.bind(t, "598402"));
      return n => (0, a.jsx)(e, {
        ...n
      })
    })
  })