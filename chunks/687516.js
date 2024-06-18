"use strict";
n.d(t, {
  Cf: function() {
    return d
  },
  L2: function() {
    return u
  },
  Um: function() {
    return l
  }
});
var i = n(442837),
  r = n(902704),
  s = n(158776),
  o = n(981631);

function a(e) {
  return e.type === o.IIU.PLAYING
}

function l(e, t) {
  var n;
  return null != e ? (n = e.ownerId, t.findActivity(n, a)) : null
}

function u(e, t) {
  if (null == e) return null;
  let n = l(e, t);
  return null == n ? null : {
    id: n.application_id,
    name: n.name
  }
}

function _(e, t) {
  return e === t || null != e && null != t && (0, r.Z)(e, t)
}

function d(e) {
  return (0, i.e7)([s.Z], () => u(e, s.Z), [e], _)
}