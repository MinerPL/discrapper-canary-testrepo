"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var s = a("37983");
a("884691");
var n = a("414456"),
  i = a.n(n),
  l = a("446674"),
  r = a("77078"),
  o = a("79112"),
  d = a("915639"),
  u = a("415133"),
  c = a("42060"),
  E = a("49111"),
  m = a("782340"),
  f = a("250727");

function S(e) {
  let {
    onClose: t,
    handleStartFlow: a
  } = e, n = (0, c.useForceMigration)(), S = (0, l.useStateFromStores)([d.default], () => d.default.locale);
  return (0, s.jsxs)("div", {
    className: f.infoContainer,
    children: [(0, s.jsx)(r.Heading, {
      className: i(f.finishTitle, {
        [f.finishTitlePadding]: n
      }),
      color: "header-primary",
      variant: "heading-xl/bold",
      children: n ? m.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format({
        date: (0, u.getLocalizedForcedUUDate)(S)
      }) : m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
    }), (0, s.jsx)(r.Text, {
      className: f.subtitleFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: n ? m.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format({
        date: (0, u.getLocalizedForcedUUDate)(S)
      }) : m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
    }), (0, s.jsx)(r.Text, {
      className: f.promptFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
        onClick: () => {
          t(), o.default.open(E.UserSettingsSections.ACCOUNT)
        }
      })
    }), (0, s.jsx)(r.Button, {
      className: f.button,
      type: "button",
      size: r.Button.Sizes.SMALL,
      onClick: n ? a : t,
      children: n ? m.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT : m.default.Messages.INVITES_DISABLED_CONFIRMATION
    })]
  })
}