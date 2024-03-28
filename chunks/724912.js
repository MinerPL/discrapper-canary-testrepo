"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("442837"),
  i = n("430824"),
  a = n("981631");

function r(e) {
  return (0, l.useStateFromStores)([i.default], () => {
    var t;
    if (null == e) return !1;
    let n = i.default.getGuild(e);
    return null !== (t = null == n ? void 0 : n.hasFeature(a.GuildFeatures.HUB)) && void 0 !== t && t
  }, [e])
}