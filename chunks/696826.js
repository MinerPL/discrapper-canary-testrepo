n.d(t, {
  Dk: function() {
return S;
  },
  P5: function() {
return N;
  },
  QF: function() {
return I;
  },
  Sk: function() {
return _.Skl;
  },
  W5: function() {
return O;
  },
  lm: function() {
return m;
  },
  qb: function() {
return R;
  },
  rs: function() {
return v;
  },
  vP: function() {
return A;
  },
  vj: function() {
return p;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(780384),
  u = n(481060),
  c = n(44315),
  d = n(806519),
  _ = n(981631),
  E = n(182294),
  f = n(62053);
let h = {
  tension: 600,
  friction: 70
};

function p(e, t) {
  let n = (0, c.Sl)(function(e) {
  switch (e) {
    case _.Skl.ONLINE:
      return _.Ilk.GREEN_360;
    case _.Skl.IDLE:
      return _.Ilk.YELLOW_300;
    case _.Skl.DND:
      return _.Ilk.RED_400;
    case _.Skl.STREAMING:
      return _.Ilk.TWITCH;
    case _.Skl.INVISIBLE:
    case _.Skl.UNKNOWN:
    case _.Skl.OFFLINE:
    default:
      return _.Ilk.PRIMARY_400;
  }
}(e)).hex,
r = (0, c.K3)(null != t ? t : n);
  return null != r ? r : void 0;
}

function m(e, t) {
  return t === E.VZ.WHITE && e === _.Skl.IDLE ? E.d_.HIGH : E.d_.LOW;
}

function I(e) {
  return (0, l.wj)(e) ? E.VZ.BLACK : E.VZ.WHITE;
}

function T(e, t, n, r) {
  return 'scale('.concat(t, ') translate(').concat(0.5625 * e + r, ' ').concat(0.75 * e + n, ')');
}

function g(e, t, n) {
  return ''.concat(0.5625 * e + n, 'px ').concat(0.75 * e + t, 'px');
}

function S(e) {
  let {
size: t,
status: n,
isMobile: r,
isTyping: i,
topOffset: a = 0,
leftOffset: s = 0
  } = e, o = a / 8 * t, l = s / 8 * t;
  if (i)
return {
  bgRadius: 0.5 * t,
  bgY: 0.25 * t + o,
  bgX: 0,
  bgHeight: t,
  bgWidth: t * E.D6,
  cutoutX: 0.5 * t + l,
  cutoutY: 0.75 * t + o,
  cutoutWidth: 0,
  cutoutHeight: 0,
  cutoutRadius: 0,
  polygonScale: T(t, 0, o, l),
  polygonOrigin: g(t, o, l),
  dotY: 0.75 * t + o,
  dotX: 0.5 * t + l,
  dotRadius: 0
};
  switch (n) {
case _.Skl.ONLINE:
  if (r)
    return {
      bgRadius: t * E.EW * E.e7,
      bgY: 0,
      bgX: l,
      bgHeight: t * E.EW,
      bgWidth: t,
      cutoutX: 0.125 * t + l,
      cutoutY: 0.25 * t,
      cutoutWidth: 0.75 * t,
      cutoutHeight: 0.75 * t,
      cutoutRadius: 0,
      polygonScale: T(t, 0, o, l),
      polygonOrigin: g(t, o, l),
      dotY: 1.25 * t,
      dotX: 0.5 * t + l,
      dotRadius: 0.125 * t
    };
  return {
    bgRadius: 0.5 * t,
      bgY: 0.25 * t + o,
      bgX: l,
      bgHeight: t,
      bgWidth: t,
      cutoutX: 0.5 * t + l,
      cutoutY: 0.75 * t + o,
      cutoutWidth: 0,
      cutoutHeight: 0,
      cutoutRadius: 0,
      polygonScale: T(t, 0, o, l),
      polygonOrigin: g(t, o, l),
      dotY: 0.75 * t + o,
      dotX: 0.5 * t + l,
      dotRadius: 0
  };
case _.Skl.IDLE:
  return {
    bgRadius: 0.5 * t,
      bgY: 0.25 * t + o,
      bgX: l,
      bgHeight: t,
      bgWidth: t,
      cutoutX: -(0.125 * t) + l,
      cutoutY: 0.125 * t + o,
      cutoutWidth: 0.75 * t,
      cutoutHeight: 0.75 * t,
      cutoutRadius: 0.375 * t,
      polygonScale: T(t, 0, o, l),
      polygonOrigin: g(t, o, l),
      dotY: 0.75 * t + o,
      dotX: 0.5 * t + l,
      dotRadius: 0
  };
case _.Skl.DND:
  return {
    bgRadius: 0.5 * t,
      bgY: 0.25 * t + o,
      bgX: l,
      bgHeight: t,
      bgWidth: t,
      cutoutX: 0.125 * t + l,
      cutoutY: 0.625 * t + o,
      cutoutWidth: 0.75 * t,
      cutoutHeight: 0.25 * t,
      cutoutRadius: 0.125 * t,
      polygonScale: T(t, 0, o, l),
      polygonOrigin: g(t, o, l),
      dotY: 0.75 * t + o,
      dotX: 0.5 * t + l,
      dotRadius: 0
  };
case _.Skl.STREAMING:
  return {
    bgRadius: 0.5 * t,
      bgY: 0.25 * t + o,
      bgX: l,
      bgHeight: t,
      bgWidth: t,
      cutoutX: 0.5 * t + l,
      cutoutY: 0.75 * t + o,
      cutoutWidth: 0,
      cutoutHeight: 0,
      cutoutRadius: 0.25 * t,
      polygonScale: T(t, 1, o, l),
      polygonOrigin: g(t, o, l),
      dotY: 0.75 * t + o,
      dotX: 0.5 * t + l,
      dotRadius: 0
  };
case _.Skl.INVISIBLE:
case _.Skl.UNKNOWN:
case _.Skl.OFFLINE:
default:
  return {
    bgRadius: 0.5 * t,
      bgY: 0.25 * t + o,
      bgX: l,
      bgHeight: t,
      bgWidth: t,
      cutoutX: 0.25 * t + l,
      cutoutY: 0.5 * t + o,
      cutoutWidth: 0.5 * t,
      cutoutHeight: 0.5 * t,
      cutoutRadius: 0.25 * t,
      polygonScale: T(t, 0, o, l),
      polygonOrigin: g(t, o, l),
      dotY: 0.75 * t + o,
      dotX: 0.5 * t + l,
      dotRadius: 0
  };
  }
}

function A(e, t, n) {
  var i;
  let {
bgRadius: a,
bgY: s,
bgX: l,
bgHeight: u,
bgWidth: c,
cutoutX: d,
cutoutY: _,
cutoutWidth: E,
cutoutHeight: f,
cutoutRadius: h,
polygonScale: p,
polygonOrigin: m,
dotY: I,
dotX: T,
dotRadius: g
  } = e;
  return (0, r.jsxs)('mask', {
id: n,
children: [
  (0, r.jsx)(o.animated.rect, {
    x: l,
    y: s,
    width: c,
    height: u,
    rx: a,
    ry: a,
    fill: 'white'
  }),
  (0, r.jsx)(o.animated.rect, {
    x: d,
    y: _,
    width: E,
    height: f,
    rx: h,
    ry: h,
    fill: 'black'
  }),
  (0, r.jsx)(o.animated.polygon, {
    points: (i = t, '-'.concat(0.216506 * i, ',-').concat(0.25 * i, ' ').concat(0.216506 * i, ',0 -').concat(0.216506 * i, ',').concat(0.25 * i)),
    fill: 'black',
    transform: p,
    style: {
      transformOrigin: m
    }
  }),
  (0, r.jsx)(o.animated.circle, {
    fill: 'black',
    cx: T,
    cy: I,
    r: g
  })
]
  });
}

function N(e) {
  let {
status: t,
isMobile: n = !1,
size: a = 8,
color: l,
className: c,
style: d
  } = e, m = i.useId(), I = t === _.Skl.ONLINE && n, T = i.useMemo(() => S({
size: a,
status: t,
isMobile: I
  }), [
a,
t,
I
  ]), g = (0, u.useSpring)({
config: h,
to: T
  }, 'animate-always'), N = p(t, l), [{
fill: v
  }] = (0, u.useSpring)({
config: h,
fill: N
  }, 'animate-always', [N]), O = Math.ceil(a * E.EW);
  return (0, r.jsxs)('svg', {
width: a,
height: O,
viewBox: '0 0 '.concat(a, ' ').concat(O),
className: s()(f.mask, c),
style: d,
children: [
  A(g, a, m),
  (0, r.jsx)(o.animated.rect, {
    x: 0,
    y: 0,
    width: a,
    height: O,
    fill: v,
    mask: 'url(#'.concat(m, ')')
  })
]
  });
}

function v(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (n)
return d.ZP.Masks.STATUS_TYPING;
  switch (e) {
case _.Skl.IDLE:
  return d.ZP.Masks.STATUS_IDLE;
case _.Skl.DND:
  return d.ZP.Masks.STATUS_DND;
case _.Skl.STREAMING:
  return d.ZP.Masks.STATUS_STREAMING;
case _.Skl.INVISIBLE:
case _.Skl.UNKNOWN:
case _.Skl.OFFLINE:
  return d.ZP.Masks.STATUS_OFFLINE;
case _.Skl.ONLINE:
default:
  if (t)
    return d.ZP.Masks.STATUS_ONLINE_MOBILE;
  return d.ZP.Masks.STATUS_ONLINE;
  }
}

function O(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return t === _.Skl.ONLINE && n && !r ? {
width: e,
height: e * E.EW
  } : {
width: r ? e * E.D6 : e,
height: e
  };
}

function R(e) {
  let {
status: t,
isMobile: n = !1,
size: i = 8,
className: a,
style: o,
color: l
  } = e, u = t === _.Skl.ONLINE && n, c = p(t, l);
  return (0, r.jsx)(d.ZP, {
mask: v(t, u),
className: s()(f.mask, a),
style: o,
...O(i, t, u),
children: (0, r.jsx)('div', {
  style: {
    backgroundColor: c
  },
  className: f.status
})
  });
}