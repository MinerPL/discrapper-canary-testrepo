"use strict";
n.d(t, {
  Tk: function() {
    return c
  },
  kT: function() {
    return _
  },
  wN: function() {
    return d
  }
}), n(757143);
var i = n(299608),
  r = n.n(i),
  s = n(626135),
  o = n(549058),
  a = n(981631);
let l = /(!|\.|;|,|-|—|–|\?|"|')/g,
  u = /(\n|\t|\s)/g,
  _ = e => e.replace(l, "").replace(u, " "),
  d = e => null == e ? [] : _(e).trim().split(" "),
  c = r()(e => {
    s.default.track(a.rMx.AUTO_SUGGEST_DISPLAYED, {
      suggestion_trigger: e
    })
  }, o.xv, {
    leading: !0,
    trailing: !1
  })