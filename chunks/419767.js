"use strict";
n.d(e, {
  M: function() {
    return a
  },
  Q: function() {
    return s
  }
});
var r = n(50074),
  i = n(177668);

function s(t, e, n, s) {
  let a = (0, r.HY)(n),
    o = {
      sent_at: new Date().toISOString(),
      ...a && {
        sdk: a
      },
      ...!!s && {
        dsn: (0, i.RA)(e)
      }
    },
    u = "aggregates" in t ? [{
      type: "sessions"
    }, t] : [{
      type: "session"
    }, t.toJSON()];
  return (0, r.Jd)(o, [u])
}

function a(t, e, n, i) {
  var s, a;
  let o = (0, r.HY)(n),
    u = t.type && "replay_event" !== t.type ? t.type : "event";
  s = t, !(a = n && n.sdk) || (s.sdk = s.sdk || {}, s.sdk.name = s.sdk.name || a.name, s.sdk.version = s.sdk.version || a.version, s.sdk.integrations = [...s.sdk.integrations || [], ...a.integrations || []], s.sdk.packages = [...s.sdk.packages || [], ...a.packages || []]);
  let l = (0, r.Cd)(t, o, i, e);
  delete t.sdkProcessingMetadata;
  let c = [{
    type: u
  }, t];
  return (0, r.Jd)(l, [c])
}