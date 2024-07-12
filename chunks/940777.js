n.d(t, {
  Z: function() {
return O;
  }
}), n(47120), n(724458), n(653041);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(91192),
  o = n(442837),
  c = n(481060),
  u = n(493683),
  d = n(239091),
  h = n(317381),
  p = n(276952),
  _ = n(682662),
  f = n(674552),
  m = n(593364),
  g = n(905423),
  C = n(199902),
  I = n(592125),
  E = n(944486),
  N = n(979651),
  x = n(709054),
  S = n(853856),
  v = n(593214),
  Z = n(919755),
  T = n(110977),
  L = n(603274),
  A = n(981631),
  b = n(689938),
  M = n(908978);
let R = {
  analyticsSource: {
page: A.ZY5.GUILD_CHANNEL,
section: A.jXE.CHANNEL_LIST,
object: A.qAy.CHANNEL
  }
};

function O() {
  let e = (0, s.Ie)('favorites'),
{
  favoriteAdded: t,
  clearFavoriteAdded: r
} = (0, v.up)(),
[O, y] = l.useState(!1),
{
  favoriteServerMuted: P,
  favoriteChannels: j
} = (0, o.cj)([S.Z], () => ({
  favoriteChannels: S.Z.getFavoriteChannels(),
  favoriteServerMuted: S.Z.favoriteServerMuted
})),
D = (0, o.e7)([E.Z], () => E.Z.getChannelId(A.I_8)),
U = (0, o.e7)([I.Z], () => I.Z.getChannel(D)),
w = (0, g.Z)(e => e.guildId) === A.I_8,
{
  badge: G,
  unread: k
} = (0, Z.Z)(j),
B = function(e) {
  let t = (0, o.e7)([E.Z], () => E.Z.getVoiceChannelId()),
    n = null != t && null != e[t],
    i = (0, o.e7)([C.Z], () => {
      if (!n)
        return !1;
      let t = C.Z.getCurrentUserActiveStream();
      return null != t && null != e[t.channelId];
    }),
    l = (0, o.e7)([C.Z], () => C.Z.getAllApplicationStreams().some(t => null != e[t.channelId])),
    r = (0, o.e7)([N.Z], () => n && null != t && N.Z.hasVideo(t), [
      n,
      t
    ]),
    a = (0, o.Wu)([h.ZP], () => x.default.keys(e).reduce((e, t) => (e.push(...h.ZP.getEmbeddedActivitiesForChannel(t)), e), [])),
    s = (0, o.e7)([h.ZP], () => Array.from(h.ZP.getSelfEmbeddedActivities().values()).some(t => {
      let {
        channelId: n
      } = t;
      return null != e[n];
    })),
    c = a.length > 0,
    u = !1,
    d = !1,
    p = !1,
    _ = !1;
  return n ? (u = !r, d = r, p = i, _ = s) : (p = l, _ = c), (0, f.Or)({
    audio: u,
    video: d,
    screenshare: p,
    liveStage: !1,
    isCurrentUserConnected: n,
    activity: _
  });
}(j),
V = G > 0 ? (0, m.N)(G) : null,
H = l.useCallback(() => {
  r();
}, [r]);
  return (0, i.jsxs)(_.H, {
children: [
  (0, i.jsx)(p.Z, {
    selected: w,
    hovered: O,
    unread: k && !P,
    className: M.pill
  }),
  (0, i.jsx)(L.Z, {
    onShow: H,
    children: (0, i.jsx)(T.S, {
      children: (0, i.jsx)(c.BlobMask, {
        selected: w || O,
        upperBadge: B,
        lowerBadge: V,
        children: (0, i.jsx)(c.NavItem, {
          ...e,
          ariaLabel: b.Z.Messages.GUILD_TOOLTIP_A11Y_LABEL.format({
            guildName: b.Z.Messages.FAVORITES_GUILD_NAME,
            mentions: G
          }),
          to: {
            pathname: A.Z5c.CHANNEL(A.I_8, D),
            state: R
          },
          selected: w || O,
          onMouseEnter: () => y(!0),
          onMouseLeave: () => y(!1),
          onMouseDown: function() {
            if (null != U)
              u.Z.preload(U.guild_id, U.id);
          },
          onContextMenu: function(e) {
            (0, d.jW)(e, async () => {
              let {
                default: e
              } = await n.e('3190').then(n.bind(n, 631981));
              return t => (0, i.jsx)(e, {
                ...t
              });
            });
          },
          children: (0, i.jsx)('div', {
            className: a()(M.ring, {
              [M.ringActive]: t
            }),
            children: (0, i.jsx)(c.StarIcon, {
              size: 'custom',
              color: 'currentColor',
              className: M.favoriteIcon,
              width: 20,
              height: 20
            })
          })
        })
      })
    })
  })
]
  });
}