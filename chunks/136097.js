"use strict";
s.r(t), s.d(t, {
  formatDate: function() {
    return c
  },
  useAuthSessions: function() {
    return u
  }
}), s("47120");
var a = s("470079"),
  n = s("913527"),
  l = s.n(n),
  i = s("442837"),
  r = s("314897"),
  o = s("673096"),
  d = s("689938");

function u() {
  let e = (0, i.useStateFromStoresObject)([o.default], () => o.default.getSessions());
  return a.useMemo(() => {
    let t = [...e],
      s = null,
      a = r.default.getAuthSessionIdHash();
    if (null != a) {
      let e = t.findIndex(e => e.id_hash === a);
      e >= 0 && (s = t.splice(e, 1)[0])
    }
    return t.sort((e, t) => t.approx_last_used_time.valueOf() - e.approx_last_used_time.valueOf()), {
      currentSession: s,
      otherSessions: t
    }
  }, [e])
}

function c(e) {
  return (Date.now() - e.valueOf()) / 1e3 / 60 / 60 < 1 ? d.default.Messages.AUTH_SESSIONS_ACTIVE_RECENTLY : l()(e).fromNow()
}