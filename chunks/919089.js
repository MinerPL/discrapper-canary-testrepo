"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var s = n("37983"),
  l = n("884691"),
  a = n("65597"),
  i = n("151426"),
  r = n("10641"),
  o = n("592407"),
  u = n("305961"),
  d = n("162771"),
  c = n("489622"),
  E = n("599110"),
  f = n("179803"),
  _ = n("49111"),
  T = n("782340");

function I(e) {
  let {
    dismissCurrentNotice: t
  } = e, n = (0, a.useStateFromStores)([d.default], () => d.default.getGuildId(), []), I = (0, a.useStateFromStores)([u.default], () => u.default.getGuild(n), [n]);
  return (l.useEffect(() => {
    (0, r.requestMarkDismissibleContentAsShown)(i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
  }, []), null == I) ? null : (0, s.jsxs)(c.default, {
    color: c.NoticeColors.DEFAULT,
    children: [(0, s.jsx)(c.NoticeCloseButton, {
      onClick: () => {
        E.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "dismiss"
        }), t(), (0, f.dismissedGuildOnboardingUpsell)(I.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      }
    }), T.default.Messages.GUILD_ONBOARDING_NAGBAR_MESSAGE, (0, s.jsx)(c.NoticeButton, {
      onClick: () => {
        E.default.track(_.AnalyticEvents.UPSELL_CLICKED, {
          type: i.DismissibleContent[i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
          action: "primary"
        }), o.default.open(I.id, _.GuildSettingsSections.ONBOARDING), (0, f.dismissedGuildOnboardingUpsell)(I.id, i.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR)
      },
      children: T.default.Messages.GUILD_ONBOARDING_UPSELL_COACHMARK_CHECK_IT_OUT
    })]
  })
}