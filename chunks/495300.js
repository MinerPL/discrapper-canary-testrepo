"use strict";
t.d(s, {
  Z: function() {
    return f
  }
});
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(442837),
  o = t(704215),
  c = t(481060),
  d = t(605236),
  u = t(621923),
  E = t(996753),
  _ = t(999382),
  I = t(743475),
  T = t(983135),
  N = t(570961),
  m = t(208665),
  S = t(359191),
  h = t(84658),
  g = t(142961),
  x = t(729311),
  C = t(850864),
  R = t(729995),
  L = t(966301),
  O = t(707076),
  A = t(213956),
  p = t(689938),
  M = t(631691);

function f() {
  let e = (0, r.e7)([_.Z], () => _.Z.getGuildId());
  return null == e ? null : (0, n.jsx)(v, {
    guildId: e
  })
}

function v(e) {
  let s, {
      guildId: t
    } = e,
    l = (0, r.e7)([S.Z], () => S.Z.getCurrentPage()),
    _ = (0, r.e7)([S.Z], () => {
      let e = (0, h.lg)(l);
      return null != e && !S.Z.isEducationUpsellDismissed(e)
    }),
    m = (0, g.Z)(t),
    f = !m && _,
    {
      homeSettingsEnabled: v
    } = (0, u.kZ)(t);
  switch (i.useEffect(() => {
      (0, d.EW)(o.z.COMMUNITY_ONBOARDING_NEW_BADGE)
    }, []), l) {
    case h.PG.LANDING:
      s = m ? (0, n.jsx)(R.Z, {
        completed: !0,
        guildId: t
      }) : (0, n.jsx)(O.Z, {});
      break;
    case h.PG.SAFETY_CHECK:
      s = (0, n.jsx)(A.Z, {
        hideChangelog: !0
      });
      break;
    case h.PG.DEFAULT_CHANNELS:
      s = (0, n.jsx)(x.Z, {
        saveOnClose: !m
      });
      break;
    case h.PG.CUSTOMIZATION_QUESTIONS:
      s = (0, n.jsx)(L.ZP, {
        saveOnClose: !m
      });
      break;
    case h.PG.HOME_SETTINGS:
      s = (0, n.jsx)(C.Z, {
        saveOnClose: !m
      });
      break;
    case h.PG.REVIEW:
      s = (0, n.jsx)(R.Z, {
        completed: m,
        guildId: t
      })
  }
  return (0, n.jsxs)("div", {
    className: a()(M.onboardingContainer, {
      [M.upsellOnTop]: f
    }),
    children: [!m && l !== h.PG.LANDING && (0, n.jsx)(D, {
      setOnboardingStep: T.$K,
      page: l,
      homeSettingsEnabled: v
    }), m && l !== h.PG.LANDING && (0, n.jsx)("div", {
      children: (0, n.jsxs)(c.Button, {
        innerClassName: M.backButton,
        look: c.Button.Looks.BLANK,
        size: c.Button.Sizes.MIN,
        onClick: () => {
          (0, N.NB)(), (0, I.BG)(), (0, T.$K)(h.PG.LANDING)
        },
        children: [(0, n.jsx)(E.Z, {
          className: M.arrow,
          direction: E.Z.Directions.LEFT
        }), (0, n.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: p.Z.Messages.BACK
        })]
      })
    }), (0, n.jsx)("div", {
      children: s
    })]
  })
}

function D(e) {
  let {
    page: s,
    setOnboardingStep: t,
    homeSettingsEnabled: i
  } = e, l = (0, r.e7)([S.Z], () => S.Z.hasErrors()), o = e => {
    if (!l) return () => t(e)
  }, d = (0, r.e7)([m.Z], () => m.Z.advancedMode);
  return (0, n.jsxs)("div", {
    className: M.progressContainer,
    children: [(0, n.jsxs)(c.Clickable, {
      className: a()(M.progressBarContainer, M.clickableProgressBar),
      onClick: o(h.PG.SAFETY_CHECK),
      children: [(0, n.jsx)("div", {
        className: a()(M.progressBar, {
          [M.progressBarCurrent]: s === h.PG.SAFETY_CHECK
        })
      }), (0, n.jsx)(c.Text, {
        color: s === h.PG.SAFETY_CHECK ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: p.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_SAFETY.format({
          stepNumber: 1
        })
      })]
    }), (0, n.jsxs)(c.Clickable, {
      className: a()(M.progressBarContainer, M.clickableProgressBar),
      onClick: o(h.PG.DEFAULT_CHANNELS),
      children: [(0, n.jsx)("div", {
        className: a()(M.progressBar, {
          [M.progressBarCurrent]: s === h.PG.DEFAULT_CHANNELS
        })
      }), (0, n.jsx)(c.Text, {
        color: s === h.PG.DEFAULT_CHANNELS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: d ? p.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS_ADVANCED.format({
          stepNumber: 2
        }) : p.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_CHANNELS.format({
          stepNumber: 2
        })
      })]
    }), (0, n.jsxs)(c.Clickable, {
      className: a()(M.progressBarContainer, M.clickableProgressBar),
      onClick: o(h.PG.CUSTOMIZATION_QUESTIONS),
      children: [(0, n.jsx)("div", {
        className: a()(M.progressBar, {
          [M.progressBarCurrent]: s === h.PG.CUSTOMIZATION_QUESTIONS
        })
      }), (0, n.jsx)(c.Text, {
        color: s === h.PG.CUSTOMIZATION_QUESTIONS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: d ? p.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS_ADVANCED.format({
          stepNumber: 3
        }) : p.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_PROMPTS.format({
          stepNumber: 3
        })
      })]
    }), i && (0, n.jsxs)(c.Clickable, {
      className: a()(M.progressBarContainer, M.clickableProgressBar),
      onClick: o(h.PG.HOME_SETTINGS),
      children: [(0, n.jsx)("div", {
        className: a()(M.progressBar, {
          [M.progressBarCurrent]: s === h.PG.HOME_SETTINGS
        })
      }), (0, n.jsx)(c.Text, {
        color: s === h.PG.HOME_SETTINGS ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: p.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_HOME.format({
          stepNumber: 4
        })
      })]
    }), (0, n.jsxs)("div", {
      className: M.progressBarContainer,
      children: [(0, n.jsx)("div", {
        className: a()(M.progressBar, {
          [M.progressBarCurrent]: s === h.PG.REVIEW
        })
      }), (0, n.jsx)(c.Text, {
        color: s === h.PG.REVIEW ? "text-brand" : "text-muted",
        variant: "text-xs/medium",
        children: p.Z.Messages.GUILD_ONBOARDING_SETUP_STEP_REVIEW.format({
          stepNumber: 3 + (i ? 1 : 0) + 1
        })
      })]
    })]
  })
}