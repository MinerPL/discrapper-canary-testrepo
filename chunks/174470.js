"use strict";
n.d(t, {
  D: function() {
    return _
  },
  j: function() {
    return u
  }
}), n(47120);
var i = n(470079),
  r = n(399606),
  s = n(430824),
  o = n(709054),
  a = n(763296);

function l(e, t) {
  return o.default.keys(e).filter(e => null == t.get(e))
}

function u() {
  let e = (0, r.e7)([s.Z], () => s.Z.getGuilds()),
    t = (0, r.e7)([a.Z], () => a.Z.getSounds());
  return (0, i.useMemo)(() => l(e, t), [e, t])
}

function _() {
  let e = s.Z.getGuilds();
  return l(e, a.Z.getSounds())
}