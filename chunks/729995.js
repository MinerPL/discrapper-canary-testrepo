"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
});
var a = s("735250");
s("470079");
var l = s("442837"),
  n = s("481060"),
  i = s("2052"),
  r = s("367907"),
  o = s("45966"),
  d = s("734893"),
  u = s("621923"),
  c = s("430824"),
  E = s("759231"),
  _ = s("132338"),
  I = s("626135"),
  T = s("983135"),
  S = s("8426"),
  f = s("969632"),
  m = s("570961"),
  N = s("84658"),
  g = s("974513"),
  h = s("677892"),
  C = s("981631"),
  R = s("689938"),
  x = s("909826");

function L(e) {
  let {
    guildId: t,
    completed: s
  } = e, {
    homeSettingsEnabled: n
  } = (0, u.useOnboardingHomeAdminExperiment)(t), d = (0, l.useStateFromStores)([o.default], () => o.default.getEnabled(t)), {
    location: c
  } = (0, i.useAnalyticsContext)();
  c.object = s ? C.AnalyticsObjects.ONBOARDING_EDIT : C.AnalyticsObjects.ONBOARDING_REVIEW;
  let E = async function() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    d ? (await (0, m.enableGuildOnboarding)(t, !1), I.default.track(C.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.collectGuildAnalyticsMetadata)(t),
      action_taken: N.GuildSettingsCTAs[N.GuildSettingsCTAs.TOGGLE_DISABLED],
      location: c
    })) : (await (0, m.enableGuildOnboarding)(t, !0), e && (0, S.enableHomeSettings)(t, !0), s ? I.default.track(C.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.collectGuildAnalyticsMetadata)(t),
      action_taken: N.GuildSettingsCTAs[N.GuildSettingsCTAs.TOGGLE_ENABLED],
      location: c
    }) : I.default.track(C.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
      ...(0, r.collectGuildAnalyticsMetadata)(t),
      step: N.GuildSettingsOnboardingPage[N.GuildSettingsOnboardingPage.REVIEW],
      back: !1,
      skip: !1,
      completed: !0
    }))
  }, f = () => {
    I.default.track(C.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
      ...(0, r.collectGuildAnalyticsMetadata)(t),
      action_taken: N.GuildSettingsCTAs[N.GuildSettingsCTAs.PREVIEW],
      location: c
    }), (0, T.startPreview)(t)
  }, g = (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(h.DefaultChannelsOverviewItem, {
      guildId: t,
      onEdit: () => {
        I.default.track(C.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
          ...(0, r.collectGuildAnalyticsMetadata)(t),
          action_taken: N.GuildSettingsCTAs[N.GuildSettingsCTAs.EDIT_DEFAULT_CHANNELS],
          location: c
        }), (0, T.setOnboardingStep)(N.GuildSettingsOnboardingPage.DEFAULT_CHANNELS)
      },
      disableGoodStatus: s
    }), (0, a.jsx)(_.default, {
      className: x.divider
    }), (0, a.jsx)(h.CustomizationQuestionsOverviewItem, {
      guildId: t,
      onEdit: () => {
        I.default.track(C.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
          ...(0, r.collectGuildAnalyticsMetadata)(t),
          action_taken: N.GuildSettingsCTAs[N.GuildSettingsCTAs.EDIT_CUSTOMIZATION_QUESTIONS],
          location: c
        }), (0, T.setOnboardingStep)(N.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS)
      },
      disableGoodStatus: s
    }), n && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(_.default, {
        className: x.divider
      }), (0, a.jsx)(h.HomeSettingsOverviewItem, {
        guildId: t,
        onEdit: () => {
          I.default.track(C.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_EDIT_PAGE_CLICKED, {
            ...(0, r.collectGuildAnalyticsMetadata)(t),
            action_taken: N.GuildSettingsCTAs[N.GuildSettingsCTAs.EDIT_HOME_SETTINGS],
            location: c
          }), (0, T.setOnboardingStep)(N.GuildSettingsOnboardingPage.HOME_SETTINGS)
        },
        disableGoodStatus: s
      })]
    })]
  });
  return s ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(O, {
      guildId: t,
      handlePreview: f
    }), (0, a.jsx)(A, {}), (0, a.jsxs)("div", {
      className: x.content,
      children: [(0, a.jsx)(p, {
        guildId: t,
        handleOnboardingToggle: E
      }), g]
    })]
  }) : (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)("div", {
      className: x.content,
      children: [(0, a.jsx)(M, {
        guildId: t,
        handleOnboardingToggle: E,
        handlePreview: f
      }), g]
    }), (0, a.jsx)(D, {
      guildId: t
    })]
  })
}

function O(e) {
  let {
    guildId: t,
    handlePreview: s
  } = e;
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(n.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      className: x.header,
      children: R.default.Messages.GUILD_SETTINGS_ONBOARDING
    }), (0, a.jsx)(n.Text, {
      variant: "text-md/normal",
      color: "header-secondary",
      className: x.subheader,
      children: R.default.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE
    }), (0, a.jsxs)("div", {
      className: x.help,
      children: [(0, a.jsx)(n.Anchor, {
        target: "_blank",
        href: C.MarketingURLs.GUILD_ONBOARDING_EXAMPLES,
        children: (0, a.jsx)(n.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.default.Messages.GUILD_ONBOARDING_OVERVIEW_SEE_EXAMPLES
        })
      }), (0, a.jsx)("div", {
        className: x.helpSeparator
      }), (0, a.jsx)(n.Anchor, {
        onClick: s,
        children: (0, a.jsx)(n.Text, {
          variant: "text-sm/medium",
          color: "text-link",
          children: R.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
        })
      }), (0, a.jsx)("div", {
        className: x.helpSeparator
      }), (0, a.jsx)(g.AdvancedModeToggle, {
        guildId: t
      })]
    })]
  })
}

function A() {
  let e = "• ";
  return (0, a.jsxs)("div", {
    className: x.notice,
    children: [(0, a.jsx)("img", {
      className: x.wumpus,
      src: s("33631"),
      alt: "wumpus"
    }), (0, a.jsxs)("div", {
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        color: "header-primary",
        className: x.header,
        children: R.default.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_HEADER
      }), (0, a.jsxs)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, R.default.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_2]
      }), (0, a.jsxs)(n.Text, {
        variant: "text-sm/medium",
        color: "header-secondary",
        children: [e, R.default.Messages.GUILD_ONBOARDING_OVERVIEW_UPDATES_3]
      })]
    })]
  })
}

function p(e) {
  let {
    guildId: t,
    handleOnboardingToggle: s
  } = e, i = (0, h.useOnboardingCanBeEnabled)(t), r = (0, l.useStateFromStores)([o.default], () => o.default.getEnabled(t));
  return (0, a.jsxs)("div", {
    className: x.review,
    children: [(0, a.jsxs)("div", {
      className: x.reviewHeaderText,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        children: r ? R.default.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_ENABLED : R.default.Messages.GUILD_ONBOARDING_OVERVIEW_TITLE_DISABLED
      }), (0, a.jsx)(n.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: r ? R.default.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_ENABLED : R.default.Messages.GUILD_ONBOARDING_OVERVIEW_SUBTITLE_DISABLED
      })]
    }), (0, a.jsx)(n.Switch, {
      checked: r,
      onChange: () => s(!1),
      disabled: !r && !i
    })]
  })
}

function M(e) {
  let {
    guildId: t,
    handleOnboardingToggle: s,
    handlePreview: i
  } = e, r = (0, h.useOnboardingCanBeEnabled)(t), o = (0, l.useStateFromStores)([f.default], () => f.default.getSettings()), u = (0, d.isSettingsValid)(o);
  return (0, a.jsxs)("div", {
    className: x.reviewHeader,
    children: [(0, a.jsxs)("div", {
      className: x.reviewHeaderText,
      children: [(0, a.jsx)(n.Heading, {
        variant: "heading-md/semibold",
        children: r ? R.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE : R.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_TITLE_INCOMPLETE
      }), (0, a.jsx)(n.Text, {
        variant: "text-xs/normal",
        children: r ? R.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION : R.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_DESCRIPTION_INCOMPLETE
      })]
    }), (0, a.jsxs)("div", {
      className: x.reviewActions,
      children: [(0, a.jsx)(n.Button, {
        size: n.Button.Sizes.SMALL,
        color: n.Button.Colors.PRIMARY,
        look: n.Button.Looks.OUTLINED,
        onClick: i,
        children: R.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW
      }), (0, a.jsx)(n.Button, {
        size: n.Button.Sizes.SMALL,
        color: n.Button.Colors.BRAND,
        onClick: () => s(u),
        disabled: !r,
        children: R.default.Messages.GUILD_ONBOARDING_SETUP_REVIEW_ENABLE_ONBOARDING
      })]
    })]
  })
}

function D(e) {
  let {
    guildId: t
  } = e, s = (0, l.useStateFromStores)([c.default], () => c.default.getGuild(t));
  return null == s || s.verificationLevel < C.VerificationLevels.VERY_HIGH ? null : (0, a.jsxs)("div", {
    className: x.rolesWarning,
    children: [(0, a.jsx)(E.default, {
      width: 16,
      height: 16,
      className: x.warningIcon
    }), (0, a.jsx)(n.Text, {
      variant: "text-sm/medium",
      color: "text-muted",
      children: R.default.Messages.GUILD_ONBOARDING_SETUP_PREVIEW_ROLES_WARNING
    })]
  })
}