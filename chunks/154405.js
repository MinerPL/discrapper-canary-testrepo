"use strict";
n.d(e, {
  _: function() {
    return s
  }
});
var r = n(442853),
  i = n(28434);

function s(t, e, n) {
  let s = e.getOptions(),
    {
      publicKey: a
    } = e.getDsn() || {},
    {
      segment: o
    } = n && n.getUser() || {},
    u = (0, r.Jr)({
      environment: s.environment || i.J,
      release: s.release,
      user_segment: o,
      public_key: a,
      trace_id: t
    });
  return e.emit && e.emit("createDsc", u), u
}