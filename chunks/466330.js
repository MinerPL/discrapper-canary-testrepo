"use strict";
t.r(n), t.d(n, {
  default: function() {
    return f
  }
});
var a = t("735250");
t("470079");
var u = t("442837"),
  l = t("481060"),
  s = t("159300"),
  r = t("984933"),
  i = t("496675"),
  o = t("782089"),
  d = t("981631"),
  c = t("689938");

function f(e) {
  let {
    source: n,
    guild: t,
    channel: a,
    stageInstance: l
  } = e, o = (0, u.useStateFromStores)([r.default], () => r.default.getDefaultChannel(t.id, !0, d.Permissions.CREATE_INSTANT_INVITE)), c = (0, u.useStateFromStores)([i.default], () => (0, s.canViewInviteModal)(i.default, t, a, l)), f = E(n, t, c && null != a ? a : o), I = _(n);
  return null == a && n === d.InstantInviteSources.GUILD_CONTEXT_MENU ? null : c || null != o ? f : I
}
let E = (e, n, u) => (0, a.jsx)(l.MenuItem, {
    id: "invite-people",
    label: c.default.Messages.INVITE_PEOPLE,
    color: "brand",
    icon: e === d.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: l
      } = await Promise.all([t.e("99387"), t.e("7654"), t.e("92893")]).then(t.bind(t, "560114"));
      return t => (0, a.jsx)(l, {
        ...t,
        guild: n,
        channel: u,
        source: e
      })
    })
  }),
  _ = e => (0, a.jsx)(l.MenuItem, {
    id: "invite-people",
    label: c.default.Messages.INVITE_PEOPLE,
    color: "brand",
    icon: e === d.InstantInviteSources.GUILD_HEADER ? o.default : void 0,
    action: () => (0, l.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([t.e("99387"), t.e("88358")]).then(t.bind(t, "598402"));
      return n => (0, a.jsx)(e, {
        ...n
      })
    })
  })