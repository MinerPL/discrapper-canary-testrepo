n(627494), n(757143);
var i = n(735250),
  a = n(470079),
  l = n(317261),
  s = n(442837),
  r = n(18323),
  o = n(594174),
  c = n(823379),
  d = n(5192),
  u = n(561308),
  h = n(256726),
  p = n(206295),
  m = n(278399),
  _ = n(297781),
  f = n(591853),
  E = n(410441),
  C = n(616922),
  g = n(689938);
let I = (e, t, n, i) => {
let a = function(e) {
    if (e === l._.WEEK)
      return g.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
  }(i),
  s = d.ZP.getName(t.guild_id, t.id, n),
  r = e.extra.artist.name;
return a.plainFormat({
  artist: r,
  userName: s
}).replaceAll('*', '');
  },
  x = (e, t) => g.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
username: t.username,
artist: e.extra.artist.name
  });
t.Z = e => {
  let {
channel: t,
entry: n,
requestId: l,
closePopout: d
  } = e, {
parent_title: T,
provider: v,
image_url: N
  } = n.extra.media, S = n.extra.artist.name, Z = (0, s.e7)([o.default], () => o.default.getUser(n.author_id)), {
primaryColor: A,
secondaryColor: M
  } = (0, p.Z)(N), b = (0, u.Nq)(n), R = a.useCallback(() => {
if (null == Z || !(0, c.Hi)(b, m.y9))
  return;
let e = I(n, t, Z, b);
return (0, h.CR)({
  user: Z,
  channel: t,
  mediaImageSrc: N,
  artist: S,
  description: e,
  colors: [
    A,
    M
  ],
  badges: (0, h.UU)(n)
});
  }, [
N,
S,
t,
n,
A,
b,
M,
Z
  ]);
  if (null == Z || !(0, c.Hi)(b, m.y9))
return null;
  let j = () => {
let e = C.Hw.ALBUM,
  t = r.Z.isProtocolRegistered() ? C.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : C.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
window.open(t);
  };
  return (0, i.jsxs)(f.yR, {
children: [
  (0, i.jsx)(f.wG, {
    onClickTitle: j,
    onClickSubtitle: () => {
      let e = C.Hw.ARTIST,
        t = r.Z.isProtocolRegistered() ? C.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : C.C7.WEB_OPEN(e, n.extra.artist.external_id);
      window.open(t);
    },
    onClickThumbnail: j,
    thumbnailSrc: N,
    channel: t,
    entry: n,
    headerIcons: (0, i.jsx)(E.Z, {
      provider: v
    }),
    userDescription: g.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: T,
    subtitle: S,
    badges: (0, i.jsx)(_.Gk, {
      location: _.Gt.POPOUT,
      children: m.Ho.map((e, t) => (0, i.jsx)(e, {
        entry: n
      }, t))
    })
  }),
  (0, i.jsx)(f.St, {
    children: (0, i.jsx)(f.WT, {
      closePopout: d,
      user: Z,
      channel: t,
      generateReactionImage: R,
      reactionImageAltText: x(n, Z),
      entry: n,
      requestId: l
    })
  })
]
  });
};