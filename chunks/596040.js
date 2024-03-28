"use strict";
n.r(t), n.d(t, {
  default: function() {
    return o
  }
});
var a = n("470079"),
  l = n("566620"),
  s = n("782769"),
  i = n("451576");
let r = e => null != e && "" !== e;

function o(e, t) {
  let n = (0, s.useIsActivitiesEnabledForCurrentPlatform)(null != t ? t : void 0),
    o = (0, i.default)(t),
    u = r(e) || o;
  return a.useEffect(() => {
    u && n && (0, l.fetchShelf)({
      guildId: e
    })
  }, [e, n, u]), u && n
}