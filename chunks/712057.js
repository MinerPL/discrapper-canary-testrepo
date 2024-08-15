n.d(t, {
  Z: function() {
return l;
  },
  u: function() {
return o;
  }
});
var r = n(564334),
  i = n(302221),
  a = n(563114);
let s = e => {
var t, n;
let {
  colors: a,
  saturationFactor: s = 1
} = e;
if (null == a || a.length < 1)
  return null;
let o = (0, i.YD)(a),
  l = r.Z.parseString('#ffffff');
if (null == l)
  return null;
let u = r.Z.parseString('#36393e');
if (null == u)
  return null;
let c = r.Z.parseString(o);
if (null == c)
  return null;
let d = (0, i.AZ)(c.red, c.blue, c.green),
  _ = null !== (t = (0, i.k8)({
    colors: [
      (0, i.j)(c, 0.6, !0),
      l
    ],
    ratio: 3,
    saturationFactor: s
  })) && void 0 !== t ? t : c,
  E = null !== (n = (0, i.k8)({
    colors: [
      (0, i.j)(c, 0.6, !1),
      u
    ],
    ratio: 5,
    saturationFactor: s
  })) && void 0 !== n ? n : c,
  f = (0, i.k8)({
    colors: [
      c,
      l
    ],
    ratio: 7,
    saturationFactor: s
  }),
  h = (0, i.k8)({
    colors: [
      c,
      u
    ],
    ratio: 7,
    saturationFactor: s
  });
return {
  LIGHT: {
    accentColor: null == f ? void 0 : f.toHexString(),
    backgroundColor: (0, i.xj)({
      colorRGB: _,
      saturationFactor: s
    }),
    highlightColor: null == c ? void 0 : c.toHexString(),
    opacity: (null == d ? void 0 : d.saturation) < 0.1 ? 0.35 : 0.1
  },
  DARK: {
    accentColor: null == h ? void 0 : h.toHexString(),
    backgroundColor: (0, i.xj)({
      colorRGB: E,
      saturationFactor: s
    }),
    highlightColor: null == c ? void 0 : c.toHexString(),
    opacity: (null == d ? void 0 : d.saturation) < 0.1 ? 0.5 : 0.2
  }
};
  },
  o = e => {
let {
  colors: t,
  saturationFactor: n = 1,
  shouldProcessMobileColors: r = !1
} = e, i = s({
  colors: t,
  saturationFactor: n
});
return a.Z.applyPlatformToThemedEmojiColorPalette({
  palette: i,
  shouldProcessMobileColors: r
});
  },
  l = (e, t, n) => {
var r;
if (null == e || e.length < 1)
  return null;
let i = o({
    colors: e,
    saturationFactor: t
  }),
  a = n ? null == i ? void 0 : i.DARK : null == i ? void 0 : i.LIGHT;
return {
  backgroundColor: null == a ? void 0 : a.backgroundColor,
  accentColor: null == a ? void 0 : a.accentColor,
  highlightColor: null == a ? void 0 : a.highlightColor,
  opacity: null !== (r = null == a ? void 0 : a.opacity) && void 0 !== r ? r : 0.15
};
  };