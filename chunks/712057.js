"use strict";
n.d(t, {
  Z: function() {
    return l
  },
  u: function() {
    return a
  }
});
var i = n(564334),
  r = n(302221),
  s = n(563114);
let o = e => {
    var t, n;
    let {
      colors: s,
      saturationFactor: o = 1
    } = e;
    if (null == s || s.length < 1) return null;
    let a = (0, r.YD)(s),
      l = i.Z.parseString("#ffffff");
    if (null == l) return null;
    let u = i.Z.parseString("#36393e");
    if (null == u) return null;
    let _ = i.Z.parseString(a);
    if (null == _) return null;
    let d = (0, r.AZ)(_.red, _.blue, _.green),
      c = null !== (t = (0, r.k8)({
        colors: [(0, r.j)(_, .6, !0), l],
        ratio: 3,
        saturationFactor: o
      })) && void 0 !== t ? t : _,
      E = null !== (n = (0, r.k8)({
        colors: [(0, r.j)(_, .6, !1), u],
        ratio: 5,
        saturationFactor: o
      })) && void 0 !== n ? n : _,
      I = (0, r.k8)({
        colors: [_, l],
        ratio: 7,
        saturationFactor: o
      }),
      T = (0, r.k8)({
        colors: [_, u],
        ratio: 7,
        saturationFactor: o
      });
    return {
      LIGHT: {
        accentColor: null == I ? void 0 : I.toHexString(),
        backgroundColor: (0, r.xj)({
          colorRGB: c,
          saturationFactor: o
        }),
        highlightColor: null == _ ? void 0 : _.toHexString(),
        opacity: (null == d ? void 0 : d.saturation) < .1 ? .35 : .1
      },
      DARK: {
        accentColor: null == T ? void 0 : T.toHexString(),
        backgroundColor: (0, r.xj)({
          colorRGB: E,
          saturationFactor: o
        }),
        highlightColor: null == _ ? void 0 : _.toHexString(),
        opacity: (null == d ? void 0 : d.saturation) < .1 ? .5 : .2
      }
    }
  },
  a = e => {
    let {
      colors: t,
      saturationFactor: n = 1,
      shouldProcessMobileColors: i = !1
    } = e, r = o({
      colors: t,
      saturationFactor: n
    });
    return s.Z.applyPlatformToThemedEmojiColorPalette({
      palette: r,
      shouldProcessMobileColors: i
    })
  },
  l = (e, t, n) => {
    var i;
    if (null == e || e.length < 1) return null;
    let r = a({
        colors: e,
        saturationFactor: t
      }),
      s = n ? null == r ? void 0 : r.DARK : null == r ? void 0 : r.LIGHT;
    return {
      backgroundColor: null == s ? void 0 : s.backgroundColor,
      accentColor: null == s ? void 0 : s.accentColor,
      highlightColor: null == s ? void 0 : s.highlightColor,
      opacity: null !== (i = null == s ? void 0 : s.opacity) && void 0 !== i ? i : .15
    }
  }