"use strict";
n.r(t), n.d(t, {
  useActivityShelfItemData: function() {
    return u
  }
});
var s = n("470079"),
  i = n("127255");

function u(e, t, n) {
  let u = (0, i.default)({
    guildId: e,
    channel: n
  });
  return s.useMemo(() => {
    var e;
    return null !== (e = u.find(e => e.application.id === t)) && void 0 !== e ? e : null
  }, [u, t])
}