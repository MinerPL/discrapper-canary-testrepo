n.d(t, {
  q: function() {
return l;
  }
}), n(47120);
var i = n(709054),
  a = n(765104);

function l(e, t) {
  var n;
  let l = null !== (n = a.Z.summaries(e)) && void 0 !== n ? n : [],
s = 0;
  for (let e of l)
i.default.compare(e.endId, t) > 0 && (s += 1);
  return s;
}