n.d(t, {
  E$: function() {
return o;
  },
  KV: function() {
return i;
  }
});
var a = n(149765),
  s = n(605436),
  r = n(700785);
let l = (e, t, n) => {
  if (null == e.id)
return !1;
  let s = r.I0({
forceRoles: {
  [e.id]: e
},
context: n
  });
  return a.e$(s, t);
};

function i(e, t) {
  return Object.values(t).sort(s.W).map(e => (0, s.X0)(e));
}

function o(e, t, n, a) {
  return Object.values(t).filter(e => (0, s.GJ)(e) || l(e, a, n));
}