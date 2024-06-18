"use strict";
n.d(t, {
  Yk: function() {
    return F
  },
  yH: function() {
    return i
  }
}), n(627341), n(47120);
var i, r, s = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  u = n(278074),
  _ = n(442837),
  d = n(524437),
  c = n(481060),
  E = n(153867),
  I = n(607070),
  T = n(100527),
  h = n(906732),
  S = n(540059),
  f = n(605236),
  N = n(837741),
  A = n(98278),
  m = n(639119),
  O = n(165583),
  R = n(587446),
  C = n(781391),
  p = n(210887),
  g = n(740492),
  L = n(153124),
  v = n(626135),
  D = n(238302),
  M = n(514361),
  P = n(110577),
  y = n(469115),
  U = n(981631),
  b = n(921944),
  G = n(474936),
  w = n(874893),
  k = n(526761),
  B = n(231338),
  x = n(689938),
  V = n(737679);
(r = i || (i = {})).EDITOR = "EDITOR", r.SETTINGS = "SETTINGS";
let Z = Object.freeze({
    EDITOR: k.fy.SLOW_USER_ACTION,
    SETTINGS: k.fy.INFREQUENT_USER_ACTION
  }),
  H = o.createContext({}),
  F = e => {
    let {
      isPersisted: t,
      themeName: n,
      analyticsLocations: i
    } = e;
    v.default.track(U.rMx.CLIENT_THEME_UPDATED, {
      feature_name: G.QP.CLIENT_THEME,
      theme_name: n,
      is_persisted: t,
      location_stack: i
    })
  },
  Y = e => {
    let {
      type: t,
      isPreview: n,
      isCoachmark: i
    } = e, r = (0, u.EQ)({
      type: t,
      isPreview: n,
      isCoachmark: i
    }).with({
      type: "EDITOR",
      isCoachmark: !0,
      isPreview: !0
    }, () => x.Z.Messages.CLIENT_THEMES_EDITOR_PREVIEW_A_THEME_HEADER).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => x.Z.Messages.CLIENT_THEMES_EDITOR_PICK_A_THEME_HEADER).otherwise(() => x.Z.Messages.USER_SETTINGS_APPEARANCE_GRADIENT_THEME_TITLE);
    return (0, s.jsxs)("div", {
      className: V.title,
      children: [(0, s.jsx)(c.Heading, {
        "aria-label": r,
        variant: "text-md/medium",
        children: r
      }), (0, s.jsx)(R.Z, {
        className: V.premiumIcon
      })]
    })
  },
  j = e => {
    var t, n;
    let {
      type: i,
      isPreview: r,
      isCoachmark: o
    } = e;
    if ((null === (n = (0, m.N)()) || void 0 === n ? void 0 : null === (t = n.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G.Si.TIER_2 && r) return null;
    let a = (0, u.EQ)({
      type: i,
      isPreview: r,
      isCoachmark: o
    }).with({
      type: "EDITOR",
      isPreview: !0
    }, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
      onPremiumClick: A.z
    })).with({
      type: "EDITOR",
      isCoachmark: !0
    }, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_COACHMARK).with({
      type: "EDITOR",
      isPreview: !1
    }, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION).with({
      isPreview: !0
    }, () => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_WITH_LINK.format({
      onPremiumClick: A.z
    })).otherwise(() => x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_SETTINGS);
    return (0, s.jsx)(c.Heading, {
      variant: "text-sm/normal",
      children: a
    })
  },
  W = e => {
    let {
      type: t,
      children: n
    } = e, i = (0, L.Dt)(), r = (0, c.useRadioGroup)({
      orientation: "horizontal",
      labelledBy: i
    }), a = o.useMemo(() => ({
      type: t,
      delay: Z[t]
    }), [t]);
    return (0, s.jsx)(H.Provider, {
      value: a,
      children: (0, s.jsx)("div", {
        ...r,
        className: V.__invalid_container,
        children: n
      })
    })
  };
W.Basic = e => {
  let {
    className: t
  } = e, {
    delay: n
  } = o.useContext(H), {
    analyticsLocations: i
  } = (0, h.ZP)(T.Z.CLIENT_THEMES_THEME_SELECTOR), [r, a, u] = (0, _.Wu)([p.Z, g.ZP, M.Z], () => [p.Z.theme, null == M.Z.gradientPreset, g.ZP.useSystemTheme === w.K.ON]), d = e => {
    (0, D.xs)(), F({
      isPersisted: !0,
      analyticsLocations: i,
      themeName: "default ".concat(e)
    }), (0, E.ZI)({
      theme: e
    }, n)
  }, c = (0, S.Q)("appearance_settings");
  return (0, s.jsxs)("section", {
    className: l()(V.presets, t),
    children: [(0, s.jsx)(P.bD, {
      theme: B.BR.LIGHT,
      isSelected: a && !u && r === B.BR.LIGHT,
      onSelect: () => d(B.BR.LIGHT)
    }), (0, s.jsx)(P.bD, {
      theme: B.BR.DARK,
      isSelected: a && !u && r === B.BR.DARK,
      onSelect: () => d(B.BR.DARK)
    }), c && (0, s.jsxs)(s.Fragment, {
      children: [(0, s.jsx)(P.bD, {
        theme: B.BR.DARKER,
        isSelected: a && !u && r === B.BR.DARKER,
        onSelect: () => d(B.BR.DARKER)
      }), (0, s.jsx)(P.bD, {
        theme: B.BR.MIDNIGHT,
        isSelected: a && !u && r === B.BR.MIDNIGHT,
        onSelect: () => d(B.BR.MIDNIGHT)
      })]
    }), (0, s.jsx)(P.bD, {
      theme: "system",
      isSelected: a && u,
      onSelect: () => d("system")
    })]
  })
}, W.Gradient = e => {
  var t, i;
  let {
    className: r,
    renderCTAButtons: a,
    disabled: l = !1
  } = e, {
    type: u,
    delay: S
  } = o.useContext(H), {
    analyticsLocations: R
  } = (0, h.ZP)(T.Z.CLIENT_THEMES_THEME_SELECTOR), [p, g, L] = (0, _.Wu)([M.Z], () => {
    var e;
    return [M.Z.isPreview, M.Z.isCoachmark, null === (e = M.Z.gradientPreset) || void 0 === e ? void 0 : e.id]
  }), [v, U] = o.useState(!1), [k, B] = o.useState(-1), Z = (0, _.e7)([I.Z], () => I.Z.useReducedMotion), {
    enabled: W
  } = (0, N.J)({
    location: "GradientSelectors"
  }), K = (null === (i = (0, m.N)()) || void 0 === i ? void 0 : null === (t = i.subscription_trial) || void 0 === t ? void 0 : t.sku_id) === G.Si.TIER_2, z = o.useMemo(() => e => {
    let t = y.sJ.get(e.id),
      n = null != t && !(0, f.un)(t);
    return l && n && setTimeout(() => (0, f.EW)(t, {
      dismissAction: b.L.AUTO_DISMISS
    }), 5e3), n
  }, [l]);
  o.useEffect(() => {
    (k === y.XV.length - (W ? 2 : 3) && "EDITOR" === u || L === d.Us.EASTER_EGG) && U(!0)
  }, [k, u, L, W]);
  let q = (e, t) => {
    (0, D.zO)(e.id), F({
      isPersisted: !p,
      analyticsLocations: R,
      themeName: d.Us[e.id]
    });
    let n = y.sJ.get(e.id);
    if (null != n && !(0, f.un)(n) && (0, f.EW)(n, {
        dismissAction: b.L.TAKE_ACTION
      }), p) {
      (0, C.hi)(w.K.OFF);
      return
    }
    if ((0, E.ZI)({
        backgroundGradientPresetId: e.id,
        theme: e.theme
      }, S), null != t) {
      if (v && U(!1), t <= k || 0 === t) {
        B(0);
        return
      }
      B(e => e + 1)
    }
  };
  return (0, s.jsxs)("section", {
    className: r,
    children: ["EDITOR" === u && p && K ? (0, s.jsx)(O.ZP, {
      type: G.cd.PREMIUM_CLIENT_THEME_TRY_IT_OUT,
      subscriptionTier: G.Si.TIER_2,
      children: x.Z.Messages.CLIENT_THEMES_EDITOR_GRADIENT_DESCRIPTION_PREVIEW_WITH_LINK.format({
        onPremiumClick: A.z
      })
    }) : (0, s.jsxs)("div", {
      className: V.header,
      children: [(0, s.jsxs)("div", {
        className: V.headings,
        children: [(0, s.jsx)(Y, {
          type: u,
          isPreview: p,
          isCoachmark: g
        }), (0, s.jsx)(j, {
          type: u,
          isPreview: p,
          isCoachmark: g
        })]
      }), null == a ? void 0 : a()]
    }), (0, s.jsxs)("div", {
      className: V.presets,
      children: [y.XV.filter(e => {
        let {
          id: t
        } = e;
        return t !== d.Us.EASTER_EGG && (t !== d.Us.BLURPLE_TWILIGHT || W)
      }).map((e, t) => (0, s.jsx)(P.DR, {
        preset: e,
        isSelected: L === e.id,
        onSelect: () => q(e, t),
        disabled: l,
        tabIndex: 0 !== t || l ? void 0 : 0,
        showBadge: z(e)
      }, e.id)), (() => {
        if (!v) return null;
        let e = y.qt[d.Us.EASTER_EGG];
        if (null == e) return null;
        async function t() {
          let {
            default: e
          } = await n.e("5217").then(n.t.bind(n, 801048, 19));
          return e
        }
        return (0, s.jsxs)("div", {
          className: V.easterEggSelection,
          children: [(0, s.jsx)(P.DR, {
            preset: e,
            isSelected: L === d.Us.EASTER_EGG,
            onSelect: () => q(e)
          }), (0, s.jsx)(c.LottieAnimation, {
            importData: t,
            shouldAnimate: !Z,
            className: V.sparkles
          })]
        })
      })()]
    })]
  })
}, t.ZP = W