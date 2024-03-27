"use strict";
n.r(t), n.d(t, {
  default: function() {
    return u
  }
});
var l = n("322224");

function u(e, t, n, u) {
  let {
    scheduled_start_time: a,
    scheduled_end_time: d
  } = e;
  return null == a && null == d ? l.default.deleteGuildEventException(t, n, u) : l.default.updateGuildEventException({
    scheduled_start_time: a,
    scheduled_end_time: d,
    is_canceled: !1
  }, t, n, u)
}