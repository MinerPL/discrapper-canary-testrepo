"use strict";
n.d(t, {
  Z: function() {
    return U
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(442837),
  l = n(481060),
  u = n(570140),
  _ = n(230711),
  d = n(351773),
  c = n(607070),
  E = n(100527),
  I = n(906732),
  T = n(639119),
  h = n(197115),
  S = n(587446),
  f = n(594174),
  N = n(696202),
  A = n(626135),
  m = n(74538),
  O = n(327943),
  R = n(539873),
  C = n(981631),
  p = n(921944),
  g = n(474936),
  L = n(689938),
  v = n(819074);
let D = () => {
    u.Z.dispatch({
      type: "APP_ICON_EDITOR_CLOSE"
    })
  },
  M = () => {
    var e, t, n;
    let r = (0, a.e7)([f.default], () => m.ZP.isPremium(f.default.getCurrentUser())),
      s = (0, T.N)(),
      o = (null == s ? void 0 : null === (e = s.subscription_trial) || void 0 === e ? void 0 : e.sku_id) === g.Si.TIER_2;
    return (0, i.jsx)(h.Z, {
      size: l.Button.Sizes.MEDIUM,
      buttonText: r ? L.Z.Messages.BILLING_SWITCH_PLAN_UPGRADE : o ? (0, m.Rt)({
        intervalType: null == s ? void 0 : null === (t = s.subscription_trial) || void 0 === t ? void 0 : t.interval,
        intervalCount: null == s ? void 0 : null === (n = s.subscription_trial) || void 0 === n ? void 0 : n.interval_count
      }) : L.Z.Messages.USER_SETTINGS_CUSTOMIZATION_UPSELL,
      subscriptionTier: g.Si.TIER_2
    })
  },
  P = e => {
    let {
      markAsDismissed: t
    } = e, n = () => {
      null == t || t(p.L.DISMISS), D()
    };
    return (0, i.jsxs)("div", {
      className: v.editorHeader,
      children: [(0, i.jsx)(l.Clickable, {
        className: v.closeCircleButton,
        onClick: () => n(),
        children: (0, i.jsx)(N.Z, {
          className: v.closeCircle
        })
      }), (0, i.jsxs)("div", {
        className: v.title,
        children: [(0, i.jsx)(l.Heading, {
          variant: "heading-lg/extrabold",
          children: L.Z.Messages.APP_ICON_PREVIEW_TITLE
        }), (0, i.jsx)(S.Z, {
          className: v.premiumIcon
        })]
      })]
    })
  },
  y = e => {
    let {
      isCoachmark: t,
      markAsDismissed: n
    } = e, r = (0, a.e7)([O.Z], () => O.Z.isUpsellPreview);
    return (0, i.jsxs)("div", {
      className: v.editorFooter,
      children: [r && (0, i.jsx)(M, {}), (0, i.jsx)(l.Button, {
        className: v.footerButton,
        onClick: () => {
          null == n || n(p.L.DISMISS), D(), !t && _.Z.open()
        },
        color: l.Button.Colors.PRIMARY,
        size: l.Button.Sizes.MEDIUM,
        children: r || t ? L.Z.Messages.CLIENT_THEMES_EDITOR_EXIT_PREVIEW : L.Z.Messages.CLIENT_THEMES_EDITOR_RETURN_TO_SETTINGS
      })]
    })
  };

function U(e) {
  let {
    isCoachmark: t,
    markAsDismissed: n
  } = e, {
    analyticsLocations: s
  } = (0, I.ZP)(E.Z.APP_ICON_EDITOR), u = (0, a.e7)([f.default], () => f.default.getCurrentUser()), {
    isUpsellPreview: _,
    isEditorOpen: T,
    shouldEditorAnimate: h
  } = (0, a.cj)([O.Z, c.Z], () => ({
    isUpsellPreview: O.Z.isUpsellPreview,
    isEditorOpen: O.Z.isEditorOpen,
    shouldEditorAnimate: t && !c.Z.useReducedMotion
  }));
  r.useEffect(() => {
    if (!!_) A.default.track(C.rMx.PREMIUM_UPSELL_VIEWED, {
      type: g.cd.APP_ICON_UPSELL,
      location_stack: s
    })
  }, [_, s]);
  let S = (0, d.Z)(null, _ ? D : C.dG4);
  return (r.useEffect(() => {
    if (!!_ && !T) return D
  }, [_, T]), null == u) ? null : (0, i.jsx)(I.Gt, {
    value: s,
    children: (0, i.jsx)("div", {
      ref: S,
      className: o()(v.editor, h ? v.editorAnimate : null),
      children: (0, i.jsxs)(l.HeadingLevel, {
        children: [(0, i.jsx)(P, {
          markAsDismissed: n
        }), (0, i.jsx)(l.Scroller, {
          className: v.editorBody,
          children: (0, i.jsx)(R.Z, {
            className: v.selectionGroup
          })
        }), (0, i.jsx)(y, {
          markAsDismissed: n,
          isCoachmark: t
        })]
      })
    })
  })
}