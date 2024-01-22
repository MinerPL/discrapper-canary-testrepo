"use strict";
n.r(t), n.d(t, {
  getStreamerActivity: function() {
    return r
  },
  getStreamerApplication: function() {
    return a
  }
});
var i = n("49111");

function s(e) {
  return e.type === i.ActivityTypes.PLAYING
}

function r(e, t) {
  var n;
  return null != e ? (n = e.ownerId, t.findActivity(n, s)) : null
}

function a(e, t) {
  if (null == e) return null;
  let n = r(e, t);
  return null == n ? null : {
    id: n.application_id,
    name: n.name
  }
}