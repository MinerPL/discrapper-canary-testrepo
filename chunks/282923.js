t.d(n, {
  B: function() {
return s;
  }
}), t(653041), t(47120);
var i = t(658722),
  a = t.n(i);

function s(e, n, t) {
  if ('' === t)
return e;
  let i = t.toLowerCase(),
s = [];
  for (let l of e) {
let {
  id: e,
  names: r
} = n(l);
if (e === t)
  return [l];
r.some(e => a()(i, e.toLowerCase())) && s.push(l);
  }
  return s;
}