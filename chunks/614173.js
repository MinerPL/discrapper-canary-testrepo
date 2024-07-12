n.d(t, {
  h: function() {
return c;
  }
}), n(47120);
var i = n(470079),
  a = n(442837),
  l = n(592125),
  s = n(700785),
  r = n(471253),
  o = n(981631);

function c(e) {
  let t = (0, a.e7)([l.Z], () => l.Z.getChannel(e), [e]),
n = s.Uu(o.Plq.REQUEST_TO_SPEAK, t),
[c, d] = i.useState(n);
  return i.useEffect(() => {
n !== c && d(n);
  }, [n]), [
c,
e => {
  null != t && (d(e), (0, r.Pq)(t, o.Plq.REQUEST_TO_SPEAK, e));
}
  ];
}