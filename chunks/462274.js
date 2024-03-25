"use strict";
n.r(t), n.d(t, {
  useColorStore: function() {
    return d
  },
  maybeFetchColors: function() {
    return f
  },
  default: function() {
    return v
  },
  useAvatarColors: function() {
    return m
  }
}), n("222007");
var i = n("884691"),
  r = n("656280"),
  l = n.n(r),
  s = n("308503"),
  o = n("446674"),
  u = n("206230"),
  a = n("284679"),
  c = n("103603");
let d = (0, s.default)(() => ({
  palette: {},
  fetching: {}
}));
async function f(e) {
  null == d.getState().palette[e] && await h(e)
}
async function h(e) {
  if (!d.getState().fetching[e]) {
    d.setState(t => ({
      fetching: {
        ...t.fetching,
        [e]: !0
      }
    }));
    try {
      let t = await (0, c.getPaletteForAvatar)(e),
        n = (0, a.getComplimentaryPaletteForColor)(t[0]);
      d.setState(i => ({
        fetching: {
          ...i.fetching,
          [e]: !1
        },
        palette: {
          ...i.palette,
          [e]: [...t.slice(0, 2), ...n]
        }
      }))
    } catch (t) {
      d.setState(t => ({
        fetching: {
          ...t.fetching,
          [e]: !1
        }
      }))
    }
  }
}

function v(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    [i] = m(e, t, n);
  return i
}

function m(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    r = d(t => null == e ? void 0 : t.palette[e]),
    s = (0, o.useStateFromStores)([u.default], () => n && u.default.desaturateUserColors ? u.default.saturation : 1);
  i.useEffect(() => {
    null != e && null == r && h(e)
  }, [e, r]);
  let a = i.useMemo(() => null == r ? void 0 : r.map(e => {
    let [t, n, i] = e, {
      h: r,
      s: o,
      l: u
    } = l({
      r: t,
      g: n,
      b: i
    }).toHsl();
    return l({
      h: r,
      s: o * s,
      l: u
    }).toHexString()
  }), [r, s]);
  return null != a ? a : [t, t]
}