n.d(t, {
  Z: function() {
return l;
  }
});
var i = n(442837),
  a = n(317381);

function l(e) {
  let {
channelId: t
  } = e;
  return (0, i.e7)([a.ZP], () => a.ZP.getEmbeddedActivitiesForChannel(t).some(e => e.userIds.size > 0));
}