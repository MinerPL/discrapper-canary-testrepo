t.d(u, {
  Z: function() {
return r;
  }
});
var e = t(442837),
  c = t(241155),
  i = t(430824);

function r(n, u) {
  return (0, e.cj)([
i.Z,
c.Z
  ], () => {
let t = i.Z.getGuild(n),
  e = null != t;
return null == t && null != u && (t = c.Z.getCachedGuildByEventId(u)), {
  isMember: e,
  guild: t
};
  }, [
n,
u
  ]);
}