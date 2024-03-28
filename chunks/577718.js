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
  S = n("970731"),
  I = n("626135"),
  p = n("267642"),
  T = n("981631"),
  g = n("921944"),
  A = n("30513"),
  N = n("474936"),
  v = n("689938"),
  O = n("54449"),
  R = n("1006"),
  L = n("741160"),
  P = n("829972"),
  M = n("31932"),
  y = n("642301");

function D(e) {
  null != e && _.default.open(e.id, T.GuildSettingsSections.OVERVIEW, {
    section: T.AnalyticsSections.PREMIUM_GUILD_PROGRESS_BAR
  }, T.GuildSettingsSubsections.DISPLAY)
}

function b(e, t) {
  t && _.default.open(e.id, T.GuildSettingsSections.DISCOVERY)
}

function x(e, t) {
  null != t && ((0, p.isTierUnlocked)(t, T.BoostedGuildTiers.TIER_1) ? _.default.open(t.id, T.GuildSettingsSections.OVERVIEW, {
    section: T.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH
  }, T.GuildSettingsSubsections.INVITE) : (0, f.default)({
    analyticsLocations: e,
    analyticsSourceLocation: T.AnalyticsSections.PREMIUM_GUILD_INVITE_SPLASH,
    guild: t,
    perks: (0, A.guildInviteUpsellPerks)()
  }))
}

function U(e) {
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
  } = (0, o.default)(), A = () => {
    I.default.track(T.AnalyticEvents.TOOLTIP_VIEWED, {
      type: N.PremiumUpsellTypes.PREMIUM_PROGRESS_BAR,
      location: {
        page: T.AnalyticsPages.GUILD_CHANNEL
      }
    })
  }, j = () => {
    I.default.track(T.AnalyticEvents.PREMIUM_UPSELL_VIEWED, {
      type: N.PremiumUpsellTypes.INVITE_SPLASH_UPSELL,
      location: {
        page: T.AnalyticsPages.GUILD_CHANNEL
      },
      location_stack: f
    })
  }, G = (0, i.isThemeDark)(n) ? P : M, [w, k] = (0, c.useSelectedDismissibleContent)(t, g.DismissibleContentGroupName.GUILD_HEADER_TOOLTIPS);
  return (0, a.jsx)(a.Fragment, {
    children: (() => {
      switch (w) {
        case l.DismissibleContent.GUILD_HEADER_PREMIUM_GUILD_PROGRESS:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(S.default, {
              onComponentMount: A,
              header: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: G,
                className: R.fullWidthImage
              }),
              content: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CONTENT.format(),
              buttonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_PROGRESS_BAR_SIZE_COACH_MARK:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(S.default, {
              onComponentMount: A,
              header: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: G,
                className: R.fullWidthImage
              }),
              content: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_SIZE_TOOLTIP_CONTENT.format(),
              buttonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS,
              secondaryButtonCTA: v.default.Messages.PREMIUM_PROGRESS_BAR_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => D(),
              onClick: () => D(s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ROLE_SUBSCRIPTION_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(E.default, {
              guildId: s.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SERVER_DISCOVERY_TOOLTIP:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(d.default, {
              onClick: () => b(s, !0),
              onSecondaryClick: () => b(s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_DISCOVERY_LANDING_PAGE_SETTINGS_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(u.default, {
              guild: s,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_INVITE_SPLASH:
          let e = (0, p.isTierUnlocked)(s, T.BoostedGuildTiers.TIER_1) ? v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT.format() : v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CONTENT_LOCKED.format({
              boostCount: (0, p.getNumberOfAppliedBoostsNeededForTier)(s, T.BoostedGuildTiers.TIER_1)
            }),
            t = (0, p.isTierUnlocked)(s, T.BoostedGuildTiers.TIER_1) ? v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_PRIMARY_ROLE_SETTINGS : v.default.Messages.LEARN_MORE;
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(S.default, {
              onComponentMount: j,
              header: v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_TITLE,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: L,
                className: R.fullWidthImage
              }),
              content: e,
              buttonCTA: t,
              secondaryButtonCTA: v.default.Messages.INVITE_SPLASH_GUILD_HEADER_TOOLTIP_CTA_SECONDARY,
              onSecondaryClick: () => x(f),
              onClick: () => x(f, s),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.STUDENT_HUB_PRIVACY_SETTINGS_TOOLTIP:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(C.default, {
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_ACTIVE_THREADS_NOTICE:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(S.default, {
              className: O.tooltipOverrideColor,
              header: v.default.Messages.ACTIVE_THREADS_UPSELL_HEADER,
              content: v.default.Messages.ACTIVE_THREADS_UPSELL_CONTENT,
              buttonCTA: v.default.Messages.GOT_IT,
              onClick: () => k(g.ContentDismissActionType.UNKNOWN),
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.GUILD_HEADER_SOUNDBOARD_PERMISSION:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(S.default, {
              header: v.default.Messages.SOUNDBOARD_TOOLTIP_TITLE_NEW,
              content: v.default.Messages.SOUNDBOARD_TOOLTIP_BODY,
              buttonCTA: v.default.Messages.CHECK_IT_OUT,
              secondaryButtonCTA: v.default.Messages.NO_THANKS,
              asset: (0, a.jsx)("img", {
                alt: "",
                src: y,
                className: R.fullWidthImage
              }),
              onClick: () => {
                _.default.open(s.id, T.GuildSettingsSections.ROLES), _.default.selectRole(s.getEveryoneRoleId(), v.default.Messages.USE_SOUNDBOARD)
              },
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.MEDIA_CHANNEL_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(m.default, {
              guildId: s.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        case l.DismissibleContent.SERVER_SUBSCRIPTION_TIER_TEMPLATE_UPSELL:
          return (0, a.jsx)(U, {
            renderPopout: (0, a.jsx)(h.default, {
              guildId: s.id,
              markAsDismissed: k
            }),
            renderGuildHeaderDropdownButton: r
          });
        default:
          return r()
      }
    })()
  })
})