n.d(t, {
  g: function() {
return a;
  }
});
var i = n(470079),
  s = n(900849);

function a(e, t) {
  let n = i.useCallback((n, i) => s.Lq({
loadId: t,
guildId: n,
index: i,
analyticsContext: s.P1.GLOBAL_DISCOVERY,
categoryId: e
  }), [
e,
t
  ]);
  return {
handleViewGuild: n,
onGuildCardSeen: i.useCallback(() => !1, [])
  };
}