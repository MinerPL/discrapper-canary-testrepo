"use strict";
s.r(t), s.d(t, {
  default: function() {
    return f
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("803997"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("78839"),
  u = s("682864"),
  c = s("981631"),
  S = s("689938"),
  E = s("733467"),
  T = s("854554"),
  _ = s("834300");

function f(e) {
  let {
    onClickManageSubscription: t
  } = e, s = (0, r.useStateFromStores)([d.default], () => d.default.getSubscriptions()), l = n.useMemo(() => Object.values(null != s ? s : {}).filter(e => e.type === c.SubscriptionTypes.GUILD).filter(e => e.status !== c.SubscriptionStatusTypes.ENDED), [s]);
  return 0 === l.length ? null : (0, a.jsxs)("div", {
    className: E.container,
    children: [(0, a.jsx)(o.Heading, {
      variant: "heading-md/semibold",
      className: E.__invalid_sectionTitle,
      children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
    }), (0, a.jsx)(u.default, {
      size: 4
    }), (0, a.jsx)(o.Text, {
      variant: "text-sm/normal",
      className: E.sectionDescription,
      children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_USER_SUBSCRIPTIONS_DESCRIPTION
    }), (0, a.jsx)(u.default, {
      size: 24
    }), (0, a.jsxs)("div", {
      className: i()(T.guildBoostingSubscriptionRow, E.card),
      children: [(0, a.jsx)("img", {
        src: _,
        alt: "",
        className: E.handImage
      }), (0, a.jsxs)("div", {
        className: E.textContainer,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-xl/semibold",
          className: E.header,
          children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_TITLE
        }), (0, a.jsx)(o.Text, {
          variant: "text-md/normal",
          className: E.description,
          children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_ACTIVE_USER_SUBSCRIPTIONS_DESCRIPTION.format({
            numSubscriptions: l.length
          })
        })]
      }), (0, a.jsx)(o.Button, {
        color: o.Button.Colors.CUSTOM,
        size: o.Button.Sizes.SMALL,
        look: o.Button.Looks.INVERTED,
        className: E.manageSubscriptionsButton,
        onClick: t,
        children: S.default.Messages.GUILD_ROLE_SUBSCRIPTIONS_MANAGE_SUBSCRIPTIONS_BUTTON
      })]
    })]
  })
}