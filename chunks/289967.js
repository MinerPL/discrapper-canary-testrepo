"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("37983");
n("884691");
var l = n("65597"),
  a = n("77078"),
  i = n("206230"),
  r = n("574073"),
  o = n("232259"),
  u = n("393414"),
  d = n("304198"),
  c = n("790369"),
  E = n("49111"),
  f = n("782340"),
  _ = n("503503");

function T(e) {
  let {
    guildId: t,
    user: n,
    username: r
  } = e, o = (0, l.useStateFromStores)([i.default], () => !i.default.useReducedMotion), u = n.getAvatarURL(t, 56, o), d = (0, s.jsx)("img", {
    src: u,
    className: _.userAvatar,
    alt: ""
  });
  return (0, s.jsxs)("div", {
    className: _.thankYouCard,
    role: "img",
    "aria-label": f.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: r
    }),
    children: [(0, s.jsx)(c.default, {
      avatar: d
    }), (0, s.jsx)(a.Text, {
      className: _.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: f.default.Messages.GUILD_PRODUCT_PURCHASE_THANK_YOU_CARD_TEXT.format({
        username: r,
        usernameHook: (e, t) => (0, s.jsx)(a.Text, {
          tag: "span",
          color: "status-positive-text",
          variant: "heading-xxl/extrabold",
          lineClamp: 3,
          children: e
        }, t)
      })
    })]
  })
}

function I(e) {
  var t, l, a;
  let {
    channel: i,
    message: c,
    compact: _
  } = e, I = (0, r.default)(c), m = (0, o.useUsernameHook)({
    user: c.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: c.id
  })(I), N = f.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE.format({
    username: I.nick,
    usernameHook: m,
    productName: null !== (a = null === (l = c.purchaseNotification) || void 0 === l ? void 0 : null === (t = l.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== a ? a : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.transitionTo)(E.Routes.GUILD_PRODUCT(i.guild_id, null !== (n = null === (t = c.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ""))
    }
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.default, {
      icon: n("127067"),
      timestamp: c.timestamp,
      compact: _,
      children: N
    }), (0, s.jsx)(T, {
      username: I.nick,
      guildId: i.guild_id,
      user: c.author
    })]
  })
}