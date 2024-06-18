"use strict";
t.d(s, {
  Z: function() {
    return E
  }
});
var n, i, l = t(735250),
  a = t(470079),
  r = t(755930),
  o = t(267101),
  c = t(689938),
  d = t(254510);
(n = i || (i = {})).LISTING_NAME = "LISTING_NAME", n.PAYMENTS_COUNT = "PAYMENTS_COUNT", n.PRICE = "PRICE";
let u = (0, r.Yn)([(0, r.nn)({
  key: "LISTING_NAME",
  cellClassName: d.listingNameColumn,
  renderHeader: () => (0, l.jsx)(r.qN, {
    children: c.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_LISTING_COLUMN_TITLE
  }),
  sort: (0, r.Qg)(e => e.listing.name.toLowerCase())
}), (0, r.GW)({
  key: "PAYMENTS_COUNT",
  cellClassName: d.paymentsCountColumn,
  renderHeader: () => (0, l.jsx)(r.qN, {
    children: c.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PURCHASES_COLUMN_TITLE
  }),
  getCount: e => e.paymentsCount,
  sort: (0, r.Qg)(e => {
    var s;
    return null !== (s = e.paymentsCount) && void 0 !== s ? s : 0
  })
}), (0, r.i$)({
  key: "PRICE",
  cellClassName: d.priceColumn,
  renderHeader: () => (0, l.jsx)(r.qN, {
    children: c.Z.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE
  }),
  getAmount(e) {
    let {
      listing: s
    } = e;
    return s.price_tier
  },
  sort: (0, r.Qg)(e => {
    var s;
    return null !== (s = e.listing.price_tier) && void 0 !== s ? s : 0
  })
})]);

function E(e) {
  let {
    earningsData: s,
    guildId: t
  } = e, n = (0, o.ue)(t, {
    publishedOnly: !1
  }), i = s.currentPeriod, c = a.useMemo(() => n.map(e => {
    var s;
    let t = null == i ? void 0 : i.ppgs[e.id];
    return {
      ...null != t ? t : {},
      key: e.id,
      listing: e,
      paymentsCount: null !== (s = null == t ? void 0 : t.purchase_count) && void 0 !== s ? s : 0
    }
  }).filter(e => e.listing.published || e.paymentsCount > 0), [n, null == i ? void 0 : i.ppgs]);
  return null == n || 0 === n.length ? null : (0, l.jsx)(r.ZP, {
    columns: u,
    data: c,
    initialSortKey: "LISTING_NAME"
  })
}