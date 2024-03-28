"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var s = n("735250");
n("470079");
var a = n("399606"),
  l = n("481060"),
  i = n("607070"),
  r = n("739566"),
  o = n("942951"),
  u = n("703656"),
  d = n("702346"),
  c = n("331372"),
  f = n("981631"),
  E = n("689938"),
  _ = n("315752");

function T(e) {
  let {
    guildId: t,
    user: n,
    username: r
  } = e, o = (0, a.useStateFromStores)([i.default], () => !i.default.useReducedMotion), u = n.getAvatarURL(t, 56, o), d = (0, s.jsx)("img", {
    src: u,
    className: _.userAvatar,
    alt: ""
  });
  return (0, s.jsxs)("div", {
    className: _.thankYouCard,
    role: "img",
    "aria-label": E.default.Messages.ROLE_SUBSCRIPTION_WELCOME_CARD_ARIA_LABEL.format({
      username: r
    }),
    children: [(0, s.jsx)(c.default, {
      avatar: d
    }), (0, s.jsx)(l.Text, {
      className: _.thankYouText,
      tag: "p",
      color: "status-positive-text",
      variant: "heading-xl/medium",
      children: E.default.Messages.GUILD_PRODUCT_PURCHASE_THANK_YOU_CARD_TEXT.format({
        username: r,
        usernameHook: (e, t) => (0, s.jsx)(l.Text, {
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

function m(e) {
  var t, a, l;
  let {
    channel: i,
    message: c,
    compact: _
  } = e, m = (0, r.default)(c), I = (0, o.useUsernameHook)({
    user: c.author,
    channelId: i.id,
    guildId: i.guild_id,
    messageId: c.id
  })(m), p = E.default.Messages.SYSTEM_MESSAGE_GUILD_PRODUCT_PURCHASE.format({
    username: m.nick,
    usernameHook: I,
    productName: null !== (l = null === (a = c.purchaseNotification) || void 0 === a ? void 0 : null === (t = a.guild_product_purchase) || void 0 === t ? void 0 : t.product_name) && void 0 !== l ? l : "",
    handleProductListingClick: () => {
      var e, t, n;
      (0, u.transitionTo)(f.Routes.GUILD_PRODUCT(i.guild_id, null !== (n = null === (t = c.purchaseNotification) || void 0 === t ? void 0 : null === (e = t.guild_product_purchase) || void 0 === e ? void 0 : e.listing_id) && void 0 !== n ? n : ""))
    }
  });
  return (0, s.jsxs)(s.Fragment, {
    children: [(0, s.jsx)(d.default, {
      icon: n("570111"),
      timestamp: c.timestamp,
      compact: _,
      children: p
    }), (0, s.jsx)(T, {
      username: m.nick,
      guildId: i.guild_id,
      user: c.author
    })]
  })
}