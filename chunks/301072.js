r.d(e, {
  N: function() {
return c;
  }
});
var n = r(358133),
  _ = r(726300),
  a = r(233863),
  i = r(416097),
  o = r(544457),
  E = r(527475);
let s = {},
  c = t => {
let e;
let r = (0, a.Y)(),
  c = (0, i.I)('LCP'),
  I = t => {
    let n = t[t.length - 1];
    if (n) {
      let t = Math.max(n.startTime - (0, _.A)(), 0);
      t < r.firstHiddenTime && (c.value = t, c.entries = [n], e());
    }
  },
  R = (0, o.N)('largest-contentful-paint', I);
if (R) {
  e = (0, n._)(t, c);
  let r = () => {
    !s[c.id] && (I(R.takeRecords()), R.disconnect(), s[c.id] = !0, e(!0));
  };
  return [
    'keydown',
    'click'
  ].forEach(t => {
    addEventListener(t, r, {
      once: !0,
      capture: !0
    });
  }), (0, E.u)(r, !0), r;
}
  };