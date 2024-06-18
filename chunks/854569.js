"use strict";
n.d(e, {
  y: function() {
    return s
  }
});
var r = n(50074),
  i = n(868145);

function s(t, e, n) {
  let s = [{
    type: "client_report"
  }, {
    timestamp: n || (0, i.yW)(),
    discarded_events: t
  }];
  return (0, r.Jd)(e ? {
    dsn: e
  } : {}, [s])
}