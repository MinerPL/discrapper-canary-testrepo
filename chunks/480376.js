"use strict";
n.r(t), n.d(t, {
  default: function() {
    return j
  }
}), n("222007"), n("808653"), n("424973");
var l = n("37983"),
  a = n("884691"),
  s = n("414456"),
  i = n.n(s),
  r = n("974667"),
  o = n("446674"),
  u = n("77078"),
  d = n("450911"),
  c = n("272030"),
  f = n("191225"),
  h = n("610898"),
  C = n("255991"),
  p = n("698652"),
  m = n("393027"),
  E = n("373469"),
  g = n("42203"),
  I = n("18494"),
  S = n("800762"),
  _ = n("290581"),
  N = n("15738"),
  T = n("108189"),
  A = n("299039"),
  L = n("379881"),
  v = n("986373"),
  x = n("690874"),
  R = n("620882"),
  M = n("686373"),
  O = n("49111"),
  y = n("782340"),
  D = n("422300");
let b = {
  analyticsSource: {
    page: O.AnalyticsPages.GUILD_CHANNEL,
    section: O.AnalyticsSections.CHANNEL_LIST,
    object: O.AnalyticsObjects.CHANNEL
  }
};

function j() {
  let e = (0, r.useTreeItem)("favorites"),
    {
      favoriteAdded: t,
      clearFavoriteAdded: s
    } = (0, v.useFavoriteAdded)(),
    [j, G] = a.useState(!1),
    {
      favoriteServerMuted: U,
      favoriteChannels: P
    } = (0, o.useStateFromStoresObject)([L.default], () => ({
      favoriteChannels: L.default.getFavoriteChannels(),
      favoriteServerMuted: L.default.favoriteServerMuted
    })),
    w = (0, o.useStateFromStores)([I.default], () => I.default.getChannelId(O.FAVORITES)),
    F = (0, o.useStateFromStores)([g.default], () => g.default.getChannel(w)),
    B = (0, m.default)(e => e.guildId),
    V = B === O.FAVORITES,
    {
      badge: H,
      unread: k
    } = (0, x.default)(P),
    Y = function(e) {
      let t = (0, o.useStateFromStores)([I.default], () => I.default.getVoiceChannelId()),
        n = null != t && null != e[t],
        l = (0, o.useStateFromStores)([E.default], () => {
          if (!n) return !1;
          let t = E.default.getCurrentUserActiveStream();
          return null != t && null != e[t.channelId]
        }),
        a = (0, o.useStateFromStores)([E.default], () => E.default.getAllApplicationStreams().some(t => null != e[t.channelId])),
        s = (0, o.useStateFromStores)([S.default], () => n && null != t && S.default.hasVideo(t), [n, t]),
        i = (0, o.useStateFromStoresArray)([f.default], () => A.default.keys(e).reduce((e, t) => (e.push(...f.default.getEmbeddedActivitiesForChannel(t)), e), [])),
        r = (0, o.useStateFromStores)([f.default], () => Array.from(f.default.getSelfEmbeddedActivities().values()).some(t => {
          let {
            channelId: n
          } = t;
          return null != e[n]
        })),
        u = i.length > 0,
        d = !1,
        c = !1,
        h = !1,
        p = !1;
      return n ? (d = !s, c = s, h = l, p = r) : (h = a, p = u), (0, C.renderMediaBadge)({
        audio: d,
        video: c,
        screenshare: h,
        liveStage: !1,
        isCurrentUserConnected: n,
        activity: p
      })
    }(P),
    K = H > 0 ? (0, p.renderMentionBadge)(H) : null,
    W = a.useCallback(() => {
      s()
    }, [s]);
  return (0, l.jsxs)(h.ListItem, {
    children: [(0, l.jsx)(N.default, {
      selected: V,
      hovered: j,
      unread: k && !U,
      className: D.pill
    }), (0, l.jsx)(M.default, {
      onShow: W,
      children: (0, l.jsx)(R.FavoriteAddedTooltip, {
        children: (0, l.jsx)(u.BlobMask, {
          selected: V || j,
          upperBadge: Y,
          lowerBadge: K,
          children: (0, l.jsx)(T.default, {
            ...e,
            ariaLabel: y.default.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
              guildName: y.default.Messages.FAVORITES_GUILD_NAME,
              mentions: H
            }),
            to: {
              pathname: O.Routes.CHANNEL(O.FAVORITES, w),
              state: b
            },
            selected: V || j,
            onMouseEnter: () => G(!0),
            onMouseLeave: () => G(!1),
            onMouseDown: function() {
              null != F && d.default.preload(F.guild_id, F.id)
            },
            onContextMenu: function(e) {
              (0, c.openContextMenuLazy)(e, async () => {
                let {
                  default: e
                } = await n.el("95086").then(n.bind(n, "95086"));
                return t => (0, l.jsx)(e, {
                  ...t
                })
              })
            },
            children: (0, l.jsx)("div", {
              className: i(D.ring, {
                [D.ringActive]: t
              }),
              children: (0, l.jsx)(_.default, {
                className: D.favoriteIcon,
                width: 20,
                height: 20
              })
            })
          })
        })
      })
    })]
  })
}