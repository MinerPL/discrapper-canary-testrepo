"use strict";
n.d(t, {
  Dk: function() {
    return A
  },
  P5: function() {
    return O
  },
  QF: function() {
    return S
  },
  Sk: function() {
    return d.Skl
  },
  W5: function() {
    return C
  },
  lm: function() {
    return h
  },
  qb: function() {
    return p
  },
  rs: function() {
    return R
  },
  vP: function() {
    return m
  },
  vj: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(780384),
  u = n(44315),
  _ = n(806519),
  d = n(981631),
  c = n(182294),
  E = n(824250);
let I = {
  tension: 600,
  friction: 70
};

function T(e, t) {
  let n = (0, u.Sl)(function(e) {
      switch (e) {
        case d.Skl.ONLINE:
          return d.Ilk.GREEN_360;
        case d.Skl.IDLE:
          return d.Ilk.YELLOW_300;
        case d.Skl.DND:
          return d.Ilk.RED_400;
        case d.Skl.STREAMING:
          return d.Ilk.TWITCH;
        case d.Skl.INVISIBLE:
        case d.Skl.UNKNOWN:
        case d.Skl.OFFLINE:
        default:
          return d.Ilk.PRIMARY_400
      }
    }(e)).hex,
    i = (0, u.K3)(null != t ? t : n);
  return null != i ? i : void 0
}

function h(e, t) {
  return t === c.VZ.WHITE && e === d.Skl.IDLE ? c.d_.HIGH : c.d_.LOW
}

function S(e) {
  return (0, l.wj)(e) ? c.VZ.BLACK : c.VZ.WHITE
}

function f(e, t, n, i) {
  return "scale(".concat(t, ") translate(").concat(.5625 * e + i, " ").concat(.75 * e + n, ")")
}

function N(e, t, n) {
  return "".concat(.5625 * e + n, "px ").concat(.75 * e + t, "px")
}

function A(e) {
  let {
    size: t,
    status: n,
    isMobile: i,
    isTyping: r,
    topOffset: s = 0,
    leftOffset: o = 0
  } = e, a = s / 8 * t, l = o / 8 * t;
  if (r) return {
    bgRadius: .5 * t,
    bgY: .25 * t + a,
    bgX: 0,
    bgHeight: t,
    bgWidth: t * c.D6,
    cutoutX: .5 * t + l,
    cutoutY: .75 * t + a,
    cutoutWidth: 0,
    cutoutHeight: 0,
    cutoutRadius: 0,
    polygonScale: f(t, 0, a, l),
    polygonOrigin: N(t, a, l),
    dotY: .75 * t + a,
    dotX: .5 * t + l,
    dotRadius: 0
  };
  switch (n) {
    case d.Skl.ONLINE:
      if (i) return {
        bgRadius: t * c.EW * c.e7,
        bgY: 0,
        bgX: l,
        bgHeight: t * c.EW,
        bgWidth: t,
        cutoutX: .125 * t + l,
        cutoutY: .25 * t,
        cutoutWidth: .75 * t,
        cutoutHeight: .75 * t,
        cutoutRadius: 0,
        polygonScale: f(t, 0, a, l),
        polygonOrigin: N(t, a, l),
        dotY: 1.25 * t,
        dotX: .5 * t + l,
        dotRadius: .125 * t
      };
      return {
        bgRadius: .5 * t, bgY: .25 * t + a, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + a, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: 0, polygonScale: f(t, 0, a, l), polygonOrigin: N(t, a, l), dotY: .75 * t + a, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.IDLE:
      return {
        bgRadius: .5 * t, bgY: .25 * t + a, bgX: l, bgHeight: t, bgWidth: t, cutoutX: -(.125 * t) + l, cutoutY: .125 * t + a, cutoutWidth: .75 * t, cutoutHeight: .75 * t, cutoutRadius: .375 * t, polygonScale: f(t, 0, a, l), polygonOrigin: N(t, a, l), dotY: .75 * t + a, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.DND:
      return {
        bgRadius: .5 * t, bgY: .25 * t + a, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .125 * t + l, cutoutY: .625 * t + a, cutoutWidth: .75 * t, cutoutHeight: .25 * t, cutoutRadius: .125 * t, polygonScale: f(t, 0, a, l), polygonOrigin: N(t, a, l), dotY: .75 * t + a, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.STREAMING:
      return {
        bgRadius: .5 * t, bgY: .25 * t + a, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .5 * t + l, cutoutY: .75 * t + a, cutoutWidth: 0, cutoutHeight: 0, cutoutRadius: .25 * t, polygonScale: f(t, 1, a, l), polygonOrigin: N(t, a, l), dotY: .75 * t + a, dotX: .5 * t + l, dotRadius: 0
      };
    case d.Skl.INVISIBLE:
    case d.Skl.UNKNOWN:
    case d.Skl.OFFLINE:
    default:
      return {
        bgRadius: .5 * t, bgY: .25 * t + a, bgX: l, bgHeight: t, bgWidth: t, cutoutX: .25 * t + l, cutoutY: .5 * t + a, cutoutWidth: .5 * t, cutoutHeight: .5 * t, cutoutRadius: .25 * t, polygonScale: f(t, 0, a, l), polygonOrigin: N(t, a, l), dotY: .75 * t + a, dotX: .5 * t + l, dotRadius: 0
      }
  }
}

function m(e, t, n) {
  var r;
  let {
    bgRadius: s,
    bgY: o,
    bgX: l,
    bgHeight: u,
    bgWidth: _,
    cutoutX: d,
    cutoutY: c,
    cutoutWidth: E,
    cutoutHeight: I,
    cutoutRadius: T,
    polygonScale: h,
    polygonOrigin: S,
    dotY: f,
    dotX: N,
    dotRadius: A
  } = e;
  return (0, i.jsxs)("mask", {
    id: n,
    children: [(0, i.jsx)(a.animated.rect, {
      x: l,
      y: o,
      width: _,
      height: u,
      rx: s,
      ry: s,
      fill: "white"
    }), (0, i.jsx)(a.animated.rect, {
      x: d,
      y: c,
      width: E,
      height: I,
      rx: T,
      ry: T,
      fill: "black"
    }), (0, i.jsx)(a.animated.polygon, {
      points: (r = t, "-".concat(.216506 * r, ",-").concat(.25 * r, " ").concat(.216506 * r, ",0 -").concat(.216506 * r, ",").concat(.25 * r)),
      fill: "black",
      transform: h,
      style: {
        transformOrigin: S
      }
    }), (0, i.jsx)(a.animated.circle, {
      fill: "black",
      cx: N,
      cy: f,
      r: A
    })]
  })
}

function O(e) {
  let {
    status: t,
    isMobile: n = !1,
    size: s = 8,
    color: l,
    className: u,
    style: _
  } = e, h = r.useId(), S = t === d.Skl.ONLINE && n, f = r.useMemo(() => A({
    size: s,
    status: t,
    isMobile: S
  }), [s, t, S]), N = (0, a.useSpring)({
    config: I,
    to: f
  }), O = T(t, l), [{
    fill: R
  }] = (0, a.useSpring)({
    config: I,
    fill: O
  }, [O]), C = Math.ceil(s * c.EW);
  return (0, i.jsxs)("svg", {
    width: s,
    height: C,
    viewBox: "0 0 ".concat(s, " ").concat(C),
    className: o()(E.mask, u),
    style: _,
    children: [m(N, s, h), (0, i.jsx)(a.animated.rect, {
      x: 0,
      y: 0,
      width: s,
      height: C,
      fill: R,
      mask: "url(#".concat(h, ")")
    })]
  })
}

function R(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (n) return _.ZP.Masks.STATUS_TYPING;
  switch (e) {
    case d.Skl.IDLE:
      return _.ZP.Masks.STATUS_IDLE;
    case d.Skl.DND:
      return _.ZP.Masks.STATUS_DND;
    case d.Skl.STREAMING:
      return _.ZP.Masks.STATUS_STREAMING;
    case d.Skl.INVISIBLE:
    case d.Skl.UNKNOWN:
    case d.Skl.OFFLINE:
      return _.ZP.Masks.STATUS_OFFLINE;
    case d.Skl.ONLINE:
    default:
      if (t) return _.ZP.Masks.STATUS_ONLINE_MOBILE;
      return _.ZP.Masks.STATUS_ONLINE
  }
}

function C(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
  return t === d.Skl.ONLINE && n && !i ? {
    width: e,
    height: e * c.EW
  } : {
    width: i ? e * c.D6 : e,
    height: e
  }
}

function p(e) {
  let {
    status: t,
    isMobile: n = !1,
    size: r = 8,
    className: s,
    style: a,
    color: l
  } = e, u = t === d.Skl.ONLINE && n, c = T(t, l);
  return (0, i.jsx)(_.ZP, {
    mask: R(t, u),
    className: o()(E.mask, s),
    style: a,
    ...C(r, t, u),
    children: (0, i.jsx)("div", {
      style: {
        backgroundColor: c
      },
      className: E.status
    })
  })
}