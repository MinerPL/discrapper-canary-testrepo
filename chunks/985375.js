"use strict";
n.d(t, {
  HI: function() {
    return u
  },
  gG: function() {
    return l
  },
  hb: function() {
    return _
  }
});
var i = n(470079),
  r = n(392711),
  s = n.n(r),
  o = n(516373);
let a = {};

function l() {
  var e, t;
  return null !== (t = null === (e = (0, o.D)().favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : a
}

function u() {
  let e = l();
  return i.useMemo(() => s()(e).map((e, t) => ({
    ...e,
    url: t
  })).sortBy("order").reverse().value(), [e])
}

function _(e) {
  return null != l()[e]
}