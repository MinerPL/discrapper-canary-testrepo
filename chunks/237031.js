n.d(t, {
  T: function() {
return o;
  },
  v: function() {
return i;
  }
});
var s = n(735250);
n(470079);
var r = n(481060);
let a = 'collectibles shop product details modal',
  o = e => {
let {
  product: t,
  category: o,
  analyticsSource: i,
  analyticsLocations: c,
  returnRef: l
} = e;
(0, r.openModalLazy)(async () => {
  let {
    default: e
  } = await n.e('2026').then(n.bind(n, 702370));
  return n => (0, s.jsx)(e, {
    ...n,
    product: t,
    category: o,
    analyticsSource: i,
    analyticsLocations: c,
    returnRef: l
  });
}, {
  modalKey: a
});
  },
  i = () => {
(0, r.closeModal)(a);
  };