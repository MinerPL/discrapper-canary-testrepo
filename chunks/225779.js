n.d(t, {
  DM: function() {
return _;
  },
  Ey: function() {
return E;
  },
  No: function() {
return f;
  },
  Ry: function() {
return p;
  },
  qX: function() {
return m;
  },
  u3: function() {
return h;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(873546),
  s = n(481060),
  l = n(626135),
  u = n(981631),
  c = n(689938),
  d = n(581611);
let _ = Object.freeze({
  DEFAULT: d.colorDefault,
  NEUTRAL: d.colorNeutral,
  BRAND: d.colorBrand,
  WARNING: d.colorWarning,
  DANGER: d.colorDanger,
  INFO: d.colorInfo,
  STREAMER_MODE: d.colorStreamerMode,
  CUSTOM: d.colorCustom,
  SPOTIFY: d.colorSpotify,
  PLAYSTATION: d.colorPlayStation,
  PREMIUM_TIER_0: d.colorPremiumTier0,
  PREMIUM_TIER_1: d.colorPremiumTier1,
  PREMIUM_TIER_2: d.colorPremiumTier2
});

function E(e) {
  let {
children: t,
className: n,
minor: i = !1,
...o
  } = e;
  return (0, r.jsx)(s.FocusRing, {
children: (0, r.jsx)('button', {
  className: a()(d.button, n, {
    [d.buttonMinor]: i
  }),
  ...o,
  children: t
})
  });
}

function f(e) {
  let {
children: t,
noticeType: n,
additionalTrackingProps: i,
...a
  } = e;
  return (0, r.jsx)(E, {
...a,
onClick: e => {
  var t, r;
  null != a.onClick && a.onClick(e), t = n, r = i, null != t && l.default.track(u.rMx.APP_NOTICE_PRIMARY_CTA_OPENED, {
    notice_type: t,
    ...r
  });
},
children: t
  });
}

function h(e) {
  let {
children: t,
href: n,
...i
  } = e;
  return (0, r.jsx)(s.Anchor, {
...i,
className: d.button,
href: n,
children: t
  });
}

function p(e) {
  let {
onClick: t,
noticeType: n
  } = e;
  return (0, r.jsx)(s.Clickable, {
focusProps: {
  offset: 6
},
className: d.closeButton,
onClick: () => {
  var e;
  t(), null != (e = n) && l.default.track(u.rMx.APP_NOTICE_CLOSED, {
    notice_type: e
  });
},
'aria-label': c.Z.Messages.DISMISS,
children: (0, r.jsx)(s.CloseSmallIcon, {
  size: 'sm',
  color: 'currentColor',
  className: d.closeIcon
})
  });
}

function m(e) {
  let {
color: t = _.DEFAULT,
className: n,
style: i,
children: s
  } = e;
  return (0, r.jsx)('div', {
className: a()(d.notice, {
  [d.isMobile]: o.tq
}, n, t),
style: null != i ? i : void 0,
children: s
  });
}