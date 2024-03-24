"use strict";
s.r(t), s.d(t, {
  default: function() {
    return S
  }
});
var a, l, n = s("37983");
s("884691");
var i = s("414456"),
  r = s.n(i),
  o = s("158352"),
  d = s("271560"),
  u = s("165169"),
  c = s("130437"),
  E = s("782340"),
  _ = s("168863"),
  I = s("74556");
(a = l || (l = {})).TIER_NAME = "tier_name", a.SUBSCRIBERS = "subscribers", a.AMOUNT = "amount", a.PRICE = "price";
let T = [{
  key: "tier_name",
  cellClassName: _.tierNameColumn,
  renderHeader: () => E.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIERS,
  render(e) {
    let t, {
      subscriptionListing: s
    } = e;
    if (null != s) {
      let e = (null == s ? void 0 : s.image_asset) == null ? void 0 : (0, d.getAssetURL)(s.application_id, s.image_asset, 128);
      t = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)("img", {
          src: e,
          alt: "",
          className: _.tierImage
        }), s.name]
      })
    }
    return (0, n.jsx)(c.Cell, {
      className: _.tierNameCell,
      children: t
    })
  }
}, {
  key: "subscribers",
  cellClassName: r(_.subscribersColumn, I.cellAlignRight),
  renderHeader: () => E.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_MEMBERS,
  render: e => (0, n.jsx)(c.SubscribersCell, {
    children: e.roleMemberCount
  })
}, {
  key: "price",
  cellClassName: r(_.priceColumn, I.cellAlignRight),
  renderHeader: () => E.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PRICE,
  render(e) {
    let {
      subscriptionListing: t
    } = e, s = null == t ? void 0 : t.subscription_plans[0], a = null == s ? void 0 : s.price;
    return (0, n.jsx)(c.CurrencyAmountCell, {
      children: a
    })
  }
}];
var S = e => {
  let {
    totalPayoutsForPeriod: t,
    guildId: s,
    className: a
  } = e, l = (0, u.default)(s, t);
  return (0, n.jsx)("div", {
    className: r(I.tableContainer, a),
    children: (0, n.jsx)(o.default, {
      columns: T,
      data: l,
      className: r(I.table, _.table),
      rowClassName: _.row,
      headerClassName: r(I.header, _.header)
    })
  })
}