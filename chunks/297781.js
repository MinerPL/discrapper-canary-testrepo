t.d(n, {
  Af: function() {
return Z;
  },
  An: function() {
return w;
  },
  E6: function() {
return j;
  },
  EE: function() {
return p;
  },
  Gk: function() {
return H;
  },
  Gt: function() {
return r;
  },
  OV: function() {
return S;
  },
  Rg: function() {
return U;
  },
  U9: function() {
return F;
  },
  XF: function() {
return O;
  },
  Yl: function() {
return G;
  },
  f: function() {
return y;
  },
  gj: function() {
return P;
  },
  n8: function() {
return B;
  },
  pQ: function() {
return L;
  },
  v1: function() {
return D;
  }
});
var l, r, a = t(735250),
  o = t(470079),
  i = t(120356),
  u = t.n(i),
  s = t(913527),
  c = t.n(s),
  d = t(884439),
  E = t(705512),
  _ = t(442837),
  f = t(481060),
  T = t(70956),
  v = t(709054),
  m = t(719247),
  N = t(22211),
  x = t(561308),
  g = t(265048),
  h = t(371991),
  I = t(689938),
  M = t(945285);
(l = r || (r = {}))[l.CARD = 0] = 'CARD', l[l.POPOUT = 1] = 'POPOUT';
let A = o.createContext({});

function C() {
  return o.useContext(A);
}

function R(e) {
  let {
Icon: n,
text: t,
iconColor: l,
tooltipText: r,
showTooltip: o
  } = e, {
defaultTextColor: i,
defaultIconColor: u
  } = C();
  return (0, a.jsx)(f.Tooltip, {
text: r,
shouldShow: o,
children: e => (0, a.jsxs)('div', {
  className: M.badgeContainer,
  ...e,
  children: [
    (0, a.jsx)(n, {
      size: 'xxs',
      color: null != l ? l : u
    }),
    (0, a.jsx)(f.Text, {
      variant: 'text-xs/normal',
      color: i,
      className: M.badgeLabel,
      children: t
    })
  ]
})
  });
}

function Z(e) {
  let {
entry: n
  } = e, {
channel: t
  } = (0, N.Z)(n), {
location: l
  } = C();
  return null == t || 1 === l ? null : (0, a.jsx)(R, {
Icon: f.VoiceNormalIcon,
text: t.name
  });
}

function S(e) {
  let {
entry: n,
hovered: t
  } = e, {
defaultTextColor: l,
defaultIconColor: r,
location: o
  } = C(), i = 0 === o, u = (0, x.kr)(n), s = i && u ? f.tokens.colors.STATUS_POSITIVE : r, c = i && u ? 'text-positive' : l;
  return (0, a.jsxs)('div', {
className: M.badgeContainer,
children: [
  (0, a.jsx)(f.GameControllerIcon, {
    size: 'xxs',
    color: s
  }),
  (0, a.jsx)(h.ZP, {
    entry: n,
    textColor: c,
    hovered: t
  })
]
  });
}

function p(e) {
  var n, t, l, r;
  let {
entry: o
  } = e, {
defaultTextColor: i,
defaultIconColor: u
  } = C(), {
state: s,
party: c,
inExperiment: d
  } = (0, g.F)(o);
  if (!d)
return null;
  let E = null !== (l = null == c ? void 0 : null === (n = c.size) || void 0 === n ? void 0 : n[0]) && void 0 !== l ? l : void 0,
_ = null !== (r = null == c ? void 0 : null === (t = c.size) || void 0 === t ? void 0 : t[1]) && void 0 !== r ? r : void 0,
T = null != E && null != _ ? I.Z.Messages.CONTENT_INVENTORY_GAME_STATE_SIZE.format({
  count: E,
  max: _
}) : void 0,
v = null != T && null != s ? ''.concat(s, ' (').concat(T, ')') : null != s ? s : T;
  return null == v ? null : (0, a.jsxs)('div', {
className: M.badgeContainer,
children: [
  (0, a.jsx)(f.GroupIcon, {
    size: 'xxs',
    color: u
  }),
  (0, a.jsx)(f.Text, {
    variant: 'text-xs/normal',
    color: i,
    lineClamp: 1,
    children: v
  })
]
  });
}

function O(e) {
  var n;
  let {
entry: t,
hovered: l
  } = e, {
defaultTextColor: r,
defaultIconColor: o,
location: i
  } = C(), u = 0 === i, s = (0, _.e7)([m.Z], () => m.Z.getMatchingActivity(t));
  if ((null == s ? void 0 : s.timestamps) == null)
return null;
  let c = u ? f.tokens.colors.STATUS_POSITIVE : o,
d = null === (n = s.timestamps) || void 0 === n ? void 0 : n.start;
  return (0, a.jsxs)('div', {
className: M.badgeContainer,
children: [
  (0, a.jsx)(f.RecordPlayerIcon, {
    size: 'xxs',
    color: c
  }),
  (0, a.jsx)(h.x3, {
    entry: null != d ? {
      start: d
    } : t,
    textColor: u ? 'text-positive' : r,
    hovered: l
  })
]
  });
}

function P(e) {
  let {
entry: n
  } = e, {
location: t
  } = C(), l = 0 === t ? f.tokens.colors.STATUS_POSITIVE : void 0;
  return (0, x.Ol)(n) ? (0, a.jsx)(R, {
Icon: f.NewUserSmallIcon,
text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_PLAYER,
iconColor: l
  }) : null;
}

function L(e) {
  let {
entry: n
  } = e, {
location: t
  } = C();
  if (!(0, x.V5)(n))
return null;
  let l = (0, x.kr)(n),
r = 0 === t,
o = r || l ? (0, x.z5)(n) : (0, x.nB)(n);
  return (0, a.jsx)(R, {
Icon: f.TimerIcon,
text: o,
tooltipText: (0, x.EX)(n),
showTooltip: r && !l
  });
}

function D(e) {
  let {
entry: n
  } = e, {
location: t
  } = C(), l = (0, x.dw)(n);
  if (null == l)
return null;
  let r = (0, x.GE)(l);
  return (0, a.jsx)(R, {
Icon: f.RetryIcon,
showTooltip: 0 === t,
tooltipText: r,
text: 1 === t ? r : I.Z.Messages.MEMBER_LIST_CONTENT_FEED_RESURRECTED
  });
}

function y(e) {
  let {
entry: n
  } = e, {
location: t
  } = C(), l = (0, x.vU)(n);
  return (0, x.q_)(n) ? (0, a.jsx)(R, {
Icon: f.FlashIcon,
showTooltip: 0 === t,
text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_DAYS.format({
  days: l
}),
tooltipText: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_STREAK_TOOLTIP.format({
  days: l
})
  }) : null;
}

function j(e) {
  let {
entry: n
  } = e, {
location: t
  } = C(), l = (0, x.yA)(n);
  if (null == l)
return null;
  let r = 1 === t,
o = r ? I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS_THIS_WEEK : I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TIMESTAMP_HOURS;
  return (0, a.jsx)(R, {
Icon: f.TrophyIcon,
text: (0, a.jsxs)(a.Fragment, {
  children: [
    I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_GAME,
    r ? ' \u2014 ' : ': ',
    o.format({
      hours: Math.round(l / T.Z.Seconds.HOUR)
    })
  ]
})
  });
}

function w(e) {
  var n;
  let {
entry: t
  } = e, {
location: l
  } = C(), r = null === (n = (0, x.PJ)(t, d.N.AGGREGATE_COUNT)) || void 0 === n ? void 0 : n.count;
  if (null == r)
return null;
  let o = 1 === l ? I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TOP_ARTIST_TRACKS_THIS_WEEK.format({
count: r
  }) : I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRACKS_THIS_WEEK.format({
count: r
  });
  return (0, a.jsx)(R, {
Icon: f.TrophyIcon,
text: o
  });
}

function B(e) {
  let {
entry: n
  } = e, t = (0, x.ig)(n);
  return null == t || t === E.o.TRENDING_TYPE_UNSPECIFIED ? null : (0, a.jsx)(R, {
Icon: f.FireIcon,
text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_TRENDING
  });
}

function F(e) {
  let {
entry: n
  } = e, t = v.default.extractTimestamp(n.extra.application_id);
  return c()().diff(c()(t), 'days') > 7 ? null : (0, a.jsx)(R, {
Icon: f.StarShootingIcon,
text: I.Z.Messages.MEMBER_LIST_CONTENT_FEED_NEW_RELEASE
  });
}

function G(e) {
  let {
entry: n,
hovered: t
  } = e, {
defaultTextColor: l,
defaultIconColor: r
  } = C();
  return (0, a.jsxs)('div', {
className: M.badgeContainer,
children: [
  (0, a.jsx)(f.TvIcon, {
    size: 'xxs',
    color: r
  }),
  (0, a.jsx)(h.ZP, {
    entry: n,
    textColor: l,
    hovered: t
  })
]
  });
}

function U(e) {
  var n;
  let {
entry: t
  } = e, l = /\w+ (\d+), \w+ (\d+)/.exec(null !== (n = t.extra.media_assets_large_text) && void 0 !== n ? n : ''), r = null != l ? I.Z.Messages.MEMBER_LIST_CONTENT_FEED_WATCH_SEASON_EPISODE.format({
seasonNum: l[1],
episodeNum: l[2]
  }) : null;
  return (0, a.jsx)(R, {
Icon: f.TopicsIcon,
text: r
  });
}

function H(e) {
  let {
location: n,
children: t
  } = e, l = {};
  return l = 0 === n ? {
defaultTextColor: 'text-secondary'
  } : {
defaultTextColor: 'content-inventory-overlay-text-secondary',
defaultIconColor: f.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY
  }, (0, a.jsx)(A.Provider, {
value: {
  location: n,
  ...l
},
children: (0, a.jsx)('div', {
  className: u()(M.badgesContainer, {
    [M.badgesContainerCard]: 0 === n,
    [M.badgesContainerPopout]: 1 === n
  }),
  children: t
})
  });
}