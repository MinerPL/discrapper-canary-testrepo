"use strict";
s.r(t), s.d(t, {
  default: function() {
    return B
  }
}), s("222007");
var a = s("37983"),
  l = s("884691"),
  n = s("414456"),
  i = s.n(n),
  r = s("146606"),
  o = s("446674"),
  d = s("669491"),
  u = s("266491"),
  c = s("819855"),
  E = s("77078"),
  _ = s("841098"),
  I = s("206230"),
  T = s("716241"),
  S = s("137215"),
  f = s("965397"),
  m = s("599110"),
  N = s("659500"),
  g = s("900938"),
  h = s("851490"),
  C = s("131835"),
  R = s("435076"),
  x = s("642807"),
  L = s("330724"),
  O = s("136278"),
  A = s("397947"),
  p = s("259483"),
  M = s("867928"),
  D = s("545901"),
  v = s("706866"),
  G = s("764151"),
  j = s("832931"),
  U = s("49111"),
  P = s("782340"),
  b = s("182574");

function B() {
  let e = (0, o.useStateFromStores)([g.default], () => g.default.getGuild());
  return null == e ? null : (0, a.jsx)(y, {
    guild: e
  })
}

function y(e) {
  let {
    guild: t
  } = e, n = t.id, g = (0, o.useStateFromStores)([A.default], () => A.default.getCurrentPage()), B = (0, M.default)(n), {
    hasChanges: y,
    hasConfiguredAnythingForCurrentStep: F,
    hasErrors: H
  } = (0, o.useStateFromStoresObject)([A.default], () => ({
    hasChanges: A.default.hasChanges(),
    hasConfiguredAnythingForCurrentStep: A.default.hasConfiguredAnythingForCurrentStep(),
    hasErrors: A.default.hasErrors()
  })), k = (0, o.useStateFromStores)([A.default], () => {
    let e = (0, p.pageToEducationUpsellType)(g);
    return null != e && !A.default.isEducationUpsellDismissed(e)
  }), w = (0, o.useStateFromStores)([I.default], () => I.default.useReducedMotion), V = (0, _.default)(), Y = l.useRef(null), [{
    spring: W
  }, z] = (0, r.useSpring)(() => ({
    spring: 0
  }));
  l.useEffect(() => {
    function e() {
      z({
        spring: 1,
        config: r.config.gentle
      }), z({
        spring: 0,
        config: r.config.gentle,
        delay: 1e3
      })
    }
    return N.ComponentDispatch.subscribe(U.ComponentActions.EMPHASIZE_NOTICE, e), () => {
      N.ComponentDispatch.unsubscribe(U.ComponentActions.EMPHASIZE_NOTICE, e)
    }
  }, [z]);
  let K = (0, E.useToken)(d.default.colors.BACKGROUND_FLOATING).hex(),
    Z = (0, E.useToken)(d.default.unsafe_rawColors.PRIMARY_160).hex(),
    X = (0, c.isThemeDark)(V) ? K : Z,
    Q = W.to({
      range: [0, 1],
      output: [(0, E.useToken)(d.default.unsafe_rawColors.WHITE_500).hex(), (0, E.useToken)(d.default.colors.TEXT_NORMAL).hex()]
    }),
    J = W.to({
      range: [0, 1],
      output: [X, (0, E.useToken)(d.default.colors.STATUS_DANGER).hex()]
    });
  if (B) {
    if (g === p.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) return (0, a.jsx)(v.GuildSettingsDefaultChannelsNotice, {});
    if (g === p.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) return (0, a.jsx)(j.GuildSettingsOnboardingPromptsNotice, {});
    else if (g === p.GuildSettingsOnboardingPage.HOME_SETTINGS) return (0, a.jsx)(G.GuildSettingsHomeSettingsNotice, {})
  }
  let q = g === p.ONBOARDING_STEPS[p.ONBOARDING_STEPS.length - 1],
    $ = async () => {
      let e = O.default.advancedMode;
      if (y) try {
        if (g === p.GuildSettingsOnboardingPage.DEFAULT_CHANNELS) await (0, h.saveDefaultChannels)(t).then(() => e ? (0, L.saveGuildOnboardingPrompts)(t, {
          ignoreDefaultPrompt: !0
        }) : Promise.resolve());
        else if (g === p.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS) await (0, L.saveGuildOnboardingPrompts)(t, {
          ignoreDefaultPrompt: !0
        });
        else if (g === p.GuildSettingsOnboardingPage.HOME_SETTINGS) {
          let e = x.default.getSettings();
          await (0, R.saveHomeSettings)(t.id, e)
        }
      } catch {
        return !1
      }
      return !0
    }, ee = async () => {
      m.default.track(U.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
        ...(0, T.collectGuildAnalyticsMetadata)(n),
        step: p.GuildSettingsOnboardingPage[g],
        back: !1,
        skip: !y
      }), (0, C.dismissEducationUpsell)((0, p.pageToEducationUpsellType)(g)), await $() && (0, C.goToNextOnboardingStep)(n, g)
    }, et = async () => {
      m.default.track(U.AnalyticEvents.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
        ...(0, T.collectGuildAnalyticsMetadata)(n),
        step: p.GuildSettingsOnboardingPage[g],
        back: !0,
        skip: !1
      }), await $() && (0, C.goToPrevOnboardingStep)(n, g)
    }, es = null;
  k && (g === p.GuildSettingsOnboardingPage.SAFETY_CHECK ? es = (0, a.jsx)(D.SafetyCheckUpsell, {}) : g === p.GuildSettingsOnboardingPage.DEFAULT_CHANNELS ? es = (0, a.jsx)(D.DefaultChannelsUpsell, {}) : g === p.GuildSettingsOnboardingPage.CUSTOMIZATION_QUESTIONS ? es = (0, a.jsx)(D.CustomizationQuestionsUpsell, {}) : g === p.GuildSettingsOnboardingPage.HOME_SETTINGS && (es = (0, a.jsx)(D.HomeSettingsUpsell, {})));
  let ea = (0, a.jsx)(E.Button, {
      className: i(b.button, {
        [b.hidden]: k
      }),
      color: E.Button.Colors.PRIMARY,
      look: E.Button.Looks.OUTLINED,
      size: E.Button.Sizes.SMALL,
      onClick: et,
      disabled: k || H,
      children: (0, a.jsxs)("span", {
        className: b.button,
        children: [(0, a.jsx)(S.default, {
          className: b.arrow,
          direction: S.default.Directions.LEFT
        }), P.default.Messages.BACK]
      })
    }),
    el = (0, a.jsx)(E.Button, {
      className: b.button,
      color: F ? E.Button.Colors.BRAND : E.Button.Colors.PRIMARY,
      look: E.Button.Looks.FILLED,
      size: E.Button.Sizes.SMALL,
      onClick: ee,
      disabled: k || H,
      children: (0, a.jsxs)(r.animated.span, {
        className: b.button,
        style: {
          color: Q
        },
        children: [F ? P.default.Messages.NEXT : P.default.Messages.SKIP, (0, a.jsx)(S.default, {
          className: b.arrow,
          direction: S.default.Directions.RIGHT
        })]
      })
    });
  return (0, a.jsx)(u.TransitionGroup, {
    component: "div",
    children: (0, a.jsx)(f.default, {
      className: i(b.noticeRegion),
      children: (0, a.jsx)(r.animated.div, {
        className: b.container,
        style: {
          backgroundColor: J
        },
        children: (0, a.jsxs)("div", {
          className: b.flexContainer,
          ref: Y,
          children: [k ? (0, a.jsxs)("div", {
            className: b.educationUpsellRoot,
            children: [(0, a.jsx)("img", {
              className: i(b.wumpus, {
                [b.animated]: !w
              }),
              src: s("353773"),
              alt: "wumpus"
            }), (0, a.jsxs)("div", {
              className: b.educationUpsell,
              children: [es, (0, a.jsx)("div", {
                className: b.educationUpsellArrow
              })]
            })]
          }) : null, (0, a.jsx)(E.FocusRingScope, {
            containerRef: Y,
            children: (0, a.jsxs)("div", {
              className: b.actions,
              children: [ea, (0, a.jsxs)("div", {
                className: b.next,
                children: [H ? (0, a.jsx)(E.Text, {
                  variant: "text-sm/normal",
                  color: "status-warning",
                  children: P.default.Messages.ONBOARDING_PROMPTS_INCOMPLETE
                }) : null, q ? null : el]
              })]
            })
          })]
        })
      })
    })
  })
}