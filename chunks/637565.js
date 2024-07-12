n.d(t, {
  T: function() {
return u;
  }
}), n(47120);
var l = n(149765),
  r = n(973542),
  i = n(790285),
  s = n(981631);

function u(e, t, n) {
  let u = new Set();
  for (let e of Object.keys(n.permissionOverwrites)) {
let l = t[e],
  s = n.permissionOverwrites[e];
(0, r.Z)(l) && (0, i.TG)(n, s) && u.add(l);
  }
  let a = t[e.getEveryoneRoleId()],
d = null != a && !l.e$(a.permissions, s.Plq.VIEW_CHANNEL),
E = (0, i.wB)(n, n.permissionOverwrites[e.id]);
  if (d && !E)
for (let e of Object.values(t))
  (0, r.Z)(e) && (0, i.MT)(e) && u.add(e);
  return [...u];
}