n.d(t, {
  T: function() {
return o;
  },
  v: function() {
return i;
  }
});
var r = n(735250);
n(470079);
var s = n(481060);
let a = 'collectibles shop product details modal',
  o = e => {
let {
  product: t,
  category: o,
  analyticsSource: i,
  analyticsLocations: l,
  returnRef: c
} = e;
(0, s.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('2026').then(n.bind(n, 702370));
  return n => (0, r.jsx)(e, {
    ...n,
    product: t,
    category: o,
    analyticsSource: i,
    analyticsLocations: l,
    returnRef: c
  });
}, {
  modalKey: a
});
  },
  i = () => {
(0, s.closeModal)(a);
  };