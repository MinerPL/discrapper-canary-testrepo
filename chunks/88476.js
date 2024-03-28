"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var l = a("470079"),
  n = a("924301"),
  s = a("554747"),
  i = a("626135"),
  d = a("601410"),
  r = a("981631");

function u(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    a = (0, s.default)(e);
  l.useEffect(() => {
    t && i.default.track(r.AnalyticEvents.HOME_EVENTS_LOADED, {
      guild_id: e,
      active_events_shown: a.some(e => (0, n.isGuildScheduledEventActive)(e)) ? 1 : 0,
      upcoming_events_shown: a.some(e => !(0, n.isGuildScheduledEventActive)(e)) ? 1 : 0,
      home_session_id: d.default.getHomeSessionId(e)
    })
  }, [e, t])
}