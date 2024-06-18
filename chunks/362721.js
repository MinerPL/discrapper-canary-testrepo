"use strict";
n.d(t, {
  Z: function() {
    return d
  },
  w: function() {
    return _
  }
});
var i = n(442837),
  r = n(496675),
  s = n(700785),
  o = n(231338);
let a = [o.Pl.SET_VOICE_CHANNEL_STATUS, o.Pl.CONNECT, o.Pl.VIEW_CHANNEL],
  l = [o.Pl.SET_VOICE_CHANNEL_STATUS];

function u(e, t, n, i) {
  return (n ? l : a).every(n => null == i ? t.can(n, e) : s.BT({
    permission: n,
    user: i,
    context: e
  }))
}

function _(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return u(e, r.Z, t, n)
}

function d(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
    n = arguments.length > 2 ? arguments[2] : void 0;
  return (0, i.e7)([r.Z], () => u(e, r.Z, t, n), [e, t, n])
}