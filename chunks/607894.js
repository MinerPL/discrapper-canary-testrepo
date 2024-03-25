"use strict";
n.r(t), n.d(t, {
  default: function() {
    return h
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("151426"),
  i = n("10641"),
  r = n("179803"),
  o = n("592407"),
  u = n("599110"),
  d = n("164586"),
  c = n("49111"),
  f = n("994428"),
  E = n("782340"),
  h = e => {
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