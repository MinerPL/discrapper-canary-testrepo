"use strict";
n.d(t, {
  Z: function() {
    return a
  }
}), n(47120), n(653041);
var i = n(341702),
  r = n(887490);
let s = new Set(["line", "blockQuote"]),
  o = [];

function a(e, t, n) {
  if (r.bN.areStylesDisabled(e)) return [];
  let [a, l] = t;
  if (1 !== l.length || !r.aj.isInTypes(a, s)) return o;
  let {
    entries: u,
    serializedChildren: _
  } = r.q.markdown(a, n, !0), d = [];
  for (let t = 0; t < u.length; t++) {
    let n = u[t];
    if (n.attributes.length > 0 && n.text.length > 0) {
      let s = u[t - 1],
        o = u[t + 1],
        a = (0, i.t)(e, l, _, n.start),
        c = {
          anchor: a,
          focus: (0, i.t)(e, l, _, n.start + n.text.length)
        },
        E = r.bN.nodes(e, {
          at: c,
          mode: "lowest",
          voids: !1
        }),
        I = {};
      for (let e of n.attributes)
        if (I[e] = !0, "syntaxBefore" === e && null != o)
          for (let e of o.attributes) I["before_".concat(e)] = !0;
        else if ("syntaxAfter" === e && null != s)
        for (let e of s.attributes) I["after_".concat(e)] = !0;
      for (let [t, n] of E) {
        let t = {
          anchor: r.bN.start(e, n),
          focus: r.bN.end(e, n)
        };
        r.Jz.isBefore(t.anchor, c.anchor) && (t.anchor = c.anchor), r.Jz.isAfter(t.focus, c.focus) && (t.focus = c.focus), d.push({
          ...I,
          ...t
        })
      }
    }
  }
  return d
}