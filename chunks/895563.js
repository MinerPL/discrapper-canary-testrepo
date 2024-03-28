"use strict";
t.r(n), t.d(n, {
  useAddToFavoritesItem: function() {
    return m
  },
  useRemoveFromFavoritesItem: function() {
    return p
  }
}), t("47120");
var a = t("735250");
t("470079");
var l = t("392711"),
  u = t.n(l),
  r = t("442837"),
  d = t("481060"),
  i = t("984933"),
  s = t("853856"),
  o = t("117984"),
  f = t("593214"),
  c = t("362658"),
  h = t("981631"),
  M = t("689938");

function v(e, n) {
  return e.type === h.ChannelTypes.GROUP_DM ? n ? M.default.Messages.UNFAVORITE_GDM : M.default.Messages.FAVORITE_GDM : e.type === h.ChannelTypes.DM ? n ? M.default.Messages.UNFAVORITE_DM : M.default.Messages.FAVORITE_DM : n ? M.default.Messages.UNFAVORITE_CHANNEL : M.default.Messages.FAVORITE_CHANNEL
}

function m(e) {
  let n = (0, r.useStateFromStores)([i.default], () => i.default.getChannels(h.FAVORITES))[h.ChannelTypes.GUILD_CATEGORY],
    {
      isFavoritesPerk: t
    } = (0, c.useFavoritesServerExperiment)("58e21a_1"),
    {
      notifyFavoriteAdded: l
    } = (0, f.useFavoriteAdded)();
  if (!(0, f.useCanFavoriteChannel)(e)) return null;
  let [
    [s], M
  ] = u().partition(n, e => "null" === e.channel.id);

  function m(n) {
    l(), (0, o.addFavoriteChannel)(e.id, n)
  }
  return 0 === M.length ? (0, a.jsx)(d.MenuItem, {
    id: "favorite-channel",
    label: v(e, !1),
    action: () => m(null)
  }) : (0, a.jsxs)(d.MenuItem, {
    id: "favorite-channel",
    label: v(e, !1),
    action: () => m(null),
    children: [t && (0, a.jsx)(d.MenuGroup, {
      children: (0, a.jsx)(d.MenuItem, {
        id: "favorite-".concat(s.channel.id),
        label: s.channel.name,
        action: () => m("null" === s.channel.id ? null : s.channel.id)
      }, s.channel.id)
    }), (0, a.jsx)(d.MenuGroup, {
      children: M.map(e => (0, a.jsx)(d.MenuItem, {
        id: "favorite-".concat(e.channel.id),
        label: e.channel.name,
        action: () => m(e.channel.id)
      }, e.channel.id))
    })]
  })
}

function p(e) {
  let n = (0, r.useStateFromStores)([s.default], () => s.default.isFavorite(e.id));
  return __OVERLAY__ || !n ? null : (0, a.jsx)(d.MenuItem, {
    id: "favorite-channel",
    label: v(e, !0),
    color: "danger",
    action: () => e.type === h.ChannelTypes.GUILD_CATEGORY ? (0, d.openModalLazy)(async () => {
      let {
        default: n
      } = await t.e("37720").then(t.bind(t, "357632"));
      return t => (0, a.jsx)(n, {
        ...t,
        onConfirm: () => {
          t.onClose(), (0, o.removeFavoriteChannel)(e.id)
        },
        channel: e
      })
    }) : (0, o.removeFavoriteChannel)(e.id)
  })
}