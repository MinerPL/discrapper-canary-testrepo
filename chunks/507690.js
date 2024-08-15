
function n(e) {
  let t;
  let r = e[0],
n = 1;
  for (; n < e.length;) {
let a = e[n],
  o = e[n + 1];
if (n += 2, ('optionalAccess' === a || 'optionalCall' === a) && null == r)
  return;
'access' === a || 'optionalAccess' === a ? (t = r, r = o(r)) : ('call' === a || 'optionalCall' === a) && (r = o((...e) => r.call(t, ...e)), t = void 0);
  }
  return r;
}
r.d(t, {
  x: function() {
return n;
  }
});