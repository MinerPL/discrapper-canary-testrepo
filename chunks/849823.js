"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
});
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("446674"),
  o = s("151426"),
  d = s("77078"),
  u = s("10641"),
  c = s("233706"),
  E = s("137215"),
  _ = s("900938"),
  I = s("851490"),
  T = s("131835"),
  S = s("330724"),
  f = s("136278"),
  m = s("397947"),
  N = s("259483"),
  g = s("867928"),
  h = s("706866"),
  C = s("764151"),
  R = s("887313"),
  x = s("832931"),
  L = s("584027"),
  O = s("614840"),
  A = s("782340"),
  p = s("163182");

function M() {
  let e = (0, r.useStateFromStores)([_.default], () => _.default.getGuildId());
  return null == e ? null : (0, a.jsx)(D, {
    guildId: e
  })
}

function D(e) {
  let t, {
      guildId: s
    } = e,
    n = (0, r.useStateFromStores)([m.default], () => m.default.getCurrentPage()),
    _ = (0, r.useStateFromStores)([m.default], () => {
      let e = (0, N.pageToEducationUpsellType)(n);
      return null != e && !m.default.isEducationUpsellDismissed(e)
    }),
    f = (0, g.default)(s),
    M = !f && _,
    {
      homeSettingsEnabled: D
    } = (0, c.useOnboardingHomeAdminExperiment)(s);
  switch (l.useEffect(() => {
      (0, u.markDismissibleContentAsDismissed)(o.DismissibleContent.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), n) {
    case N.GuildSettingsOnboardingPage.LANDING:
      t = f ? (0, a.jsx)(R.default, {
        completed: !0,
        guildId: s
      }) : (0, a.jsx)(L.default, {});
      break;
    case N.GuildSettingsOnboardingPage.SAFETY_CHECK:
      t = (0, a.jsx)(O.default, {
        hideChangelog: !0
      });
      break;
    case N.GuildSettingsOnboardingPage.DEFAULT_CHANNELS:
      t = (0, a.jsx)(h.default, {
        saveOnClose: !f
      });
      break;
    case N.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS:
      t = (0, a.jsx)(x.default, {
        saveOnClose: !f
      });
      break;
    case N.GuildSettingsOnboardingPage.HOME_SETTINGS:
      t = (0, a.jsx)(C.default, {
        saveOnClose: !f
      });
      break;
    case N.GuildSettingsOnboardingPage.REVIEW:
      t = (0, a.jsx)(R.default, {
        completed: f,
        guildId: s
      })
  }
  return (0, a.jsxs)("div", {
    className: i(p.onboardingContainer, {
      [p.upsellOnTop]: M
    }),
    children: [!f && n !== N.GuildSettingsOnboardingPage.LANDING && (0, a.jsx)(v, {
      setOnboardingStep: T.setOnboardingStep,
      page: n,
      homeSettingsEnabled: D
    }), f && n !== N.GuildSettingsOnboardingPage.LANDING && (0, a.jsx)("div", {
      children: (0, a.jsxs)(d.Button, {
        innerClassName: p.backButton,
        look: d.Button.Looks.BLANK,
        size: d.Button.Sizes.MIN,
        onClick: () => {
          (0, S.resetGuildOnboardingPrompts)(), (0, I.resetDefaultChannels)(), (0, T.setOnboardingStep)(N.GuildSettingsOnboardingPage.LANDING)
        },
        children: [(0, a.jsx)(E.default, {
          className: p.arrow,
          direction: E.default.Directions.LEFT
        }), (0, a.jsx)(d.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: A.default.Messages.BACK
        })]
      })
    }), (0, a.jsx)("div", {
      children: t
    })]
  })
}

function v(e) {
  let {
    page: t,
    setOnboardingStep: s,
    homeSettingsEnabled: l
  } = e, n = (0, r.useStateFromStores)([m.default], () => m.default.hasErrors()), o = e => {
    if (!n) return () => s(e)
  }, u = (0, r.useStateFromStores)([f.default], () => f.default.advancedMode);
  return (0, a.jsxs)("div", {
    className: p.progressContainer,
    children: [(0, a.jsxs)(d.Clickable, {
      className: i(p.progressBarContainer, p.clickableProgressBar),
      onClick: o(N.GuildSettingsOnboardingPage.SAFETY_CHECK),
      children: [(0, a.jsx)("div", {
        className: i(p.progressBar, {
          [p.progressBarCurrent]: t === N.GuildSettingsOnboardingPage.SAFETY_CHECK
        })
      }), (0, a.jsx)(d.Text, {
        color: t === N.GuildSettingsOnboardingPage.SAFETY_CHECK ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: A.default.Messages.GUILD_ONBOARDING_SETUP_STEP_SAFETY.format({
          stepNumber: 1
        })
      })]
    }), (0, a.jsxs)(d.Clickable, {
      className: i(p.progressBarContainer, p.clickableProgressBar),
      onClick: o(N.GuildSettingsOnboardingPage.DEFAULT_CHANNELS),
      children: [(0, a.jsx)("div", {
        className: i(p.progressBar, {
          [p.progressBarCurrent]: t === N.GuildSettingsOnboardingPage.DEFAULT_CHANNELS
        })
      }), (0, a.jsx)(d.Text, {
        color: t === N.GuildSettingsOnboardingPage.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: u ? A.default.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS_ADVANCED.format({
          stepNumber: 2
        }) : A.default.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS.format({
          stepNumber: 2
        })
      })]
    }), (0, a.jsxs)(d.Clickable, {
      className: i(p.progressBarContainer, p.clickableProgressBar),
      onClick: o(N.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS),
      children: [(0, a.jsx)("div", {
        className: i(p.progressBar, {
          [p.progressBarCurrent]: t === N.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS
        })
      }), (0, a.jsx)(d.Text, {
        color: t === N.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: u ? A.default.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS_ADVANCED.format({
          stepNumber: 3
        }) : A.default.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS.format({
          stepNumber: 3
        })
      })]
    }), l && (0, a.jsxs)(d.Clickable, {
      className: i(p.progressBarContainer, p.clickableProgressBar),
      onClick: o(N.GuildSettingsOnboardingPage.HOME_SETTINGS),
      children: [(0, a.jsx)("div", {
        className: i(p.progressBar, {
          [p.progressBarCurrent]: t === N.GuildSettingsOnboardingPage.HOME_SETTINGS
        })
      }), (0, a.jsx)(d.Text, {
        color: t === N.GuildSettingsOnboardingPage.HOME_SETTINGS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: A.default.Messages.GUILD_ONBOARDING_SETUP_STEP_HOME.format({
          stepNumber: 4
        })
      })]
    }), (0, a.jsxs)("div", {
      className: p.progressBarContainer,
      children: [(0, a.jsx)("div", {
        className: i(p.progressBar, {
          [p.progressBarCurrent]: t === N.GuildSettingsOnboardingPage.REVIEW
        })
      }), (0, a.jsx)(d.Text, {
        color: t === N.GuildSettingsOnboardingPage.REVIEW ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: A.default.Messages.GUILD_ONBOARDING_SETUP_STEP_REVIEW.format({
          stepNumber: 3 + (l ? 1 : 0) + 1
        })
      })]
    })]
  })
}