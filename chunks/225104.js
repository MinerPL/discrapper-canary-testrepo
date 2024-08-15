i.d(l, {
  Z: function() {
return d;
  }
});
var a = i(735250);
i(470079);
var r = i(866442),
  o = i(91218),
  n = i(518738),
  t = i(134433),
  s = i(981631);

function d(e) {
  var l;
  let {
guildId: i,
role: d,
size: c,
className: u
  } = e, f = (0, n.p9)({
guildId: i,
roleId: d.id,
size: c
  });
  return null != f ? (0, a.jsx)(o.Z, {
className: u,
...f
  }) : (0, a.jsx)(t.Z, {
color: null !== (l = d.colorString) && void 0 !== l ? l : (0, r.Rf)(s.p6O),
className: u,
size: c
  });
}