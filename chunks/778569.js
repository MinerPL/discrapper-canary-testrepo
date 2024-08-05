n.d(t, {
  Z: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  s = n(81063);
let a = [
  'embedded_cover',
  'embedded_background'
];

function r(e) {
  let {
applicationId: t,
size: n,
names: r = a
  } = e, [l, o] = i.useState(null), [c, u] = i.useState(!0), d = (0, s.getAssetImage)(t, l, n);
  return i.useEffect(() => {
(0, s.getAssets)(t).then(e => {
  for (let [t, n] of(u(!1), Object.entries(e)))
    if (null != n && '' !== n.id && r.includes(n.name)) {
      o(n.id);
      return;
    }
});
  }, [t]), {
url: d,
state: c ? 'loading' : null != d ? 'fetched' : 'not-found'
  };
}