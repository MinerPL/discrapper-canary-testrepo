"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(77866),
  o = n(622535),
  a = n(481060),
  l = n(425493),
  u = n(906732),
  _ = n(626135),
  d = n(724884),
  c = n(355045),
  E = n(290799),
  I = n(394769),
  T = n(555932),
  h = n(808189),
  S = n(362948),
  f = n(245004),
  N = n(383881),
  A = n(981631),
  m = n(689938),
  O = n(923048);
t.Z = function(e) {
  let {
    analyticsLocation: t,
    guild: n,
    onClose: R
  } = e, [C, p] = r.useState(!0), g = r.useRef(!1), L = (0, s.Z)(() => Date.now()), {
    analyticsLocations: v
  } = (0, u.ZP)(), D = r.useCallback(() => {
    R(), _.default.track(A.rMx.MODAL_DISMISSED, {
      type: A.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: v,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id,
      duration_open_ms: Date.now() - L
    })
  }, [R, t, v, L, n.id]), M = r.useCallback(e => {
    e && !g.current && (_.default.track(A.rMx.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM, {
      type: A.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: v,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    }), g.current = !0)
  }, [t, v, n.id]);
  return r.useEffect(() => {
    _.default.track(A.rMx.OPEN_MODAL, {
      type: A.ZY5.PREMIUM_GUILD_USER_MODAL,
      location_stack: v,
      location_section: t.section,
      location_object: t.object,
      guild_id: n.id
    })
  }, [n.id, t, v]), r.useEffect(() => {
    function e(e) {
      "Escape" === e.key && D()
    }
    return window.addEventListener("keydown", e), () => {
      window.removeEventListener("keydown", e)
    }
  }, [D]), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)("div", {
      className: O.closeIconWrapper,
      children: (0, i.jsx)(l.Z, {
        className: O.closeIcon,
        closeAction: D,
        keybind: "ESC",
        variant: l.Z.Variants.SOLID
      })
    }), (0, i.jsxs)(a.AdvancedScrollerAuto, {
      className: O.scroller,
      children: [(0, i.jsxs)("div", {
        className: O.header,
        children: [(0, i.jsxs)("div", {
          className: O.headerContentWrapper,
          children: [(0, i.jsx)(a.Heading, {
            className: O.heading,
            color: "always-white",
            variant: "display-lg",
            children: m.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_HEADING
          }), (0, i.jsx)(c.Z, {
            guild: n,
            closeLayer: D,
            onCtaVisibilityChange: p
          }), (0, i.jsx)(T.Z, {
            guild: n
          }), (0, i.jsx)(h.Z, {
            guild: n
          })]
        }), (0, i.jsx)(N.O, {})]
      }), (0, i.jsx)("div", {
        className: O.middleBodyContentWrapper,
        children: (0, i.jsx)(f.Z, {})
      }), (0, i.jsxs)("div", {
        className: O.lowerBody,
        children: [(0, i.jsxs)("div", {
          className: O.lowerBodyContentWrapper,
          children: [(0, i.jsx)(S.Z, {
            className: O.tierComparisonTable,
            guild: n
          }), (0, i.jsx)(d.Z, {}), (0, i.jsx)(E.Z, {})]
        }), (0, i.jsx)(N.A, {}), (0, i.jsx)("div", {
          className: O.lowerBodyBackgroundImage
        })]
      }), (0, i.jsx)(o.$, {
        onChange: M,
        children: (0, i.jsx)("div", {
          className: O.persistentCtaSpacer
        })
      })]
    }), (0, i.jsx)(I.Z, {
      guild: n,
      isVisible: !C,
      closeLayer: D
    })]
  })
}