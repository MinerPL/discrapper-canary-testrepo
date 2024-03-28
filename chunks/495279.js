"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("482241");

function u(e, t, n, u) {
  let {
    scheduled_start_time: a,
    scheduled_end_time: s
  } = e;
  return null == a && null == s ? l.default.deleteGuildEventException(t, n, u) : l.default.updateGuildEventException({
    scheduled_start_time: a,
    scheduled_end_time: s,
    is_canceled: !1
  }, t, n, u)
}