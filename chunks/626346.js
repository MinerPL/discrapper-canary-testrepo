"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("358977"),
  l = n("446674"),
  s = n("824563"),
  i = n("476774"),
  r = n("49111");
let u = [];

function o(e) {
  return (0, l.useStateFromStoresArray)([s.default], () => null == e ? u : e.filter(e => {
    if ((0, i.isEntryExpired)(e)) return !1;
    if ((0, i.isEntryActive)(e) && e.author_type === a.ContentInventoryAuthorType.USER) {
      let t = s.default.getActivities(e.author_id),
        n = t.find(t => {
          if (t.type !== r.ActivityTypes.PLAYING) return !1;
          let n = e.extra;
          return null != n && ("application_id" in t && t.application_id === n.application_id || "game_name" in n && t.name === n.game_name)
        });
      return null != n
    }
    return !0
  }), [e])
}