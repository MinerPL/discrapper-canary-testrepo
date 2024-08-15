
function r(e, t, n, r) {
  if (e === t)
return !0;
  if (void 0 === e || void 0 === t)
return e === t;
  let i = Object.keys(e),
a = Object.keys(t);
  if (i.length !== a.length)
return null != r && r('shallowEqual: unequal key lengths '.concat(i.length, ' !=== ').concat(a.length)), !1;
  let s = [];
  for (let a = 0; a < i.length; a++) {
let o = i[a];
if (e[o] !== t[o] && (null == n || !n.includes(o))) {
  if (null == r)
    return !1;
  s.push(o);
}
  }
  return null != r && s.length > 0 && r('shallowEqual: unequal keys: '.concat(s.join(', '))), 0 === s.length;
}

function i(e, t) {
  return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
n.d(t, {
  E: function() {
return i;
  },
  Z: function() {
return r;
  }
}), n(653041);