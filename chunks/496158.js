t.d(n, {
  D: function() {
return l;
  }
});
var i = t(470079),
  a = t(430824);

function l(e) {
  return i.useMemo(() => {
var n;
return {
  channel: n = e,
  guild: null != n.guild_id ? a.Z.getGuild(n.guild_id) : null
};
  }, [e]);
}