"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var l = n("735250");
n("470079");
var a = n("442837"),
  s = n("239091"),
  i = n("246364"),
  r = n("937111"),
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

function p(e) {
  let {
    guildNode: t
  } = e, n = t.id, s = (0, a.useStateFromStores)([r.default], () => r.default.getRequest(n)), p = (0, a.useStateFromStores)([r.default], () => r.default.getJoinRequestGuild(n), [n]), m = (0, a.useStateFromStores)([u.default], () => u.default.isFocused()), C = (0, a.useStateFromStores)([o.default], () => o.default.getGuildId());
  return null == p ? null : (0, l.jsx)(d.default, {
    guildNode: t,
    guild: p,
    animatable: m,
    draggable: !1,
    selected: n === C,
    preloadOnClick: !1,
    contextMenu: h,
    lowerBadge: (null == s ? void 0 : s.applicationStatus) === i.GuildJoinRequestApplicationStatuses.REJECTED ? (0, c.renderGuildJoinRequestBadge)({
      guildJoinRequestStatus: s.applicationStatus
    }) : void 0,
    route: f.Routes.GUILD_MEMBER_VERIFICATION(n)
  })
}