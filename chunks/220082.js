"use strict";
n.d(t, {
  Cf: function() {
    return T
  },
  SR: function() {
    return d
  },
  ZP: function() {
    return I
  },
  vM: function() {
    return c
  }
}), n(47120);
var i = n(470079),
  r = n(979590),
  s = n.n(r),
  o = n(652874),
  a = n(442837),
  l = n(607070),
  u = n(302221),
  _ = n(956664);
let d = (0, o.Z)(() => ({
  palette: {},
  fetching: {}
}));
async function c(e) {
  null == d.getState().palette[e] && await E(e)
}
async function E(e) {
  if (!d.getState().fetching[e]) {
    d.setState(t => ({
      fetching: {
        ...t.fetching,
        [e]: !0
      }
    }));
    try {
      let t = await (0, _.OF)(e),
        n = (0, u.WY)(t[0]);
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

function I(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    [i] = T(e, t, n);
  return i
}

function T(e, t) {
  let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
    r = d(t => null == e ? void 0 : t.palette[e]),
    o = (0, a.e7)([l.Z], () => n && l.Z.desaturateUserColors ? l.Z.saturation : 1);
  i.useEffect(() => {
    if (null != e && null == r) E(e)
  }, [e, r]);
  let u = i.useMemo(() => null == r ? void 0 : r.map(e => {
    let [t, n, i] = e, {
      h: r,
      s: a,
      l
    } = s()({
      r: t,
      g: n,
      b: i
    }).toHsl();
    return s()({
      h: r,
      s: a * o,
      l
    }).toHexString()
  }), [r, o]);
  return null != u ? u : [t, t]
}