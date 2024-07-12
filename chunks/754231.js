n.d(t, {
  Z: function() {
return T;
  }
}), n(47120);
var i = n(735250),
  l = n(470079),
  r = n(120356),
  a = n.n(r),
  s = n(442837),
  o = n(481060),
  c = n(503438),
  u = n(39628),
  d = n(884338),
  h = n(594174),
  p = n(936195),
  _ = n(727218),
  f = n(81063),
  m = n(768581),
  g = n(823379),
  C = n(51144),
  I = n(604972);
let E = d.u.SIZE_24;

function N(e) {
  var t, n;
  let {
activity: r,
user: a,
embeddedApp: s,
onOpenSpotifyAlbum: u
  } = e, d = null == r ? void 0 : r.assets, h = null == r ? void 0 : r.application_id;
  if (null == r || null == d || null == d.large_image && null == d.small_image)
return null != s ? function(e) {
  let t = m.ZP.getApplicationIconURL({
      id: e.application.id,
      icon: e.application.icon
    }),
    n = e.application.name;
  return (0, i.jsx)(o.Tooltip, {
    text: n,
    position: 'top',
    children: () => (0, i.jsx)('img', {
      alt: n,
      src: t,
      className: I.applicationLargeImage
    })
  });
}(s) : null;
  let p = null !== (t = d.large_image) && void 0 !== t ? t : d.small_image,
_ = (0, c.Z)(r),
g = _ ? I.spotifyLargeImage : I.applicationLargeImage,
C = null != p ? (0, i.jsx)('img', {
  alt: null !== (n = d.large_text) && void 0 !== n ? n : '',
  src: (0, f.getAssetImage)(h, p, [
    128,
    128
  ]),
  className: g
}) : null;
  return _ && null != u ? (C = (0, i.jsx)(o.Clickable, {
className: I.clickable,
onClick: () => {
  u(r, a.id);
},
children: C
  }), (0, i.jsx)(o.Tooltip, {
text: null != d.large_text ? d.large_text : null,
position: 'top',
children: e => {
  let {
    onClick: t,
    ...n
  } = e;
  return null != C ? l.cloneElement(C, n) : null;
}
  })) : C;
}

function x(e) {
  let {
activity: t,
embeddedApp: n,
onOpenSpotifyTrack: l
  } = e, r = null == t ? void 0 : t.details, a = null == t ? void 0 : t.name, s = a;
  if (null != n)
s = n.application.name;
  else {
if (!(null != t && (0, c.Z)(t)) || null == t.sync_id || null == r || null == l)
  return null;
a = r, s = (0, i.jsx)(o.Clickable, {
  className: I.headerLink,
  onClick: () => {
    l(t);
  },
  children: r
});
  }
  return (0, i.jsx)(_.Z, {
title: a,
className: I.header,
children: s
  });
}

function S(e) {
  let {
activity: t,
user: n,
onOpenSpotifyArtist: l
  } = e, r = null == t ? void 0 : t.details, s = null == t ? void 0 : t.state, o = r;
  return (null != t && (0, c.Z)(t) && null != s && (o = [(0, i.jsx)(p.Z, {
artists: s,
linkClassName: I.bodyLink,
canOpen: null != t.sync_id,
onOpenSpotifyArtist: e => {
  null == l || l(t, n.id, e);
}
  }, s)]), null == o || '' === o) ? null : (0, i.jsx)('div', {
className: a()(I.ellipsisRow, I.colorHeaderSecondary, I.bodyTextSize),
children: o
  });
}

function v(e) {
  let {
activity: t
  } = e, n = null == t ? void 0 : t.state;
  return null == n || '' === n || (0, c.Z)(t) ? null : (0, i.jsx)('div', {
className: a()(I.ellipsisRow, I.colorHeaderSecondary, I.bodyTextSize, I.__invalid_activity),
children: n
  });
}

function Z(e) {
  let {
activity: t
  } = e;
  if (null == t || !(0, c.Z)(t))
return null;
  let {
timestamps: n
  } = t;
  if ((null == n ? void 0 : n.start) == null || (null == n ? void 0 : n.end) == null)
return null;
  let {
start: l,
end: r
  } = n;
  return (0, i.jsx)(u.Z, {
start: l,
end: r,
className: I.timeBar,
themed: !0,
singleLine: !0
  });
}

function T(e) {
  let {
activity: t,
embeddedApp: n,
user: r,
channel: a,
sortedVoiceStates: u,
onOpenSpotifyTrack: p,
onOpenSpotifyArtist: _,
onOpenSpotifyAlbum: f
  } = e, m = [];
  null != n ? m = Array.from(n.embeddedActivity.userIds) : (0, c.Z)(t) && null != u && (m = u.map(e => e.user.id));
  let T = (0, s.Wu)([h.default], () => m.map(e => h.default.getUser(e)).filter(g.lm)),
L = null != n || (0, c.Z)(t),
A = l.useMemo(() => {
  let e = new Map();
  return L && null != u && u.forEach(t => {
    let n = t.member;
    null != n && e.set(t.user.id, n);
  }), e;
}, [
  u,
  L
]);
  return L ? (0, i.jsxs)('div', {
className: I.flexColumn,
children: [
  (0, i.jsxs)('div', {
    className: I.flexRow,
    children: [
      (0, i.jsx)(N, {
        activity: t,
        user: r,
        embeddedApp: n,
        onOpenSpotifyAlbum: f
      }),
      (0, i.jsxs)('div', {
        className: I.detailsAndAvatarsContainer,
        children: [
          (0, i.jsx)(x, {
            activity: t,
            embeddedApp: n,
            onOpenSpotifyTrack: p
          }),
          (0, i.jsx)(S, {
            activity: t,
            user: r,
            onOpenSpotifyArtist: _
          }),
          (0, i.jsx)(v, {
            activity: t
          }),
          m.length > 0 && (0, i.jsx)(d.Z, {
            className: I.usersSummary,
            guildId: a.guild_id,
            users: T,
            size: E,
            max: 7,
            renderUser: e => {
              var t;
              if (null == e)
                return null;
              let n = A.get(e.id),
                l = null !== (t = null == n ? void 0 : n.nick) && void 0 !== t ? t : C.ZP.getName(e);
              return (0, i.jsx)(o.TooltipContainer, {
                text: l,
                position: 'bottom',
                children: (0, i.jsx)('img', {
                  src: e.getAvatarURL(a.guild_id, E),
                  alt: l,
                  className: I.avatar
                }, e.id)
              }, e.id);
            }
          })
        ]
      })
    ]
  }),
  (0, i.jsx)(Z, {
    activity: t
  })
]
  }) : null;
}