"use strict";
n.d(t, {
  r: function() {
    return a
  },
  z: function() {
    return l
  }
});
var i = n(51407),
  r = n(46973),
  s = n(36703),
  o = n(526761);

function a(e, t) {
  let n = t === r.Yn.STREAM ? i.h.STREAM : i.h.USER;
  return 1 > Math.abs((0, s.P)(n) - (0, s.P)(e)) ? n : e
}

function l(e) {
  switch (e) {
    case r.Yn.DEFAULT:
      return o.u0.USER;
    case r.Yn.STREAM:
      return o.u0.STREAM;
    default:
      return
  }
}