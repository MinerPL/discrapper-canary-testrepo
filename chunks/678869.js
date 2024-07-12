n.d(t, {
  Z: function() {
return R;
  }
}), n(627494), n(757143), n(653041);
var i = n(735250),
  a = n(470079),
  l = n(423875),
  s = n(442837),
  r = n(902704),
  o = n(481060),
  c = n(952164),
  d = n(768419),
  u = n(239470),
  h = n(894344),
  p = n(314897),
  m = n(936195),
  _ = n(5192),
  f = n(561308),
  E = n(256726),
  C = n(206295),
  g = n(551228),
  I = n(591853),
  x = n(371991),
  T = n(410441),
  v = n(981631),
  N = n(616922),
  S = n(689938),
  Z = n(153602),
  A = n(331679);
let M = (e, t, n) => {
  let {
artist: i,
media: a
  } = e, l = S.Z.Messages.MEMBER_LIST_CONTENT_FEED_USER_LISTENING_TO_MEDIA_ARTIST, s = _.ZP.getName(t.guild_id, t.id, n);
  return l.plainFormat({
artist: i,
userName: s,
media: a
  }).replaceAll('*', '');
};

function b(e) {
  let {
activity: t
  } = e, n = t.timestamps, l = (0, x.tS)(n), {
durationTimestamp: s,
seekBarStyles: r
  } = a.useMemo(() => {
var e;
let {
  start: n,
  end: i
} = null !== (e = t.timestamps) && void 0 !== e ? e : {};
if (null == n || null == i)
  return {};
let a = Math.min(i, l),
  s = i - n,
  r = Math.floor((a - n) / s * 100);
return {
  seekBarStyles: {
    width: ''.concat(r, '%')
  },
  durationTimestamp: (0, f.T_)({
    start: i
  }, n)
};
  }, [
t,
l
  ]);
  return null == r ? null : (0, i.jsxs)('div', {
className: Z.listeningTimeline,
children: [
  (0, i.jsx)(x.x3, {
    entry: n
  }),
  (0, i.jsx)('div', {
    className: Z.seekBarContainer,
    children: (0, i.jsx)('div', {
      className: Z.seekBarFill,
      style: r
    })
  }),
  (0, i.jsx)(o.Text, {
    variant: 'text-xs/normal',
    tabularNumbers: !0,
    color: void 0,
    children: s
  })
]
  });
}

function R(e) {
  var t, n, _;
  let x, Z, R, {
  channel: j,
  entry: L,
  requestId: P,
  closePopout: O
} = e,
{
  activity: y,
  currentEntry: D,
  artist: k,
  imageUrl: U,
  title: w,
  user: B
} = (0, g.pi)(L),
{
  primaryColor: H,
  secondaryColor: G
} = (0, C.Z)(U),
V = (0, s.e7)([
  d.Z,
  p.default
], () => (null == y ? void 0 : y.type) === v.IIU.LISTENING && null != B ? (0, u.Z)(d.Z, p.default, B, y) : void 0, [
  y,
  B
], r.Z),
F = a.useCallback(() => {
  var e;
  if (null == j || null == B)
    return;
  let t = null === (e = y.timestamps) || void 0 === e ? void 0 : e.start,
    n = (0, f.T_)(null != t ? {
      start: t
    } : L, Date.now());
  return (0, E.CR)({
    user: B,
    channel: j,
    mediaImageSrc: U,
    artist: k,
    description: M({
      artist: k,
      media: w
    }, j, B),
    colors: [
      H,
      G
    ],
    badges: (0, E.jE)({
      timestamp: n
    })
  });
}, [
  y,
  k,
  j,
  L,
  U,
  H,
  G,
  w,
  B
]);
  if (null == y || null == D)
return null;
  let W = k,
z = [];
  if (D.media.provider === l.p.SPOTIFY && (null == V ? void 0 : V.syncDisabled) === !1) {
x = () => {
  (0, c.aG)(y);
}, z.push((0, i.jsx)(I.Ll, {
  onClick: () => {
    (0, h.Z)(V, N.kG.USER_ACTIVITY_SYNC), O();
  },
  IconComponent: o.UserPlayIcon,
  children: S.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_LISTEN_ALONG
}, 'listen-along'));
W = (0, i.jsx)(m.Z, {
  artists: k,
  canOpen: null != y.sync_id,
  linkClassName: A.popoutTextSecondary,
  onOpenSpotifyArtist: e => {
    (0, c.d$)(y, B.id, e);
  }
}), Z = () => {
  (0, c.aG)(y);
}, R = () => {
  (0, c.Z5)(y, B.id);
};
  }
  let Y = (0, i.jsx)(I.wG, {
thumbnailSrc: U,
onClickThumbnail: R,
channel: j,
entry: L,
headerIcons: (0, i.jsx)(T.Z, {
  onClick: x,
  'aria-label': S.Z.Messages.ACTIVITY_FEED_NOW_PLAYING_ACTION_PLAY_ON_SPOTIFY,
  provider: D.media.provider
}),
userDescription: (0, f.kr)(L) ? S.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENING : S.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
title: w,
onClickTitle: Z,
subtitle: W,
badges: null,
children: (null === (t = y.timestamps) || void 0 === t ? void 0 : t.start) != null && (0, i.jsx)(b, {
  activity: y
})
  });
  return (0, i.jsxs)(I.yR, {
children: [
  Y,
  (0, i.jsx)(I.St, {
    children: (0, i.jsx)(I.WT, {
      closePopout: O,
      user: B,
      channel: j,
      generateReactionImage: F,
      reactionImageAltText: (n = k, _ = B, S.Z.Messages.ACTIVITY_REACTION_IMAGE_ALT_TEXT_LISTENING.format({
        username: _.username,
        activity: n
      })),
      entry: L,
      requestId: P,
      buttons: z
    })
  })
]
  });
}