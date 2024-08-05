n(627494), n(757143);
var i = n(735250),
  a = n(470079),
  s = n(317261),
  l = n(423875),
  r = n(442837),
  o = n(18323),
  c = n(594174),
  u = n(908841),
  d = n(823379),
  h = n(5192),
  p = n(561308),
  m = n(256726),
  _ = n(206295),
  f = n(278399),
  E = n(297781),
  g = n(591853),
  C = n(410441),
  I = n(616922),
  x = n(689938);
let T = (e, t, n, i) => {
let a = function(e) {
    if (e === s._.WEEK)
      return x.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_WEEK_POPOUT;
  }(i),
  l = h.ZP.getName(t.guild_id, t.id, n),
  r = e.extra.artist.name;
return a.plainFormat({
  artist: r,
  userName: l
}).replaceAll('*', '');
  },
  N = (e, t) => x.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_TOP_ARTIST.format({
username: t.username,
artist: e.extra.artist.name
  });
t.Z = e => {
  let {
channel: t,
entry: n,
requestId: s,
closePopout: h
  } = e, {
parent_title: v,
provider: S,
image_url: Z
  } = n.extra.media, A = n.extra.artist.name, M = (0, r.e7)([c.default], () => c.default.getUser(n.author_id)), {
primaryColor: b,
secondaryColor: R
  } = (0, _.Z)(Z), j = (0, p.Nq)(n), L = a.useCallback(() => {
if (null == M || !(0, d.Hi)(j, f.y9))
  return;
let e = T(n, t, M, j);
return (0, m.CR)({
  user: M,
  channel: t,
  mediaImageSrc: Z,
  artist: A,
  description: e,
  colors: [
    b,
    R
  ],
  badges: (0, m.UU)(n)
});
  }, [
Z,
A,
t,
n,
b,
j,
R,
M
  ]);
  if (null == M || !(0, d.Hi)(j, f.y9))
return null;
  let P = () => {
let e = I.Hw.ALBUM,
  t = o.Z.isProtocolRegistered() ? I.C7.PLAYER_OPEN(e, n.extra.media.external_parent_id) : I.C7.WEB_OPEN(e, n.extra.media.external_parent_id);
window.open(t);
  };
  return (0, i.jsxs)(g.yR, {
children: [
  (0, i.jsx)(g.wG, {
    onClickTitle: P,
    onClickSubtitle: () => {
      let e = I.Hw.ARTIST,
        t = o.Z.isProtocolRegistered() ? I.C7.PLAYER_OPEN(e, n.extra.artist.external_id) : I.C7.WEB_OPEN(e, n.extra.artist.external_id);
      window.open(t);
    },
    onClickThumbnail: P,
    thumbnailSrc: Z,
    channel: t,
    entry: n,
    headerIcons: S === l.p.SPOTIFY ? (0, i.jsx)(C.Z, {
      Icon: u.Z,
      'aria-label': x.Z.Messages.SPOTIFY
    }) : null,
    userDescription: x.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
    title: v,
    subtitle: A,
    badges: (0, i.jsx)(E.Gk, {
      location: E.Gt.POPOUT,
      children: f.Ho.map((e, t) => (0, i.jsx)(e, {
        entry: n
      }, t))
    })
  }),
  (0, i.jsx)(g.St, {
    children: (0, i.jsx)(g.WT, {
      closePopout: h,
      user: M,
      channel: t,
      generateReactionImage: L,
      reactionImageAltText: N(n, M),
      entry: n,
      requestId: s
    })
  })
]
  });
};