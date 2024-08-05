n.d(t, {
  Af: function() {
return M;
  },
  An: function() {
return V;
  },
  E6: function() {
return F;
  },
  EE: function() {
return U;
  },
  Gk: function() {
return W;
  },
  Gt: function() {
return i;
  },
  OV: function() {
return P;
  },
  PZ: function() {
return K;
  },
  Rg: function() {
return j;
  },
  U9: function() {
return Z;
  },
  XF: function() {
return w;
  },
  Yl: function() {
return Y;
  },
  ej: function() {
return b;
  },
  f: function() {
return B;
  },
  gj: function() {
return x;
  },
  m7: function() {
return L;
  },
  n8: function() {
return H;
  },
  pQ: function() {
return G;
  },
  v1: function() {
return k;
  }
});
var r, i, a = n(735250),
  s = n(470079),
  o = n(120356),
  l = n.n(o),
  u = n(913527),
  c = n.n(u),
  d = n(876215),
  _ = n(884439),
  E = n(705512),
  f = n(442837),
  h = n(481060),
  p = n(70956),
  m = n(823379),
  I = n(709054),
  T = n(719247),
  g = n(22211),
  S = n(561308),
  A = n(797342),
  N = n(371991),
  v = n(206583),
  O = n(689938),
  R = n(945285);
let C = {
  [d.s.TOP_ARTIST]: [V],
  [d.s.PLAYED_GAME]: [
P,
U,
M,
Z,
x,
B,
H,
k,
G
  ],
  [d.s.TOP_GAME]: [F],
  [d.s.WATCHED_MEDIA]: [
Y,
j
  ]
};
(r = i || (i = {}))[r.CARD = 0] = 'CARD', r[r.POPOUT = 1] = 'POPOUT', r[r.GAME_PROFILE = 2] = 'GAME_PROFILE', r[r.USER_PROFILE = 3] = 'USER_PROFILE', r[r.EMBED = 4] = 'EMBED';
let y = s.createContext({});

function D() {
  return s.useContext(y);
}

function L(e) {
  let {
children: t,
...n
  } = e;
  return (0, a.jsx)('div', {
className: R.badgeContainer,
...n,
children: t
  });
}

function b(e) {
  let {
Icon: t,
text: n,
iconColor: r,
tooltipText: i,
showTooltip: s
  } = e, {
defaultTextColor: o,
defaultIconColor: l
  } = D();
  return (0, a.jsx)(h.Tooltip, {
text: i,
shouldShow: s,
children: e => (0, a.jsxs)(L, {
  ...e,
  children: [
    (0, a.jsx)(t, {
      size: 'xxs',
      color: null != r ? r : l
    }),
    (0, a.jsx)(h.Text, {
      variant: 'text-xs/normal',
      color: o,
      className: R.badgeLabel,
      children: n
    })
  ]
})
  });
}

function M(e) {
  let {
entry: t
  } = e, {
channel: n
  } = (0, g.Z)(t), {
location: r
  } = D();
  return null == n || (0, m.Hi)(r, [
1,
2,
3
  ]) ? null : (0, a.jsx)(b, {
Icon: h.VoiceNormalIcon,
text: n.name
  });
}

function P(e) {
  let {
entry: t,
hovered: n
  } = e, {
defaultTextColor: r,
defaultIconColor: i,
location: s
  } = D(), o = (0, S.kr)(t) && (0, m.Hi)(s, [
0,
3
  ]), l = o ? h.tokens.colors.TEXT_POSITIVE : i, {
streamPreviewUrl: u
  } = (0, g.Z)(t);
  return (0, a.jsxs)(L, {
children: [
  null == u ? (0, a.jsx)(h.GameControllerIcon, {
    size: 'xxs',
    color: l
  }) : (0, a.jsx)(h.ScreenArrowIcon, {
    size: 'xxs',
    color: l
  }),
  (0, a.jsx)(N.ZP, {
    entry: t,
    textColor: o ? 'text-positive' : r,
    hovered: n,
    bold: !0
  })
]
  });
}

function U(e) {
  let {
entry: t
  } = e, {
defaultTextColor: n,
defaultIconColor: r
  } = D(), {
state: i,
party: s,
inExperiment: o
  } = (0, A.n)(t);
  if (!o)
return null;
  let l = (0, S.bT)(i, s);
  return null == l ? null : (0, a.jsxs)(L, {
children: [
  (0, a.jsx)(h.GroupIcon, {
    size: 'xxs',
    color: r
  }),
  (0, a.jsx)(h.Text, {
    variant: 'text-xs/normal',
    color: n,
    lineClamp: 1,
    children: l
  })
]
  });
}

function w(e) {
  var t;
  let {
entry: n,
hovered: r
  } = e, {
defaultTextColor: i,
defaultIconColor: s,
location: o
  } = D(), l = (0, f.e7)([T.Z], () => T.Z.getMatchingActivity(n));
  if ((null == l ? void 0 : l.timestamps) == null)
return null;
  let u = (0, m.Hi)(o, [
  0,
  3
]),
c = u ? h.tokens.colors.TEXT_POSITIVE : s,
d = null === (t = l.timestamps) || void 0 === t ? void 0 : t.start;
  return (0, a.jsxs)('div', {
className: R.badgeContainer,
children: [
  (0, a.jsx)(h.RecordPlayerIcon, {
    size: 'xxs',
    color: c
  }),
  (0, a.jsx)(N.x3, {
    entry: null != d ? {
      start: d
    } : n,
    textColor: u ? 'text-positive' : i,
    hovered: r,
    bold: !0
  })
]
  });
}

function x(e) {
  let {
entry: t
  } = e, {
location: n
  } = D(), r = 0 === n ? h.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, S.Ol)(t) ? (0, a.jsx)(b, {
Icon: h.NewUserSmallIcon,
text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
iconColor: r
  }) : null;
}

function G(e) {
  let {
entry: t
  } = e, {
location: n
  } = D();
  if (!(0, S.V5)(t))
return null;
  let r = (0, S.kr)(t),
{
  text: i,
  tooltipText: s
} = (0, S.zo)(t);
  return (0, a.jsx)(b, {
Icon: h.TimerIcon,
text: i,
tooltipText: s,
showTooltip: 0 === n && !r
  });
}

function k(e) {
  let {
entry: t
  } = e, {
location: n
  } = D(), r = 0 !== n, i = (0, S.dw)(t);
  if (null == i)
return null;
  let s = (0, S.GE)(i);
  return (0, a.jsx)(b, {
Icon: h.RetryIcon,
showTooltip: !r,
tooltipText: s,
text: r ? s : O.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  });
}

function B(e) {
  let {
entry: t
  } = e, {
location: n
  } = D(), r = (0, S.vU)(t);
  return (0, S.q_)(t) ? (0, a.jsx)(b, {
Icon: h.FlashIcon,
showTooltip: 0 === n,
text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
  days: r
}),
tooltipText: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
  days: r
})
  }) : null;
}

function F(e) {
  let {
entry: t
  } = e, {
location: n
  } = D(), r = 0 !== n, i = (0, S.yA)(t);
  if (null == i)
return null;
  let s = r ? O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, a.jsx)(b, {
Icon: h.TrophyIcon,
text: (0, a.jsxs)(a.Fragment, {
  children: [
    O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
    r ? ' \u2014 ' : ': ',
    s.format({
      hours: Math.round(i / p.Z.Seconds.HOUR)
    })
  ]
})
  });
}

function V(e) {
  var t;
  let {
entry: n
  } = e, {
location: r
  } = D(), i = null === (t = (0, S.PJ)(n, _.N.AGGREGATE_COUNT)) || void 0 === t ? void 0 : t.count;
  if (null == i)
return null;
  let s = (0, m.Hi)(r, [
1,
4
  ]) ? O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
count: i
  }) : O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
count: i
  });
  return (0, a.jsx)(b, {
Icon: h.TrophyIcon,
text: s
  });
}

function H(e) {
  let {
entry: t
  } = e, {
location: n
  } = D();
  if (2 === n)
return null;
  let r = (0, S.ig)(t);
  return null == r || r === E.o.TRENDING_TYPE_UNSPECIFIED ? null : (0, a.jsx)(b, {
Icon: h.FireIcon,
text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  });
}

function Z(e) {
  let {
entry: t
  } = e, {
location: n
  } = D();
  if (2 === n)
return null;
  let r = I.default.extractTimestamp(t.extra.application_id);
  return c()().diff(c()(r), 'days') > v.G ? null : (0, a.jsx)(b, {
Icon: h.StarShootingIcon,
text: O.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  });
}

function Y(e) {
  let {
entry: t,
hovered: n
  } = e, {
defaultTextColor: r,
defaultIconColor: i,
location: s
  } = D(), o = (0, S.kr)(t) && 3 === s, l = o ? h.tokens.colors.TEXT_POSITIVE : i;
  return (0, a.jsxs)('div', {
className: R.badgeContainer,
children: [
  (0, a.jsx)(h.TvIcon, {
    size: 'xxs',
    color: l
  }),
  (0, a.jsx)(N.ZP, {
    entry: t,
    textColor: o ? 'text-positive' : r,
    hovered: n,
    bold: !0
  })
]
  });
}

function j(e) {
  let {
entry: t
  } = e, n = (0, S.ap)(t.extra.media_assets_large_text);
  return null == n ? null : (0, a.jsx)(b, {
Icon: h.TopicsIcon,
text: n
  });
}

function W(e) {
  let t, {
location: n,
children: r,
className: i
  } = e;
  return t = (0, m.Hi)(n, [
1,
4
  ]) ? {
defaultTextColor: 'content-inventory-overlay-text-secondary',
defaultIconColor: h.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  } : {
defaultTextColor: 'text-secondary'
  }, (0, a.jsx)(y.Provider, {
value: {
  location: n,
  ...t
},
children: (0, a.jsx)('div', {
  className: l()(R.badgesContainer, {
    [R.badgesContainerCard]: 0 === n,
    [R.badgesContainerPopout]: 1 === n,
    [R.badgesContainerGameProfile]: 2 === n
  }, i),
  children: r
})
  });
}

function K(e) {
  let {
entry: t,
location: n,
className: r
  } = e, i = function(e) {
switch (e.content_type) {
  case d.s.TOP_ARTIST:
    return C[e.content_type].map((t, n) => (0, a.jsx)(t, {
      entry: e
    }, n));
  case d.s.PLAYED_GAME:
    return C[e.content_type].map((t, n) => (0, a.jsx)(t, {
      entry: e
    }, n));
  case d.s.TOP_GAME:
    return C[e.content_type].map((t, n) => (0, a.jsx)(t, {
      entry: e
    }, n));
  case d.s.WATCHED_MEDIA:
    return C[e.content_type].map((t, n) => (0, a.jsx)(t, {
      entry: e
    }, n));
  default:
    return null;
}
  }(t);
  return null == i ? null : (0, a.jsx)(W, {
location: n,
className: r,
children: i
  });
}