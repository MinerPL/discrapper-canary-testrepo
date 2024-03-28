"use strict";
s.r(t), s.d(t, {
  default: function() {
    return r
  }
}), s("47120");
var l = s("470079"),
  n = s("442837"),
  a = s("528963"),
  o = s("606956");
let i = 1 * s("70956").default.Millis.HOUR;

function r(e) {
  let [t, s] = l.useState(!1), r = (0, n.useStateFromStores)([o.default], () => o.default.getFollowerStatsForChannel(e), [e]);
  return l.useEffect(() => {
    (null == r || Date.now() - r.lastFetched > i) && !t ? (s(!0), a.default.fetchChannelFollowerStats(e)) : null != r && t && s(!1)
  }, [e, r, t]), [r, t]
}