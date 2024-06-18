"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(470079),
  r = n(442837),
  s = n(693546),
  o = n(937111);

function a(e) {
  let t = (0, r.e7)([o.Z], () => null == e ? null : o.Z.getRequest(e)),
    n = (0, r.e7)([o.Z], () => o.Z.hasFetchedRequestToJoinGuilds);
  return i.useEffect(() => {
    !n && s.Z.fetchRequestToJoinGuilds()
  }, [n]), t
}