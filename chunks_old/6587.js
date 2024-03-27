"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  },
  useFlattenedChannelIdListWithThreads: function() {
    return _
  }
}), n("424973");
var i = n("884691"),
  o = n("446674"),
  l = n("123561"),
  u = n("829072"),
  a = n("233069"),
  s = n("870691"),
  d = n("952451"),
  r = n("49111"),
  E = n("695838");

function c(e, t, n) {
  let i = e === E.FAVORITES_RAW_GUILD_ID || e === r.FAVORITES ? (0, u.computeFavoritesState)() : l.default.getGuildWithoutChangingCommunityRows(e).guildChannels;
  return A(i, t, n)
}

function _(e, t, n, l, u) {
  let a = (0, o.useStateFromStores)([d.default], () => d.default.getGuildChangeSentinel(e)),
    r = (0, o.useStateFromStores)([s.default], () => s.default.version);
  return (0, i.useMemo)(() => A(t, l, u).map(e => e.id), [t, n, a, r])
}

function A(e, t, n) {
  let i = [];
  return e.forEachShownChannel(e => {
    ((0, a.isGuildSelectableChannelType)(e.type) || t && (0, a.isGuildVocalChannelType)(e.type)) && i.push(e)
  }, n), i
}