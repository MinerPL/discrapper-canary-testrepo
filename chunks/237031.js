n.d(t, {
  T: function() {
return i;
  },
  v: function() {
return o;
  }
});
var s = n(735250);
n(470079);
var r = n(481060);
let a = 'collectibles shop product details modal',
  i = e => {
let {
  product: t,
  category: i,
  analyticsSource: o,
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
    category: i,
    analyticsSource: o,
    analyticsLocations: c,
    returnRef: l
  });
}, {
  modalKey: a
});
  },
  o = () => {
(0, r.closeModal)(a);
  };