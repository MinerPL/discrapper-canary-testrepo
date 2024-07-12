var n = r(299623),
  o = r(345374),
  i = r(874652),
  c = r(644659),
  u = r(97131).f,
  a = r(828114),
  s = r(535586),
  f = r(992051),
  p = r(325008),
  l = 'Array Iterator',
  y = c.set,
  v = c.getterFor(l);
t.exports = a(Array, 'Array', function(t, e) {
  y(this, {
type: l,
target: n(t),
index: 0,
kind: e
  });
}, function() {
  var t = v(this),
e = t.target,
r = t.kind,
n = t.index++;
  if (!e || n >= e.length)
return t.target = void 0, s(void 0, !0);
  switch (r) {
case 'keys':
  return s(n, !1);
case 'values':
  return s(e[n], !1);
  }
  return s([
n,
e[n]
  ], !1);
}, 'values');
var d = i.Arguments = i.Array;
if (o('keys'), o('values'), o('entries'), !f && p && 'values' !== d.name)
  try {
u(d, 'name', {
  value: 'values'
});
  } catch (t) {}