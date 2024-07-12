t.d(n, {
  D: function() {
return a;
  }
});
var i = t(470079),
  l = t(430824);

function a(e) {
  return i.useMemo(() => {
var n;
return {
  channel: n = e,
  guild: null != n.guild_id ? l.Z.getGuild(n.guild_id) : null
};
  }, [e]);
}