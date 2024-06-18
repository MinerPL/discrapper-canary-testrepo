"use strict";
n.d(t, {
  Z: function() {
    return a
  },
  l: function() {
    return o
  }
});
var i = n(442837),
  r = n(430824),
  s = n(981631);

function o(e) {
  return !e.hasFeature(s.oNc.CREATOR_MONETIZABLE_DISABLED) && (e.hasFeature(s.oNc.CREATOR_MONETIZABLE) || e.hasFeature(s.oNc.CREATOR_MONETIZABLE_PROVISIONAL))
}

function a(e) {
  return (0, i.e7)([r.Z], () => {
    let t = r.Z.getGuild(e);
    return null != t && o(t)
  })
}