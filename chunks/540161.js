r.d(e, {
  m: function() {
return o;
  }
});
var n = r(358133),
  _ = r(416097),
  a = r(544457),
  i = r(527475);
let o = t => {
  let e;
  let r = (0, _.I)('CLS', 0),
o = 0,
E = [],
s = t => {
  t.forEach(t => {
    if (!t.hadRecentInput) {
      let n = E[0],
        _ = E[E.length - 1];
      o && 0 !== E.length && t.startTime - _.startTime < 1000 && t.startTime - n.startTime < 5000 ? (o += t.value, E.push(t)) : (o = t.value, E = [t]), o > r.value && (r.value = o, r.entries = E, e && e());
    }
  });
},
c = (0, a.N)('layout-shift', s);
  if (c) {
e = (0, n._)(t, r);
let _ = () => {
  s(c.takeRecords()), e(!0);
};
return (0, i.u)(_), _;
  }
};