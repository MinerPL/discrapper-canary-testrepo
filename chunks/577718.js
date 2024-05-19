"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("524437"),
  i = n("780384"),
  r = n("481060"),
  o = n("906732"),
  u = n("380009"),
  d = n("282051"),
  c = n("243778"),
  f = n("26323"),
  E = n("433280"),
  h = n("34131"),
  _ = n("434404"),
  C = n("567458"),
  m = n("782959"),
  S = n("276645"),
  p = n("970731"),
  g = n("626135"),
  I = n("267642"),
  T = n("981631"),
  A = n("921944"),
  N = n("30513"),
  v = n("474936"),
  R = n("689938"),
  O = n("925058"),
  L = n("835104"),
  M = n("741160"),
  y = n("829972"),
  P = n("31932"),
  x = n("642301");

function D(e) {
  null != e && _.default.open(e.id, T.GuildSettingsSections.OVERVIEW, {
    section: T.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
  }, T.GuildSettingsSubsections.DISPLAY)
}

function b(e, t) {
  t && _.default.open(e.id, T.GuildSettingsSections.DISCOVERY)
}

function U(e, t) {
  null != t && ((0, I.isTierUnlocked)(t, T.BoostedGuildTiers.TIER_1) ? _.default.open(t.id, T.GuildSettingsSections.OVERVIEW, {
    section: T.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH
  }, T.GuildSettingsSubsections.INVITE) : (0, f.default)({
    analyticsLocations: e,
    analyticsSourceLocation: T.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, N.guildInviteUpsellPerks)()
  }))
}

function j(e) {
  let {
    renderPopout: t,
    renderGuildHeaderDropdownButton: n
  } = e;
  return (0, a.jsx)(r.Popout, {
    renderPopout: () => (0, a.jsx)("div", {
      onClick: e => e.stopPropagation(),
      children: t
    }),
    position: "bottom",
    align: "center",
    animation: r.Popout.Animation.TRANSLATE,
    shouldShow: !0,
    children: () => n()
  })
}
t.default = s.memo(function(e) {
  let {
    contentTypes: t,
    theme: n,
    guild: s,
    renderGuildHeaderDropdownButton: r
  } = e, {
    analyticsLocations: f
  } = (0, o.default)(), N = () => {
    g.default.track(T.AnalyticEvents.TOOLTIP_VIEWED, {
      type: v.PremiumUpsellTypes.PREMIUM_PROGRESS_BAR,
      location: {
        page: T.AnalyticsPages.GUILD_CHANNEL
      }
    })
  }, G = () => {
    g.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v.PremiumUpsellTypes.INVITE_SPLASH_UPSELL,
      location: {
        page: T.AnalyticsPages.GUILD_CHANNEL
      },
      location_stack: f
    })
  }, k = (0, i.isThemeDark)(n) ? y : P, [w, B] = (0, c.useSelectedDismissibleContent)(t, A.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS);
  return (0, a.jsx)(a.Fragment, {
    children: (() => {
      switch (w) {
        case l.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(S.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(p.default, {
              onComponentMount: N,
              header: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: k,
                className: L.fullWidthImage
              }),
              content: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
              buttonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(p.default, {
              onComponentMount: N,
              header: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: k,
                className: L.fullWidthImage
              }),
              content: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
              buttonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(E.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(d.default, {
              onClick: () => b(s, !0),
              onSecondaryClick: () => b(s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(u.default, {
              guild: s,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, I.isTierUnlocked)(s, T.BoostedGuildTiers.TIER_1) ? R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
              boostCount: (0, I.getNumberOfAppliedBoostsNeededForTier)(s, T.BoostedGuildTiers.TIER_1)
            }),
            t = (0, I.isTierUnlocked)(s, T.BoostedGuildTiers.TIER_1) ? R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : R.default.Messages.LEARN_MORE;
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(p.default, {
              onComponentMount: G,
              header: R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: M,
                className: L.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => U(f),
              onClick: () => U(f, s),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(C.default, {
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(p.default, {
              className: O.tooltipOverrideColor,
              header: R.default.Messages.ACTIVE_THREADS_UPSELL_HEADER,
              content: R.default.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
              buttonCTA: R.default.Messages.GOT_IT,
              onClick: () => B(A.ContentDismissActionType.UNKNOWN),
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(p.default, {
              header: R.default.Messages.SOUNDBOARD_TOOLTIP_TITLE_NEW,
              content: R.default.Messages.SOUNDBOARD_TOOLTIP_BODY,
              buttonCTA: R.default.Messages.CHECK_IT_OUT,
              secondaryButtonCTA: R.default.Messages.NO_THANKS,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: x,
                className: L.fullWidthImage
              }),
              onClick: () => {
                _.default.open(s.id, T.GuildSettingsSections.ROLES), _.default.selectRole(s.getEveryoneRoleId(), R.default.Messages.USE_SOUNDBOARD)
              },
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.MEDIA_CHANNEL_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(m.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(h.default, {
              guildId: s.id,
              markAsDismissed: B
            }),
            renderGuildHeaderDropdownButton: r
          });
        default:
          return r()
      }
    })()
  })
})