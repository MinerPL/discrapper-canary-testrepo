"use strict";
n.r(t), n.d(t, {
  getAccessibleClanColor: function() {
    return f
  },
  getAccessibleTextColor: function() {
    return I
  },
  getClanPrimaryButtonStyles: function() {
    return S
  },
  getClanRadialBackgroundStyle: function() {
    return A
  },
  useBrandColor: function() {
    return h
  }
}), n("47120");
var i = n("470079"),
  r = n("688619"),
  a = n.n(r),
  s = n("392711"),
  o = n.n(s),
  l = n("780384"),
  u = n("481060"),
  d = n("410030"),
  _ = n("564334"),
  c = n("302221"),
  E = n("308083");

function I(e) {
  let t = a()(e),
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
  return new _.default(e.get("rgb.r"), e.get("rgb.g"), e.get("rgb.b"), e.alpha())
}

function f(e, t) {
  var n;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.WCAGContrastRatios.Text;
  if (null == e) return;
  let r = null !== (n = function(e) {
      var t;
      let n = a()(e);
      return null === (t = o()(E.CLAN_BRAND_PALETTE_PRESETS).map(e => {
        let {
          primary: t
        } = e;
        return {
          primary: t,
          distance: a().distance(n, a()(t), "hsl")
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
    s = a()(r),
    u = a()(t),
    d = (0, c.getAccessibleColor)({
      colors: [T(s), T(u)],
      ratio: i,
      saturationFactor: 1
    });
  if (null != d) return a()(d.toHexString())
}

function S(e, t) {
  let n = function(e, t) {
    if (null == e) return;
    let n = f(e, t, l.WCAGContrastRatios.NonText);
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

function h(e, t) {
  let [n, r = 1] = t, a = (0, d.default)();
  return i.useMemo(() => null != e ? e : n.resolve({
    theme: a,
    saturation: r
  }).hex(), [e, n, r, a])
}

function A(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "top left",
    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : .3,
    r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "50%";
  if (null == e) return;
  let s = a()(e),
    o = {
      background: "\n      radial-gradient(\n        circle at ".concat(n, ",\n        ").concat(s.alpha(i).hex(), " 0%,\n        transparent ").concat(r, "\n      )\n    ")
    };
  if (null != t) {
    let e = a()(t);
    o.background += ", ".concat(e.hex())
  }
  return o
}