n.d(t, {
  EK: function() {
return U;
  },
  Io: function() {
return L;
  },
  NY: function() {
return M;
  },
  Ox: function() {
return C;
  },
  Vq: function() {
return D;
  },
  Wf: function() {
return P;
  },
  cB: function() {
return y;
  },
  dy: function() {
return O;
  },
  mb: function() {
return b;
  },
  wP: function() {
return R;
  }
});
var r = n(735250);
n(470079);
var i = n(442837),
  a = n(481060),
  s = n(596454),
  o = n(99690),
  l = n(607070),
  u = n(797610),
  c = n(754688),
  d = n(699450),
  _ = n(124072),
  E = n(763296),
  f = n(592125),
  h = n(430824),
  p = n(246946),
  m = n(594174),
  I = n(934415),
  T = n(5192),
  g = n(51144),
  S = n(377668),
  A = n(689938),
  N = n(545408),
  v = n(153521);

function O(e) {
  let {
emoji: t
  } = e;
  return (0, r.jsx)(a.Tooltip, {
text: t.name,
delay: 750,
position: 'top',
children: e => (0, r.jsx)(s.Z, {
  src: t.src,
  emojiName: t.name,
  animated: !1,
  ...e
})
  });
}

function R(e) {
  let {
emoji: t
  } = e;
  return (0, r.jsx)(a.Tooltip, {
text: t.name,
delay: 750,
position: 'top',
children: e => (0, r.jsx)(s.Z, {
  emojiId: t.emojiId,
  emojiName: t.name,
  animated: t.animated,
  ...e
})
  });
}

function C(e) {
  let {
text: t,
channelId: n,
guildId: i
  } = e, a = h.Z.getGuild(i), s = f.Z.getChannel(n), o = (0, u.Ib)(a, s) && '@Clyde' === t ? S.jM : null;
  return (0, r.jsx)(_.Z, {
color: o,
children: t
  });
}

function y(e) {
  let {
id: t,
guildId: n,
channelId: s
  } = e, l = (0, i.e7)([m.default], () => m.default.getUser(t)), u = (0, i.e7)([p.Z], () => p.Z.hidePersonalInformation), c = T.ZP.useName(n, s, l), d = (0, r.jsx)(_.Z, {
children: null == c ? '<@'.concat(t, '>') : '@'.concat(c)
  });
  if (null != l) {
let e = u || l.isPomelo() ? null : '#'.concat(l.discriminator);
return (0, r.jsx)(a.Tooltip, {
  text: (0, r.jsxs)('div', {
    className: N.userTooltip,
    children: [
      (0, r.jsx)(o.Z, {
        user: l,
        animate: !0,
        size: a.AvatarSizes.SIZE_16,
        className: N.avatar
      }),
      g.ZP.getUserTag(l, {
        mode: 'username',
        identifiable: u ? 'never' : 'always'
      }),
      (0, r.jsx)('span', {
        className: N.discriminator,
        children: e
      })
    ]
  }),
  delay: 750,
  position: 'top',
  'aria-label': g.ZP.getUserTag(l, {
    decoration: 'never'
  }),
  children: e => (0, r.jsx)(a.Clickable, {
    tag: 'span',
    ...e,
    children: d
  })
});
  }
  return d;
}

function D(e) {
  let {
id: t,
guildId: n
  } = e, s = (0, i.e7)([h.Z], () => null != n ? h.Z.getRole(n, t) : void 0), o = (0, i.e7)([l.Z], () => l.Z.roleStyle);
  if (null == s)
return (0, r.jsxs)('span', {
  children: [
    '@',
    A.Z.Messages.UNKNOWN_ROLE_PLACEHOLDER
  ]
});
  let u = null != s.color && 0 !== s.color;
  return (0, r.jsxs)(_.Z, {
color: 'username' === o && u ? s.color : null,
children: [
  'dot' === o && (0, r.jsx)(a.RoleDot, {
    color: s.colorString,
    background: !1,
    tooltip: !1
  }),
  '@',
  s.name
]
  });
}

function L(e) {
  let {
id: t
  } = e, n = (0, i.e7)([f.Z], () => f.Z.getChannel(t)), a = A.Z.Messages.UNKNOWN_CHANNEL.toLowerCase(), s = 'text', o = !0;
  if (null != n) {
var l;
a = (0, c.YO)(n) ? n.name : A.Z.Messages.NO_ACCESS, s = (0, c.YO)(n) ? null !== (l = (0, I.wl)(n)) && void 0 !== l ? l : 'text' : 'locked', o = (0, d.B)(n.type);
  }
  return o ? (0, r.jsx)(_.Z, {
iconType: s,
children: a
  }) : (0, r.jsx)('span', {
children: '#' + a
  });
}

function b(e) {
  var t;
  let {
id: n
  } = e, a = (0, i.e7)([E.Z], () => E.Z.getSoundById(n));
  return (0, r.jsx)(_.Z, {
children: null !== (t = null == a ? void 0 : a.name) && void 0 !== t ? t : 'Sound'
  });
}

function M(e) {
  let {
id: t
  } = e, n = {
home: A.Z.Messages.SERVER_GUIDE,
guide: A.Z.Messages.SERVER_GUIDE,
browse: A.Z.Messages.CHANNEL_BROWSER_TITLE,
customize: A.Z.Messages.CHANNELS_AND_ROLES
  };
  return (0, r.jsx)(_.Z, {
iconType: t,
children: n[t]
  });
}

function P(e) {
  let {
text: t,
id: n
  } = e;
  return (0, r.jsxs)(_.Z, {
children: [
  t,
  '(',
  n,
  ')'
]
  });
}

function U(e) {
  let {
timestamp: t
  } = e;
  return (0, r.jsx)('span', {
className: v.timestamp,
children: t.formatted
  });
}