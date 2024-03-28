"use strict";
n.r(t), n.d(t, {
  useActivityShelfItemData: function() {
    return a
  }
});
var s = n("470079"),
  i = n("127255");

function a(e, t) {
  let n = (0, i.default)({
    guildId: e
  });
  return s.useMemo(() => {
    var e;
    return null !== (e = n.find(e => e.application.id === t)) && void 0 !== e ? e : null
  }, [n, t])
}