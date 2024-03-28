"use strict";
n.r(t);
var l = n("735250"),
  a = n("470079"),
  s = n("442837"),
  i = n("746916"),
  r = n("965638"),
  o = n("905423"),
  u = n("486472"),
  d = n("888369"),
  c = n("430824"),
  f = n("451478"),
  h = n("291082"),
  C = n("61634"),
  p = n("325257"),
  m = n("800391");
t.default = a.memo(function(e) {
  let {
    guildNode: t,
    lowerBadge: n
  } = e, g = t.id, E = (0, s.useStateFromStores)([c.default], () => c.default.getGuild(g)), S = (0, i.useCurrentUserGuildBadgeStatus)(g), _ = (0, s.useStateFromStores)([f.default], () => f.default.isFocused()), I = (0, s.useStateFromStores)([u.default], () => u.default.isUnavailable(g)), N = (0, o.default)(e => e.guildId), T = (0, C.default)(g), {
    badge: A,
    unread: L
  } = (0, s.useStateFromStoresObject)([d.default], () => ({
    badge: d.default.getMentionCount(g),
    unread: d.default.hasUnread(g)
  })), v = (0, r.useShouldShowInvitesDisabledNotif)(E) && 0 === A, x = a.useMemo(() => null != n ? n : v ? (0, l.jsx)("div", {
    className: m.pauseBackground,
    children: (0, l.jsx)(h.default, {
      className: m.pause,
      width: 10,
      height: 10
    })
  }) : null, [n, v]);
  return (0, l.jsx)(p.default, {
    ...e,
    guild: E,
    unavailable: I,
    animatable: _,
    selected: N === g,
    badge: A,
    lowerBadge: x,
    unread: L,
    mediaState: T,
    guildJoinRequestStatus: S
  })
})