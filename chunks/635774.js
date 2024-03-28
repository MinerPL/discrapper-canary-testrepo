"use strict";
a.r(t), a.d(t, {
  default: function() {
    return f
  }
});
var s = a("735250");
a("470079");
var i = a("803997"),
  n = a.n(i),
  l = a("442837"),
  o = a("481060"),
  r = a("230711"),
  d = a("706454"),
  u = a("346585"),
  c = a("347649"),
  E = a("981631"),
  m = a("689938"),
  S = a("659338");

function f(e) {
  let {
    onClose: t,
    handleStartFlow: a
  } = e, i = (0, c.useForceMigration)(), f = (0, l.useStateFromStores)([d.default], () => d.default.locale);
  return (0, s.jsxs)("div", {
    className: S.infoContainer,
    children: [(0, s.jsx)(o.Heading, {
      className: n()(S.finishTitle, {
        [S.finishTitlePadding]: i
      }),
      color: "header-primary",
      variant: "heading-xl/bold",
      children: i ? m.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_1.format({
        date: (0, u.getLocalizedForcedUUDate)(f)
      }) : m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_TITLE
    }), (0, s.jsx)(o.Text, {
      className: S.subtitleFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: i ? m.default.Messages.UU_FORCE_MIGRATION_EXISTING_FLOW_REMINDER_BODY_2.format({
        date: (0, u.getLocalizedForcedUUDate)(f)
      }) : m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_1
    }), (0, s.jsx)(o.Text, {
      className: S.promptFinish,
      color: "header-secondary",
      variant: "text-md/medium",
      children: m.default.Messages.POMELO_EXISTING_FLOW_REMINDER_BODY_2.format({
        onClick: () => {
          t(), r.default.open(E.UserSettingsSections.ACCOUNT)
        }
      })
    }), (0, s.jsx)(o.Button, {
      className: S.button,
      type: "button",
      size: o.Button.Sizes.SMALL,
      onClick: i ? a : t,
      children: i ? m.default.Messages.PREMIUM_SUBSCRIPTION_PAST_DUE_INVALID_PAYMENT_NOTICE_BUTTON_TEXT : m.default.Messages.INVITES_DISABLED_CONFIRMATION
    })]
  })
}