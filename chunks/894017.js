"use strict";
n.d(t, {
  Z: function() {
    return s
  },
  c: function() {
    return o
  }
});
var i = n(442837),
  r = n(924301);

function s(e, t) {
  return a((0, i.Wu)([r.ZP], () => {
    var e, n;
    return null !== (n = null === (e = r.ZP.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : []
  }), e)
}

function o(e, t) {
  var n, i;
  return a(null !== (i = null === (n = r.ZP.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== i ? i : [], e)
}

function a(e, t) {
  return null == e ? void 0 : e.find(e => e.event_exception_id === t)
}