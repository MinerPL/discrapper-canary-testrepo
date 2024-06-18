"use strict";
n.d(t, {
  K3: function() {
    return I
  },
  Lq: function() {
    return c
  },
  O0: function() {
    return T
  },
  Sl: function() {
    return E
  }
}), n(757143);
var i = n(470079),
  r = n(688619),
  s = n.n(r),
  o = n(691324),
  a = n(399606),
  l = n(692547),
  u = n(410030),
  _ = n(607070);

function d(e) {
  return e.toUpperCase().replace(/-/g, "_")
}

function c(e) {
  return l.Z.unsafe_rawColors[d(e)].css
}

function E(e) {
  return null != e ? o.b[e] : null
}

function I(e) {
  let t = (0, a.e7)([_.Z], () => _.Z.saturation);
  return i.useMemo(() => {
    if (null == e) return null;
    if ("currentColor" === e || e.startsWith("var(")) return e;
    let n = s()(e);
    return n.set("hsl.s", n.get("hsl.s") * t).hex()
  }, [e, t])
}

function T(e, t) {
  let n = (0, u.Fg)(),
    r = (0, a.e7)([_.Z], () => _.Z.saturation);
  return i.useMemo(() => null == e ? null : {
    hex: l.Z.colors[d(e)].resolve({
      theme: null != t ? t : n,
      saturation: r
    }).hex()
  }, [e, r, n, t])
}
n(981631)