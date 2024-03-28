"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var a = n("661869"),
  l = n("442837"),
  s = n("158776"),
  i = n("561308"),
  r = n("981631");
let o = [];

function u(e) {
  return (0, l.useStateFromStoresArray)([s.default], () => null == e ? o : e.filter(e => !(0, i.isEntryExpired)(e) && (!(0, i.isEntryActive)(e) || e.author_type !== a.ContentInventoryAuthorType.USER || null != s.default.getActivities(e.author_id).find(t => {
    if (t.type !== r.ActivityTypes.PLAYING) return !1;
    let n = e.extra;
    return null != n && ("application_id" in t && t.application_id === n.application_id || "game_name" in n && t.name === n.game_name)
  }))), [e])
}