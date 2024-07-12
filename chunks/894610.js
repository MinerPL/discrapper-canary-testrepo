n.d(t, {
  Z: function() {
return _;
  }
});
var s, a, i = n(735250),
  r = n(470079),
  l = n(755930),
  o = n(267101),
  c = n(689938),
  d = n(47307);
(s = a || (a = {})).LISTING_NAME = 'LISTING_NAME', s.PAYMENTS_COUNT = 'PAYMENTS_COUNT', s.PRICE = 'PRICE';
let u = (0, l.Yn)([
  (0, l.nn)({
key: 'LISTING_NAME',
cellClassName: d.listingNameColumn,
renderHeader: () => (0, i.jsx)(l.qN, {
  children: c.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_LISTING_COLUMN_TITLE
}),
sort: (0, l.Qg)(e => e.listing.name.toLowerCase())
  }),
  (0, l.GW)({
key: 'PAYMENTS_COUNT',
cellClassName: d.paymentsCountColumn,
renderHeader: () => (0, i.jsx)(l.qN, {
  children: c.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PURCHASES_COLUMN_TITLE
}),
getCount: e => e.paymentsCount,
sort: (0, l.Qg)(e => {
  var t;
  return null !== (t = e.paymentsCount) && void 0 !== t ? t : 0;
})
  }),
  (0, l.i$)({
key: 'PRICE',
cellClassName: d.priceColumn,
renderHeader: () => (0, i.jsx)(l.qN, {
  children: c.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE
}),
getAmount(e) {
  let {
    listing: t
  } = e;
  return t.price_tier;
},
sort: (0, l.Qg)(e => {
  var t;
  return null !== (t = e.listing.price_tier) && void 0 !== t ? t : 0;
})
  })
]);

function _(e) {
  let {
earningsData: t,
guildId: n
  } = e, s = (0, o.ue)(n, {
publishedOnly: !1
  }), a = t.currentPeriod, c = r.useMemo(() => s.map(e => {
var t;
let n = null == a ? void 0 : a.ppgs[e.id];
return {
  ...null != n ? n : {},
  key: e.id,
  listing: e,
  paymentsCount: null !== (t = null == n ? void 0 : n.purchase_count) && void 0 !== t ? t : 0
};
  }).filter(e => e.listing.published || e.paymentsCount > 0), [
s,
null == a ? void 0 : a.ppgs
  ]);
  return null == s || 0 === s.length ? null : (0, i.jsx)(l.ZP, {
columns: u,
data: c,
initialSortKey: 'LISTING_NAME'
  });
}