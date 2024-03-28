"use strict";
n.r(t), n.d(t, {
  default: function() {
    return c
  },
  useFlattenedChannelIdListWithThreads: function() {
    return _
  }
}), n("653041");
var i = n("470079"),
  o = n("442837"),
  l = n("734307"),
  u = n("854444"),
  a = n("131704"),
  s = n("680089"),
  d = n("888369"),
  r = n("981631"),
  E = n("647086");

function c(e, t, n) {
  return A(e === E.FAVORITES_RAW_GUILD_ID || e === r.FAVORITES ? (0, u.computeFavoritesState)() : l.default.getGuildWithoutChangingCommunityRows(e).guildChannels, t, n)
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