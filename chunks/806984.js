t.d(n, {
  Z: function() {
return c;
  }
});
var r = t(470079),
  a = t(512722),
  o = t.n(a),
  i = t(598),
  s = t(390917),
  l = t(464797);

function c(e) {
  let {
handleClose: n
  } = e, {
guildProductListing: t,
guildId: a
  } = (0, l._)(), {
selectedSkuPricePreview: c
  } = (0, i.usePaymentContext)();
  return r.useEffect(() => {
o()(null != c, 'selectedSkuPricePreview cannot be null'), (0, s.u)({
  guildId: a,
  guildProductListingId: t.id,
  skuPricePreview: c
}), n();
  }, []), null;
}