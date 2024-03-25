"use strict";
s.r(t), s.d(t, {
  default: function() {
    return E
  }
});
var a, l, n = s("37983"),
  i = s("884691"),
  r = s("207353"),
  o = s("442379"),
  d = s("782340"),
  u = s("652692");
(a = l || (l = {})).LISTING_NAME = "LISTING_NAME", a.PAYMENTS_COUNT = "PAYMENTS_COUNT", a.PRICE = "PRICE";
let c = (0, r.createTableColumns)([(0, r.createListingNameColumn)({
  key: "LISTING_NAME",
  cellClassName: u.listingNameColumn,
  renderHeader: () => (0, n.jsx)(r.HeaderCell, {
    children: d.default.Messages.GUILD_PRODUCT_EARNINGS_TABLE_LISTING_COLUMN_TITLE
  }),
  sort: (0, r.getDefaultSorter)(e => e.listing.name.toLowerCase())
}), (0, r.createPersonCountColumn)({
  key: "PAYMENTS_COUNT",
  cellClassName: u.paymentsCountColumn,
  renderHeader: () => (0, n.jsx)(r.HeaderCell, {
    children: d.default.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PURCHASES_COLUMN_TITLE
  }),
  getCount: e => e.paymentsCount,
  sort: (0, r.getDefaultSorter)(e => {
    var t;
    return null !== (t = e.paymentsCount) && void 0 !== t ? t : 0
  })
}), (0, r.createCurrencyAmountColumn)({
  key: "PRICE",
  cellClassName: u.priceColumn,
  renderHeader: () => (0, n.jsx)(r.HeaderCell, {
    children: d.default.Messages.GUILD_PRODUCT_EARNINGS_TABLE_PRICE_COLUMN_TITLE
  }),
  getAmount(e) {
    let {
      listing: t
    } = e;
    return t.price_tier
  },
  sort: (0, r.getDefaultSorter)(e => {
    var t;
    return null !== (t = e.listing.price_tier) && void 0 !== t ? t : 0
  })
})]);

function E(e) {
  let {
    earningsData: t,
    guildId: s
  } = e, a = (0, o.useGuildProductsForGuild)(s, {
    publishedOnly: !1
  }), l = t.currentPeriod, d = i.useMemo(() => a.map(e => {
    var t;
    let s = null == l ? void 0 : l.ppgs[e.id];
    return {
      ...null != s ? s : {},
      key: e.id,
      listing: e,
      paymentsCount: null !== (t = null == s ? void 0 : s.purchase_count) && void 0 !== t ? t : 0
    }
  }).filter(e => e.listing.published || e.paymentsCount > 0), [a, null == l ? void 0 : l.ppgs]);
  return null == a || 0 === a.length ? null : (0, n.jsx)(r.default, {
    columns: c,
    data: d,
    initialSortKey: "LISTING_NAME"
  })
}