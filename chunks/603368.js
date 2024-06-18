"use strict";
n.d(t, {
  $0: function() {
    return I
  },
  j1: function() {
    return S
  },
  nP: function() {
    return f
  },
  nj: function() {
    return N
  },
  pX: function() {
    return h
  }
}), n(47120);
var i = n(470079),
  r = n(688619),
  s = n.n(r),
  o = n(392711),
  a = n.n(o),
  l = n(780384),
  u = n(481060),
  _ = n(410030),
  d = n(564334),
  c = n(302221),
  E = n(308083);

function I(e) {
  let t = s()(e),
    n = t.get("rgb.r"),
    i = t.get("rgb.g"),
    r = t.get("rgb.b");
  return (299 * n + 587 * i + 114 * r) / 1e3 < 128 ? u.tokens.colors.HEADER_PRIMARY.resolve({
    theme: "dark",
    saturation: 1
  }) : u.tokens.colors.HEADER_PRIMARY.resolve({
    theme: "light",
    saturation: 1
  })
}

function T(e) {
  return new d.Z(e.get("rgb.r"), e.get("rgb.g"), e.get("rgb.b"), e.alpha())
}

function h(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.S3.Text;
  if (null == e) return;
  let r = null !== (n = function(e) {
      var t;
      let n = s()(e);
      return null === (t = a()(E.ym).map(e => {
        let {
          primary: t
        } = e;
        return {
          primary: t,
          distance: s().distance(n, s()(t), "hsl")
        }
      }).filter(e => {
        let {
          distance: t
        } = e;
        return t < 15
      }).minBy(e => {
        let {
          distance: t
        } = e;
        return t
      })) || void 0 === t ? void 0 : t.primary
    }(e)) && void 0 !== n ? n : e,
    o = s()(r),
    u = s()(t),
    _ = (0, c.k8)({
      colors: [T(o), T(u)],
      ratio: i,
      saturationFactor: 1
    });
  if (null != _) return s()(_.toHexString())
}

function S(e, t) {
  let n = function(e, t) {
    if (null == e) return;
    let n = h(e, t, l.S3.NonText);
    if (null == n) return;
    let i = .2 > n.luminance() ? n.brighten(.3) : n.darken(.3),
      r = .2 > n.luminance() ? n.brighten(.35) : n.darken(.35);
    return {
      "--custom-clan-bg": n.css(),
      "--custom-clan-hover-bg": i.css(),
      "--custom-clan-active-bg": r.css()
    }
  }(e, t);
  if (null == n) return;
  let i = {
    "--custom-clan-text": I(n["--custom-clan-bg"]).hex()
  };
  return {
    ...n,
    ...i
  }
}

function f(e, t) {
  let [n, r = 1] = t, s = (0, _.ZP)();
  return i.useMemo(() => null != e ? e : n.resolve({
    theme: s,
    saturation: r
  }).hex(), [e, n, r, s])
}

function N(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "top left",
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .3,
    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "50%";
  if (null == e) return;
  let o = s()(e),
    a = {
      background: "\n      radial-gradient(\n        circle at ".concat(n, ",\n        ").concat(o.alpha(i).hex(), " 0%,\n        transparent ").concat(r, "\n      )\n    ")
    };
  if (null != t) {
    let e = s()(t);
    a.background += ", ".concat(e.hex())
  }
  return a
}