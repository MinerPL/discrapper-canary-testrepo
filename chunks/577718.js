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
  S = n("782959"),
  m = n("276645"),
  p = n("970731"),
  I = n("626135"),
  T = n("267642"),
  g = n("981631"),
  A = n("921944"),
  N = n("30513"),
  v = n("474936"),
  R = n("689938"),
  L = n("957950"),
  O = n("79469"),
  M = n("741160"),
  P = n("829972"),
  y = n("31932"),
  x = n("642301");

function D(e) {
  null != e && _.default.open(e.id, g.GuildSettingsSections.OVERVIEW, {
    section: g.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
  }, g.GuildSettingsSubsections.DISPLAY)
}

function b(e, t) {
  t && _.default.open(e.id, g.GuildSettingsSections.DISCOVERY)
}

function U(e, t) {
  null != t && ((0, T.isTierUnlocked)(t, g.BoostedGuildTiers.TIER_1) ? _.default.open(t.id, g.GuildSettingsSections.OVERVIEW, {
    section: g.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH
  }, g.GuildSettingsSubsections.INVITE) : (0, f.default)({
    analyticsLocations: e,
    analyticsSourceLocation: g.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH,
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
    I.default.track(g.AnalyticEvents.TOOLTIP_VIEWED, {
      type: v.PremiumUpsellTypes.PREMIUM_PROGRESS_BAR,
      location: {
        page: g.AnalyticsPages.GUILD_CHANNEL
      }
    })
  }, G = () => {
    I.default.track(g.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: v.PremiumUpsellTypes.INVITE_SPLASH_UPSELL,
      location: {
        page: g.AnalyticsPages.GUILD_CHANNEL
      },
      location_stack: f
    })
  }, w = (0, i.isThemeDark)(n) ? P : y, [k, F] = (0, c.useSelectedDismissibleContent)(t, A.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS);
  return (0, a.jsx)(a.Fragment, {
    children: (() => {
      switch (k) {
        case l.DismissibleContent.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_COACHMARK:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(m.default, {
              guildId: s.id,
              markAsDismissed: F
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
                src: w,
                className: O.fullWidthImage
              }),
              content: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
              buttonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: F
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
                src: w,
                className: O.fullWidthImage
              }),
              content: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
              buttonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: R.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(E.default, {
              guildId: s.id,
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(d.default, {
              onClick: () => b(s, !0),
              onSecondaryClick: () => b(s),
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(u.default, {
              guild: s,
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, T.isTierUnlocked)(s, g.BoostedGuildTiers.TIER_1) ? R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
              boostCount: (0, T.getNumberOfAppliedBoostsNeededForTier)(s, g.BoostedGuildTiers.TIER_1)
            }),
            t = (0, T.isTierUnlocked)(s, g.BoostedGuildTiers.TIER_1) ? R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : R.default.Messages.LEARN_MORE;
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(p.default, {
              onComponentMount: G,
              header: R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: M,
                className: O.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: R.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => U(f),
              onClick: () => U(f, s),
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(C.default, {
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(p.default, {
              className: L.tooltipOverrideColor,
              header: R.default.Messages.ACTIVE_THREADS_UPSELL_HEADER,
              content: R.default.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
              buttonCTA: R.default.Messages.GOT_IT,
              onClick: () => F(A.ContentDismissActionType.UNKNOWN),
              markAsDismissed: F
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
                className: O.fullWidthImage
              }),
              onClick: () => {
                _.default.open(s.id, g.GuildSettingsSections.ROLES), _.default.selectRole(s.getEveryoneRoleId(), R.default.Messages.USE_SOUNDBOARD)
              },
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.MEDIA_CHANNEL_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(S.default, {
              guildId: s.id,
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, a.jsx)(j, {
            renderPopout: (0, a.jsx)(h.default, {
              guildId: s.id,
              markAsDismissed: F
            }),
            renderGuildHeaderDropdownButton: r
          });
        default:
          return r()
      }
    })()
  })
})