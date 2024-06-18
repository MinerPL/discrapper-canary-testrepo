"use strict";
t.d(s, {
  u: function() {
    return o
  }
});
var n = t(149765),
  i = t(442837),
  l = t(430824),
  a = t(496675),
  r = t(981631);

function o(e) {
  return (0, i.e7)([l.Z, a.Z], () => {
    let s = l.Z.getGuild(e);
    if (null == s) return !1;
    let t = a.Z.getGuildPermissions(s);
    return null != t && n.e$(t, r.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS)
  })
}