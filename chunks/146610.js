"use strict";
var n, i, l = t(735250);
t(470079);
var a = t(120356),
  r = t.n(a),
  o = t(151011),
  c = t(73346),
  d = t(169903),
  u = t(8584),
  E = t(689938),
  _ = t(288866),
  I = t(225278);
(n = i || (i = {})).TIER_NAME = "tier_name", n.SUBSCRIBERS = "subscribers", n.AMOUNT = "amount", n.PRICE = "price";
let T = [{
  key: "tier_name",
  cellClassName: _.tierNameColumn,
  renderHeader: () => E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_TIERS,
  render(e) {
    let s, {
      subscriptionListing: t
    } = e;
    if (null != t) {
      let e = (null == t ? void 0 : t.image_asset) == null ? void 0 : (0, c._W)(t.application_id, t.image_asset, 128);
      s = (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)("img", {
          src: e,
          alt: "",
          className: _.tierImage
        }), t.name]
      })
    }
    return (0, l.jsx)(u.bL, {
      className: _.tierNameCell,
      children: s
    })
  }
}, {
  key: "subscribers",
  cellClassName: r()(_.subscribersColumn, I.cellAlignRight),
  renderHeader: () => E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_MEMBERS,
  render: e => (0, l.jsx)(u.av, {
    children: e.roleMemberCount
  })
}, {
  key: "price",
  cellClassName: r()(_.priceColumn, I.cellAlignRight),
  renderHeader: () => E.Z.Messages.GUILD_ROLE_SUBSCRIPTION_EARNINGS_TABLE_PRICE,
  render(e) {
    let {
      subscriptionListing: s
    } = e, t = null == s ? void 0 : s.subscription_plans[0], n = null == t ? void 0 : t.price;
    return (0, l.jsx)(u.kA, {
      children: n
    })
  }
}];
s.Z = e => {
  let {
    totalPayoutsForPeriod: s,
    guildId: t,
    className: n
  } = e, i = (0, d.Z)(t, s);
  return (0, l.jsx)("div", {
    className: r()(I.tableContainer, n),
    children: (0, l.jsx)(o.Z, {
      columns: T,
      data: i,
      className: r()(I.table, _.table),
      rowClassName: _.row,
      headerClassName: r()(I.header, _.header)
    })
  })
}