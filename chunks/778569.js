n.d(t, {
  Z: function() {
return r;
  }
}), n(47120);
var i = n(470079),
  a = n(81063);
let s = [
  'embedded_cover',
  'embedded_background'
];

function r(e) {
  let {
applicationId: t,
size: n,
names: r = s
  } = e, [l, o] = i.useState(null), [c, d] = i.useState(!0), u = (0, a.getAssetImage)(t, l, n);
  return i.useEffect(() => {
(0, a.getAssets)(t).then(e => {
  for (let [t, n] of(d(!1), Object.entries(e)))
    if (null != n && '' !== n.id && r.includes(n.name)) {
      o(n.id);
      return;
    }
});
  }, [t]), {
url: u,
state: c ? 'loading' : null != u ? 'fetched' : 'not-found'
  };
}