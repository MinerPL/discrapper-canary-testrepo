r.d(e, {
  Z: function() {
return a;
  }
});
var n = r(46834),
  _ = r(336344);

function a(t, e, r = 250, a, E, s, c) {
  if (!s.exception || !s.exception.values || !c || !(0, n.V9)(c.originalException, Error))
return;
  let I = s.exception.values.length > 0 ? s.exception.values[s.exception.values.length - 1] : void 0;
  I && (s.exception.values = function(t, e) {
return t.map(t => (t.value && (t.value = (0, _.$G)(t.value, e)), t));
  }(function t(e, r, _, a, E, s, c, I) {
if (s.length >= _ + 1)
  return s;
let R = [...s];
if ((0, n.V9)(a[E], Error)) {
  i(c, I);
  let n = e(r, a[E]),
    s = R.length;
  o(n, E, s, I), R = t(e, r, _, a[E], E, [
    n,
    ...R
  ], n, s);
}
return Array.isArray(a.errors) && a.errors.forEach((a, s) => {
  if ((0, n.V9)(a, Error)) {
    i(c, I);
    let n = e(r, a),
      T = R.length;
    o(n, `errors[${ s }]`, T, I), R = t(e, r, _, a, E, [
      n,
      ...R
    ], n, T);
  }
}), R;
  }(t, e, E, c.originalException, a, s.exception.values, I, 0), r));
}

function i(t, e) {
  t.mechanism = t.mechanism || {
type: 'generic',
handled: !0
  }, t.mechanism = {
...t.mechanism,
is_exception_group: !0,
exception_id: e
  };
}

function o(t, e, r, n) {
  t.mechanism = t.mechanism || {
type: 'generic',
handled: !0
  }, t.mechanism = {
...t.mechanism,
type: 'chained',
source: e,
exception_id: r,
parent_id: n
  };
}