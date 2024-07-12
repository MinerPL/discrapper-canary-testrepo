n.d(t, {
  u: function() {
return l;
  }
});
var r = n(964742),
  i = n(40284),
  a = n(304832),
  o = n(603565),
  s = n(144459);

function l() {
  arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.Hn;
  var e = arguments.length > 1 ? arguments[1] : void 0;
  switch (e.type) {
case r.$T:
  break;
case i.fu:
case i.Rd:
case i.IS:
case i.SG:
  return o.Hn;
case r.qu:
case r.js:
case r.Bs:
case r.rp:
default:
  return o.QN;
  }
  var t = e.payload,
n = t.targetIds,
l = void 0 === n ? [] : n,
u = t.prevTargetIds,
c = void 0 === u ? [] : u,
d = (0, s.dl)(l, c);
  if (!(d.length > 0 || !(0, a.Hj)(l, c)))
return o.Hn;
  var _ = c[c.length - 1],
E = l[l.length - 1];
  return _ !== E && (_ && d.push(_), E && d.push(E)), d;
}