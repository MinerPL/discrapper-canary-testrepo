"use strict";
a.r(t), a.d(t, {
  default: function() {
    return d
  }
});
var l = a("470079"),
  n = a("626135"),
  s = a("601410"),
  i = a("981631");

function d(e) {
  l.useEffect(() => {
    let t = s.default.getHomeSessionId(e);
    return () => {
      n.default.track(i.AnalyticEvents.HOME_EXITED, {
        guild_id: e,
        home_session_id: t
      })
    }
  }, [e])
}