"use strict";
n.d(t, {
  Z: function() {
    return k
  }
}), n(47120), n(627341);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(278074),
  l = n(442837),
  u = n(524437),
  _ = n(481060),
  d = n(153867),
  c = n(230711),
  E = n(351773),
  I = n(607070),
  T = n(100527),
  h = n(906732),
  S = n(639119),
  f = n(197115),
  N = n(587446),
  A = n(594174),
  m = n(696202),
  O = n(626135),
  R = n(74538),
  C = n(238302),
  p = n(514361),
  g = n(572397),
  L = n(705262),
  v = n(981631),
  D = n(921944),
  M = n(474936),
  P = n(689938),
  y = n(43114);
let U = () => (0, i.jsx)("div", {
    className: y.editorHeader,
    children: (0, i.jsxs)("div", {
      className: y.bannerUpsell,
      children: [(0, i.jsx)(N.Z, {
        className: y.premiumIcon
      }), (0, i.jsx)(_.Heading, {
        variant: "heading-md/bold",
        color: "always-white",
        children: P.Z.Messages.CLIENT_THEMES_EDITOR_UPSELL_HEADER
      })]
    })
  }),
  b = e => {
    let {
      markAsDismissed: t
    } = e, n = (0, g.q)();
    return (0, i.jsxs)("div", {
      className: y.editorHeader,
      children: [(0, i.jsx)(_.Clickable, {
        className: y.closeCircleButton,
        onClick: () => {
          null != t && t(D.L.DISMISS), n(v.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, C.my)()
        },
        children: (0, i.jsx)(m.Z, {
          className: y.closeCircle
        })
      }), (0, i.jsx)(_.Heading, {
        variant: "heading-lg/extrabold",
        children: P.Z.Messages.CLIENT_THEMES_EDITOR_HEADER
      })]
    })
  },
  G = e => {
    var t, n, r;
    let {
      onSubscribeSuccess: s,
      markAsDismissed: o
    } = e, {
      analyticsLocations: a
    } = (0, h.ZP)(T.Z.CLIENT_THEMES_EDITOR), [c, E] = (0, l.Wu)([A.default, p.Z], () => [p.Z.gradientPreset, R.ZP.isPremium(A.default.getCurrentUser())]), I = (0, S.N)(), N = (0, R.Rt)({
      intervalType: null == I ? void 0 : null === (t = I.subscription_trial) || void 0 === t ? void 0 : t.interval,
      intervalCount: null == I ? void 0 : null === (n = I.subscription_trial) || void 0 === n ? void 0 : n.interval_count
    });
    return (0, i.jsx)(f.Z, {
      size: _.Button.Sizes.MEDIUM,
      buttonText: E ? P.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : (null == I ? void 0 : null === (r = I.subscription_trial) || void 0 === r ? void 0 : r.sku_id) === M.Si.TIER_2 ? N : P.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      subscriptionTier: M.Si.TIER_2,
      onSubscribeModalClose: e => {
        if (!e) return;
        if (null == s || s(), null != o && o(D.L.PRIMARY), null != c)(0, L.Yk)({
          isPersisted: !0,
          themeName: u.Us[c.id],
          analyticsLocations: a
        }), (0, d.ZI)({
          backgroundGradientPresetId: c.id,
          theme: c.theme
        })
      }
    })
  },
  w = e => {
    let {
      markAsDismissed: t
    } = e, {
      isPreview: n,
      isCoachmark: s
    } = (0, l.cj)([p.Z], () => ({
      isPreview: p.Z.isPreview,
      isCoachmark: p.Z.isCoachmark
    })), [o, u] = r.useState(!1), d = (0, g.q)(), E = (0, a.EQ)({
      isPreview: n,
      isCoachmark: s,
      forceShowCloseButton: o
    }).with({
      isCoachmark: !0
    }, {
      forceShowCloseButton: !0
    }, () => P.Z.Messages.CLOSE).with({
      isPreview: !0
    }, () => P.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW).otherwise(() => P.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS);
    return (0, i.jsxs)("div", {
      className: y.editorFooter,
      children: [n && (0, i.jsx)(G, {
        onSubscribeSuccess: () => {
          u(!0)
        },
        markAsDismissed: t
      }), (0, i.jsx)(_.Button, {
        className: y.footerButton,
        onClick: () => {
          null != t && t(D.L.DISMISS), d(v.rMx.CLIENT_THEME_PREVIEW_CLOSED), (0, C.my)(), !s && c.Z.open()
        },
        color: _.Button.Colors.PRIMARY,
        size: _.Button.Sizes.MEDIUM,
        children: E
      })]
    })
  };

function k(e) {
  let {
    markAsDismissed: t
  } = e, {
    analyticsLocations: n
  } = (0, h.ZP)(T.Z.CLIENT_THEMES_EDITOR), {
    isPreview: s,
    isCoachmark: a,
    isEditorOpen: u,
    shouldEditorAnimate: d
  } = (0, l.cj)([p.Z, I.Z], () => ({
    isPreview: p.Z.isPreview,
    isCoachmark: p.Z.isCoachmark,
    isEditorOpen: p.Z.isEditorOpen,
    shouldEditorAnimate: p.Z.isCoachmark && !I.Z.useReducedMotion
  })), c = (0, g.q)();
  r.useEffect(() => c(v.rMx.CLIENT_THEME_PREVIEW_VIEWED), [c]), r.useEffect(() => {
    if (!!s) O.default.track(v.rMx.PREMIUM_UPSELL_VIEWED, {
      type: M.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      location_stack: n
    })
  }, [s, n]);
  let S = (0, g.J)(),
    f = (0, E.Z)(null, s ? S : v.dG4);
  return r.useEffect(() => {
    if (!!s && !u) return S
  }, [s, u, S]), (0, i.jsx)(h.Gt, {
    value: n,
    children: (0, i.jsx)("div", {
      ref: f,
      className: o()(y.themeEditor, d ? y.editorAnimate : null),
      children: (0, i.jsxs)(_.HeadingLevel, {
        children: [a ? (0, i.jsx)(U, {}) : (0, i.jsx)(b, {
          markAsDismissed: t
        }), (0, i.jsx)(_.Scroller, {
          className: y.editorBody,
          children: (0, i.jsxs)(L.ZP, {
            type: L.yH.EDITOR,
            children: [!s && (0, i.jsx)(L.ZP.Basic, {
              className: y.selectionGroup
            }), (0, i.jsx)(L.ZP.Gradient, {
              className: y.selectionGroup
            })]
          })
        }), (0, i.jsx)(w, {
          markAsDismissed: t
        })]
      })
    })
  })
}