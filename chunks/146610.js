"use strict";
s.r(t);
var a, l, n = s("735250");
s("470079");
var i = s("803997"),
  r = s.n(i),
  o = s("151011"),
  d = s("73346"),
  u = s("169903"),
  c = s("67152"),
  E = s("689938"),
  _ = s("310135"),
  I = s("656899");
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
  cellClassName: r()(_.subscribersColumn, I.cellAlignRight),
  renderHeader: () => E.default.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_MEMBERS,
  render: e => (0, n.jsx)(c.SubscribersCell, {
    children: e.roleMemberCount
  })
}, {
  key: "price",
  cellClassName: r()(_.priceColumn, I.cellAlignRight),
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
t.default = e => {
  let {
    totalPayoutsForPeriod: t,
    guildId: s,
    className: a
  } = e, l = (0, u.default)(s, t);
  return (0, n.jsx)("div", {
    className: r()(I.tableContainer, a),
    children: (0, n.jsx)(o.default, {
      columns: T,
      data: l,
      className: r()(I.table, _.table),
      rowClassName: _.row,
      headerClassName: r()(I.header, _.header)
    })
  })
}