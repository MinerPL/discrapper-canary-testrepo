"use strict";
n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(920906),
  l = n(442837),
  u = n(704215),
  _ = n(389710),
  d = n(481060),
  c = n(607070),
  E = n(243778),
  I = n(594174),
  T = n(466111),
  h = n(74538),
  S = n(921944),
  f = n(689938),
  N = n(170799);
let A = {
  tension: 750,
  mass: 2.5,
  friction: 70
};

function m(e) {
  let {
    tooltipText: t,
    headingText: n,
    textColor: r
  } = e, s = null != n;
  return (0, i.jsxs)("span", {
    className: s ? void 0 : N.tooltipContainer,
    children: [(0, i.jsxs)("span", {
      className: N.tooltipContainer,
      children: [(0, i.jsx)(T.Z, {
        className: N.nitroWheel
      }), s ? (0, i.jsx)(d.Heading, {
        color: null != r ? r : "text-normal",
        variant: "heading-sm/semibold",
        children: n
      }) : null]
    }), (0, i.jsx)(d.Text, {
      variant: s ? "text-xs/normal" : "text-sm/medium",
      color: null != r ? r : "text-normal",
      children: t
    })]
  })
}

function O(e) {
  let {
    checked: t,
    onClick: n,
    id: s = "burst-reaction-toggle-button"
  } = e, T = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), O = I.default.getCurrentUser(), R = null == O || (0, h.I5)(O) ? [u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [C, p] = (0, E.U)(R), [g, L] = r.useState(!1), [v, D] = (0, a.useSpring)(() => ({})), M = (0, a.animated)(_.P);
  r.useEffect(() => {
    let e = C === u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
    e && (p(S.L.DISMISS), setTimeout(() => L(e), 200))
  }, [C, p]);
  let P = g ? f.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? f.Z.Messages.SUPER_REACTION_TOGGLE_ENABLED : f.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED,
    y = g ? f.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
  return (0, i.jsxs)(d.TooltipContainer, {
    position: "top",
    text: (0, i.jsx)(m, {
      textColor: "always-white",
      tooltipText: P,
      headingText: y
    }),
    color: d.Tooltip.Colors.BRAND,
    forceOpen: g,
    "aria-label": P,
    tooltipClassName: N.tooltip,
    children: [(0, i.jsx)("input", {
      className: N.visuallyHidden,
      checked: t,
      onChange: function() {
        D({
          from: {
            rotate: t ? "360deg" : "0deg"
          },
          to: {
            rotate: t ? "0deg" : "360deg"
          },
          config: A
        }), null == n || n(), L(!1)
      },
      id: s,
      type: "checkbox"
    }), (0, i.jsxs)("label", {
      htmlFor: s,
      className: o()(N.label, {
        [N.labelChecked]: t
      }),
      children: [t ? (0, i.jsx)(d.Shine, {
        className: N.shine,
        shinePaused: T
      }) : null, (0, i.jsx)(M, {
        style: T ? void 0 : v,
        width: 20,
        height: 20,
        color: t ? "white" : void 0,
        className: N.icon
      }), (0, i.jsx)("span", {
        children: (0, i.jsx)(d.Text, {
          className: N.visuallyHidden,
          variant: "text-sm/semibold",
          children: f.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED
        })
      })]
    })]
  })
}