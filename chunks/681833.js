"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("987997"),
  u = s("78839"),
  c = s("682864"),
  S = s("981631"),
  E = s("689938"),
  T = s("886190"),
  _ = s("854554"),
  f = s("845904");

function m(e) {
  let {
    onClickManageSubscription: t
  } = e, s = (0, r.useStateFromStores)([u.default], () => u.default.getSubscriptions()), l = n.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === S.SubscriptionTypes.APPLICATION && e.status !== S.SubscriptionStatusTypes.ENDED), [s]);
  return 0 === l.length ? null : (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: T.__invalid_sectionTitle,
      children: E.default.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
    }), (0, a.jsx)(c.default, {
      size: 4
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: T.sectionDescription,
      children: E.default.Messages.APPLICATION_USER_SUBSCRIPTIONS_DESCRIPTION
    }), (0, a.jsx)(c.default, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: i()(_.guildBoostingSubscriptionRow, T.card),
      children: [(0, a.jsx)("img", {
        src: f,
        alt: "",
        className: T.bannerImage
      }), (0, a.jsxs)("div", {
        className: T.textContainer,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: T.header,
          children: E.default.Messages.APPLICATION_USER_SUBSCRIPTIONS_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          className: T.description,
          children: E.default.Messages.APPLICATION_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
            numSubscriptions: l.length
          })
        })]
      }), (0, a.jsx)(d.default, {
        color: o.Button.Colors.BRAND,
        onClick: t,
        children: E.default.Messages.APPLICATION_MANAGE_SUBSCRIPTIONS_BUTTON
      })]
    })]
  })
}