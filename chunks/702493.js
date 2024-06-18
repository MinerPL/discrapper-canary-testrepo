"use strict";
n.d(t, {
  Z: function() {
    return l
  }
}), n(47120);
var i = n(470079),
  r = n(442837),
  s = n(232567),
  o = n(110924),
  a = n(314897);

function l() {
  let [e, t] = (0, r.Wu)([a.default], () => [a.default.isAuthenticated(), null != a.default.getAnalyticsToken()]), n = (0, o.Z)(e);
  i.useEffect(() => {
    !n && e && !t && s.k({
      withAnalyticsToken: !0
    })
  }, [n, e, t])
}