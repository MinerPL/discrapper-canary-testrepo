"use strict";
n.r(t), n.d(t, {
  useCanFavoriteChannel: function() {
    return m
  },
  useFavorite: function() {
    return h
  },
  useFavoriteAdded: function() {
    return x
  },
  useFavoritesCategories: function() {
    return v
  },
  useFavoritesGuildSelected: function() {
    return S
  }
}), n("47120"), n("653041");
var r = n("470079"),
  l = n("106351"),
  a = n("442837");
n("592125");
var i = n("984933"),
  o = n("914010"),
  u = n("594174");
n("709054");
var s = n("853856"),
  d = n("362658"),
  c = n("434065"),
  f = n("981631");

function m(e) {
  let {
    favoritesEnabled: t,
    hasStaffPrivileges: n
  } = (0, d.useFavoritesServerExperiment)("useCanFavoriteChannel"), r = (0, a.useStateFromStores)([s.default], () => s.default.isFavorite(e.id)), l = (0, a.useStateFromStores)([u.default], () => u.default.getCurrentUser()), i = !(e.isDM() || e.isThread()) || n && (null == l ? void 0 : l.isStaff()) === !0;
  return t && !__OVERLAY__ && !r && i
}

function h(e) {
  return (0, a.useStateFromStores)([s.default], () => s.default.getFavorite(e))
}

function v() {
  return (0, a.useStateFromStores)([i.default], () => i.default.getChannels(f.FAVORITES))[l.ChannelTypes.GUILD_CATEGORY].map(e => ({
    id: "null" === e.channel.id ? null : e.channel.id,
    name: e.channel.name
  }))
}

function S() {
  return (0, a.useStateFromStores)([o.default], () => o.default.getGuildId()) === f.FAVORITES
}

function x() {
  let {
    isFavoritesPerk: e
  } = (0, d.useFavoritesServerExperiment)("useFavoriteAdded"), t = (0, c.useFavoritesTooltipStore)(), n = r.useCallback(() => {
    e && t.notifyFavoriteAdded()
  }, [t, e]), l = r.useCallback(() => {
    e && t.clearFavoriteAdded()
  }, [t, e]);
  return {
    favoriteAdded: t.favoriteAdded,
    notifyFavoriteAdded: n,
    clearFavoriteAdded: l
  }
}