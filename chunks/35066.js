"use strict";
n.d(t, {
  u: function() {
    return u
  }
});
var r = n(964742),
  i = n(40284),
  a = n(304832),
  o = n(603565),
  s = n(144459);

function u() {
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
      return o.QN
  }
  var t = e.payload,
    n = t.targetIds,
    u = void 0 === n ? [] : n,
    c = t.prevTargetIds,
    l = void 0 === c ? [] : c,
    d = (0, s.dl)(u, l);
  if (!(d.length > 0 || !(0, a.Hj)(u, l))) return o.Hn;
  var f = l[l.length - 1],
    p = u[u.length - 1];
  return f !== p && (f && d.push(f), p && d.push(p)), d
}