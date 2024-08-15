n.d(t, {
  u: function() {
return o;
  }
});
var s = n(149765),
  a = n(442837),
  i = n(430824),
  r = n(496675),
  l = n(981631);

function o(e) {
  return (0, a.e7)([
i.Z,
r.Z
  ], () => {
let t = i.Z.getGuild(e);
if (null == t)
  return !1;
let n = r.Z.getGuildPermissions(t);
return null != n && s.e$(n, l.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS);
  });
}