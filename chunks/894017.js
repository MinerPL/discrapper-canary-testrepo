n.d(t, {
  Z: function() {
return a;
  },
  c: function() {
return o;
  }
});
var r = n(442837),
  i = n(924301);

function a(e, t) {
  return s((0, r.Wu)([i.ZP], () => {
var e, n;
return null !== (n = null === (e = i.ZP.getGuildScheduledEvent(t)) || void 0 === e ? void 0 : e.guild_scheduled_event_exceptions) && void 0 !== n ? n : [];
  }), e);
}

function o(e, t) {
  var n, r;
  return s(null !== (r = null === (n = i.ZP.getGuildScheduledEvent(t)) || void 0 === n ? void 0 : n.guild_scheduled_event_exceptions) && void 0 !== r ? r : [], e);
}

function s(e, t) {
  return null == e ? void 0 : e.find(e => e.event_exception_id === t);
}