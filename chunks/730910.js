"use strict";
t.d(s, {
  Z: function() {
    return P
  }
}), t(47120);
var n = t(735250),
  i = t(470079),
  l = t(120356),
  a = t.n(l),
  r = t(920906),
  o = t(442837),
  c = t(692547),
  d = t(215569),
  u = t(780384),
  E = t(481060),
  _ = t(410030),
  I = t(607070),
  T = t(367907),
  N = t(996753),
  m = t(626135),
  S = t(585483),
  h = t(999382),
  g = t(743475),
  x = t(983135),
  C = t(8426),
  R = t(969632),
  L = t(570961),
  O = t(208665),
  A = t(359191),
  p = t(84658),
  M = t(142961),
  f = t(232764),
  v = t(729311),
  D = t(850864),
  Z = t(966301),
  j = t(981631),
  U = t(689938),
  G = t(231249);

function P() {
  let e = (0, o.e7)([h.Z], () => h.Z.getGuild());
  return null == e ? null : (0, n.jsx)(b, {
    guild: e
  })
}

function b(e) {
  let {
    guild: s
  } = e, l = s.id, h = (0, o.e7)([A.Z], () => A.Z.getCurrentPage()), P = (0, M.Z)(l), {
    hasChanges: b,
    hasConfiguredAnythingForCurrentStep: B,
    hasErrors: y
  } = (0, o.cj)([A.Z], () => ({
    hasChanges: A.Z.hasChanges(),
    hasConfiguredAnythingForCurrentStep: A.Z.hasConfiguredAnythingForCurrentStep(),
    hasErrors: A.Z.hasErrors()
  })), F = (0, o.e7)([A.Z], () => {
    let e = (0, p.lg)(h);
    return null != e && !A.Z.isEducationUpsellDismissed(e)
  }), w = (0, o.e7)([I.Z], () => I.Z.useReducedMotion), k = (0, _.ZP)(), H = i.useRef(null), [{
    spring: V
  }, Y] = (0, r.useSpring)(() => ({
    spring: 0
  }));
  i.useEffect(() => {
    function e() {
      Y({
        spring: 1,
        config: r.config.gentle
      }), Y({
        spring: 0,
        config: r.config.gentle,
        delay: 1e3
      })
    }
    return S.S.subscribe(j.CkL.EMPHASIZE_NOTICE, e), () => {
      S.S.unsubscribe(j.CkL.EMPHASIZE_NOTICE, e)
    }
  }, [Y]);
  let W = (0, E.useToken)(c.Z.colors.BACKGROUND_FLOATING).hex(),
    K = (0, E.useToken)(c.Z.unsafe_rawColors.PRIMARY_160).hex(),
    z = (0, u.wj)(k) ? W : K,
    q = V.to({
      range: [0, 1],
      output: [(0, E.useToken)(c.Z.unsafe_rawColors.WHITE_500).hex(), (0, E.useToken)(c.Z.colors.TEXT_NORMAL).hex()]
    }),
    X = V.to({
      range: [0, 1],
      output: [z, (0, E.useToken)(c.Z.colors.STATUS_DANGER).hex()]
    });
  if (P) {
    if (h === p.PG.DEFAULT_CHANNELS) return (0, n.jsx)(v.j, {});
    if (h === p.PG.CUSTOMIZATION_QUESTIONS) return (0, n.jsx)(Z.Zm, {});
    else if (h === p.PG.HOME_SETTINGS) return (0, n.jsx)(D.T, {})
  }
  let Q = h === p.xh[p.xh.length - 1],
    J = async () => {
      let e = O.Z.advancedMode;
      if (b) try {
        if (h === p.PG.DEFAULT_CHANNELS) await (0, g.DO)(s).then(() => e ? (0, L.rS)(s, {
          ignoreDefaultPrompt: !0
        }) : Promise.resolve());
        else if (h === p.PG.CUSTOMIZATION_QUESTIONS) await (0, L.rS)(s, {
          ignoreDefaultPrompt: !0
        });
        else if (h === p.PG.HOME_SETTINGS) {
          let e = R.Z.getSettings();
          await (0, C.oo)(s.id, e)
        }
      } catch {
        return !1
      }
      return !0
    }, $ = async () => {
      m.default.track(j.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
        ...(0, T.hH)(l),
        step: p.PG[h],
        back: !1,
        skip: !b
      }), (0, x.Nb)((0, p.lg)(h)), await J() && (0, x.IG)(l, h)
    }, ee = async () => {
      m.default.track(j.rMx.GUILD_SETTINGS_ONBOARDING_WIZARD_PROGRESS_CTA_CLICKED, {
        ...(0, T.hH)(l),
        step: p.PG[h],
        back: !0,
        skip: !1
      }), await J() && (0, x.Wy)(l, h)
    }, es = null;
  F && (h === p.PG.SAFETY_CHECK ? es = (0, n.jsx)(f.j7, {}) : h === p.PG.DEFAULT_CHANNELS ? es = (0, n.jsx)(f.Io, {}) : h === p.PG.CUSTOMIZATION_QUESTIONS ? es = (0, n.jsx)(f.cZ, {}) : h === p.PG.HOME_SETTINGS && (es = (0, n.jsx)(f.g6, {})));
  let et = (0, n.jsx)(E.Button, {
      className: a()(G.button, {
        [G.hidden]: F
      }),
      color: E.Button.Colors.PRIMARY,
      look: E.Button.Looks.OUTLINED,
      size: E.Button.Sizes.SMALL,
      onClick: ee,
      disabled: F || y,
      children: (0, n.jsxs)("span", {
        className: G.button,
        children: [(0, n.jsx)(N.Z, {
          className: G.arrow,
          direction: N.Z.Directions.LEFT
        }), U.Z.Messages.BACK]
      })
    }),
    en = (0, n.jsx)(E.Button, {
      className: G.button,
      color: B ? E.Button.Colors.BRAND : E.Button.Colors.PRIMARY,
      look: E.Button.Looks.FILLED,
      size: E.Button.Sizes.SMALL,
      onClick: $,
      disabled: F || y,
      children: (0, n.jsxs)(r.animated.span, {
        className: G.button,
        style: {
          color: q
        },
        children: [B ? U.Z.Messages.NEXT : U.Z.Messages.SKIP, (0, n.jsx)(N.Z, {
          className: G.arrow,
          direction: N.Z.Directions.RIGHT
        })]
      })
    });
  return (0, n.jsx)(d.W, {
    component: "div",
    children: (0, n.jsx)(E.SlideIn, {
      className: a()(G.noticeRegion),
      children: (0, n.jsx)(r.animated.div, {
        className: G.container,
        style: {
          backgroundColor: X
        },
        children: (0, n.jsxs)("div", {
          className: G.flexContainer,
          ref: H,
          children: [F ? (0, n.jsxs)("div", {
            className: G.educationUpsellRoot,
            children: [(0, n.jsx)("img", {
              className: a()(G.wumpus, {
                [G.animated]: !w
              }),
              src: t(33631),
              alt: "wumpus"
            }), (0, n.jsxs)("div", {
              className: G.educationUpsell,
              children: [es, (0, n.jsx)("div", {
                className: G.educationUpsellArrow
              })]
            })]
          }) : null, (0, n.jsx)(E.FocusRingScope, {
            containerRef: H,
            children: (0, n.jsxs)("div", {
              className: G.actions,
              children: [et, (0, n.jsxs)("div", {
                className: G.next,
                children: [y ? (0, n.jsx)(E.Text, {
                  variant: "text-sm/normal",
                  color: "status-warning",
                  children: U.Z.Messages.ONBOARDING_PROMPTS_INCOMPLETE
                }) : null, Q ? null : en]
              })]
            })
          })]
        })
      })
    })
  })
}