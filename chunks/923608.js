"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("524437"),
  i = n("605236"),
  r = n("150340"),
  o = n("434404"),
  u = n("626135"),
  d = n("428695"),
  c = n("981631"),
  f = n("921944"),
  E = n("689938");
t.default = e => {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  s.useEffect(() => {
    (0, i.requestMarkDismissibleContentAsShown)(l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
  }, []);
  let h = s.useCallback(() => {
      o.default.open(t.id, c.GuildSettingsSections.ONBOARDING), u.default.track(c.AnalyticEvents.UPSELL_CLICKED, {
        type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
        action: "primary"
      }), (0, i.markDismissibleContentAsDismissed)(l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, {
        dismissAction: f.ContentDismissActionType.PRIMARY
      }), (0, r.dismissedGuildOnboardingUpsell)(t.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
    }, [t.id]),
    _ = s.useCallback(() => {
      u.default.track(c.AnalyticEvents.UPSELL_CLICKED, {
        type: l.DismissibleContent[l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE],
        action: "dismiss"
      }), n(f.ContentDismissActionType.UNKNOWN), (0, r.dismissedGuildOnboardingUpsell)(t.id, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
    }, [t.id, n]);
  return (0, a.jsx)(d.default, {
    guild: t,
    onDismissed: _,
    onClick: h,
    title: E.default.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_TITLE,
    message: E.default.Messages.GUILD_ONBOARDING_CHANNEL_NOTICE_MESSAGE,
    cta: E.default.Messages.CHECK_IT_OUT,
    trackingSource: c.ChannelNoticeCtaSources.GUILD_ONBOARDING_UPSELL_NOTICE,
    type: c.ChannelNoticeTypes.GUILD_ONBOARDING_UPSELL
  })
}