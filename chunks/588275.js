"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("239091"),
  i = n("937111"),
  r = n("746916"),
  o = n("914010"),
  u = n("451478"),
  d = n("325257"),
  c = n("674552"),
  f = n("981631");

function h(e, t) {
  (0, s.openContextMenuLazy)(e, async () => {
    let {
      default: e
    } = await n.e("6368").then(n.bind(n, "987999"));
    return n => (0, l.jsx)(e, {
      ...n,
      guild: t
    })
  })
}

function C(e) {
  let {
    guildNode: t
  } = e, n = t.id, s = (0, r.useCurrentUserGuildBadgeStatus)(n), C = (0, a.useStateFromStores)([i.default], () => i.default.getJoinRequestGuild(n), [n]), p = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), m = (0, a.useStateFromStores)([o.default], () => o.default.getGuildId());
  return null == C ? null : (0, l.jsx)(d.default, {
    guildNode: t,
    guild: C,
    animatable: p,
    draggable: !1,
    selected: n === m,
    preloadOnClick: !1,
    contextMenu: h,
    lowerBadge: null != s ? (0, c.renderGuildJoinRequestBadge)({
      guildJoinRequestStatus: s
    }) : void 0,
    route: f.Routes.GUILD_MEMBER_VERIFICATION(n)
  })
}