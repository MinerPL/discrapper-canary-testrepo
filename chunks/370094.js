"use strict";
a.r(t), a.d(t, {
  default: function() {
    return u
  }
});
var l = a("470079"),
  n = a("442837"),
  s = a("580079"),
  i = a("601410"),
  d = a("626135"),
  r = a("981631");

function u(e, t, a) {
  let u = (0, n.useStateFromStores)([s.default], () => {
    let t = s.default.getActiveChannelsFetchStatus(e);
    return null != t && !t.loading
  }, [e]);
  l.useEffect(() => {
    u && d.default.track(r.AnalyticEvents.ACTIVE_CHANNELS_LOADED, {
      guild_id: e,
      text_channels_shown: t.length,
      voice_channels_shown: a.length,
      home_session_id: i.default.getHomeSessionId(e)
    })
  }, [e, u])
}