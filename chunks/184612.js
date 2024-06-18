"use strict";
n.d(e, {
  r: function() {
    return s
  }
});
var r = n(177668),
  i = n(50074);

function s(t, {
  metadata: e,
  tunnel: n,
  dsn: s
}) {
  let a = {
      event_id: t.event_id,
      sent_at: new Date().toISOString(),
      ...e && e.sdk && {
        sdk: {
          name: e.sdk.name,
          version: e.sdk.version
        }
      },
      ...!!n && !!s && {
        dsn: (0, r.RA)(s)
      }
    },
    o = function(t) {
      return [{
        type: "user_report"
      }, t]
    }(t);
  return (0, i.Jd)(a, [o])
}