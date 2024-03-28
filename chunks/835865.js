"use strict";
n.r(t), n.d(t, {
  default: function() {
    return r
  }
});
var l = n("470079"),
  a = n("442837"),
  s = n("67212"),
  i = n("292584");

function r() {
  let e = (0, a.useStateFromStores)([i.default], () => i.default.getBroadcastsToValidateChannels());
  (0, l.useEffect)(() => {
    e.length > 0 && (0, s.maybeFetchBroadcastChannels)()
  }, [e])
}