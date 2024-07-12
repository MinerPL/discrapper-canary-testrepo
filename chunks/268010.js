n(627494), n(757143);
var i = n(735250),
  a = n(470079),
  l = n(442837),
  s = n(692547),
  r = n(481060),
  o = n(706454),
  c = n(49012),
  d = n(5192),
  u = n(591759),
  h = n(561308),
  p = n(644810),
  m = n(206295),
  _ = n(335326),
  f = n(297781),
  E = n(591853),
  C = n(689938);
let g = (e, t, n) => {
let i = C.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_WATCHED_MEDIA,
  a = d.ZP.getName(t.guild_id, t.id, n),
  l = e.extra.media_title;
return i.plainFormat({
  mediaTitle: l,
  userName: a,
  episodeDescription: e.extra.media_subtitle
}).replaceAll('*', '');
  },
  I = (e, t) => C.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_WATCHING.format({
username: t.username,
activity: e.extra.media_title
  });
t.Z = e => {
  let {
channel: t,
entry: n,
requestId: d,
closePopout: x
  } = e, {
user: T,
mediaImageSrc: v,
episodeDescription: N
  } = (0, _.Bj)(n), {
primaryColor: S,
secondaryColor: Z
  } = (0, m.Z)(v), A = (0, l.e7)([o.default], () => o.default.locale), M = a.useCallback(e => {
if (null != T && null != v)
  return (0, p.B)({
    entry: n,
    mediaImageSrc: v,
    avatarSrc: T.getAvatarURL(t.guild_id, 128),
    description: g(n, t, T),
    timestamp: (0, h.yh)(n, A),
    episodeDescription: N,
    colors: [
      S,
      Z
    ],
    channelId: e
  });
  }, [
t,
n,
N,
A,
v,
S,
Z,
T
  ]), b = () => {
if (null == n.extra.url)
  return;
let e = u.Z.safeParseWithQuery(n.extra.url);
if (null != e && null != e.protocol && null != e.hostname)
  (0, c.q)({
    href: u.Z.format(e),
    trusted: !1
  });
  };
  return null == T ? null : (0, i.jsxs)(E.yR, {
children: [
  (0, i.jsx)(E.wG, {
    thumbnailSrc: v,
    channel: t,
    entry: n,
    userDescription: (0, h.kr)(n) ? C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHING : C.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_WATCHED,
    title: n.extra.media_title,
    subtitle: n.extra.media_subtitle,
    headerIcons: (0, i.jsx)(r.CrunchyrollNeutralIcon, {
      size: 'xs',
      color: s.Z.colors.CONTENT_INVENTORY_OVERLAY_UI_MOD
    }),
    badges: (0, i.jsx)(f.Gk, {
      location: f.Gt.POPOUT,
      children: _.td.map((e, t) => (0, i.jsx)(e, {
        entry: n
      }, t))
    }),
    onClickTitle: b,
    onClickThumbnail: b
  }),
  (0, i.jsx)(E.St, {
    children: (0, i.jsx)(E.WT, {
      closePopout: x,
      user: T,
      channel: t,
      generateReactionImage: M,
      reactionImageAltText: I(n, T),
      entry: n,
      requestId: d
    })
  })
]
  });
};