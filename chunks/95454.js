"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  i = s.n(l),
  r = s("446674"),
  o = s("77078"),
  d = s("892843"),
  u = s("521012"),
  c = s("191814"),
  S = s("49111"),
  E = s("782340"),
  T = s("930985"),
  f = s("809432"),
  _ = s("757856");

function m(e) {
  let {
    onClickManageSubscription: t
  } = e, s = (0, r.useStateFromStores)([u.default], () => u.default.getSubscriptions()), l = n.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === S.SubscriptionTypes.APPLICATION && e.status !== S.SubscriptionStatusTypes.ENDED), [s]);
  return 0 === l.length ? null : (0, a.jsxs)("div", {
    className: T.container,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: T.sectionTitle,
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
      className: i(f.guildBoostingSubscriptionRow, T.card),
      children: [(0, a.jsx)("img", {
        src: _,
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