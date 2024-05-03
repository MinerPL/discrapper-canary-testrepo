"use strict";
n.r(t), n.d(t, {
  getClanBackgroundStyles: function() {
    return c
  },
  getClanPrimaryButtonStyles: function() {
    return f
  }
});
var a = n("688619"),
  s = n.n(a),
  l = n("392711"),
  i = n.n(l),
  r = n("780384"),
  o = n("308083");
let u = s()("white"),
  d = s()("black");

function c(e, t) {
  var n;
  let a;
  if (null == e) return;
  let l = s()(t),
    c = null !== (n = function(e) {
      var t;
      let n = s()(e);
      return null === (t = i()(o.CLAN_BRAND_PALETTE_PRESETS).map(e => {
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
    f = s()(c),
    E = .2 > (a = f.num() === u.num() && l.num() === f.num() ? d : f.num() === d.num() && l.num() === f.num() ? u : s()((0, r.getContrastingColor)(f, {
      base: t,
      contrastRatio: r.WCAGContrastRatios.NonText
    }))).luminance() ? a.brighten(.3) : a.darken(.3),
    h = .2 > a.luminance() ? a.brighten(.35) : a.darken(.35);
  return {
    "--custom-clan-bg": a,
    "--custom-clan-hover-bg": E,
    "--custom-clan-active-bg": h
  }
}

function f(e, t) {
  let n = c(e, t);
  if (null == n) return;
  let a = function(e) {
    let t = s()(e),
      n = s().contrast(t, u),
      a = s().contrast(t, d);
    return {
      "--custom-clan-text": n > a ? u.css() : d.css()
    }
  }(n["--custom-clan-bg"]);
  return {
    ...n,
    ...a
  }
}