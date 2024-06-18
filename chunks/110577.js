"use strict";
n.d(t, {
  DR: function() {
    return O
  },
  bD: function() {
    return m
  },
  oK: function() {
    return N
  }
}), n(627341);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(278074),
  a = n(442837),
  l = n(692547),
  u = n(76162),
  _ = n(780384),
  d = n(481060),
  c = n(210887),
  E = n(441674),
  I = n(47760),
  T = n(798728),
  h = n(981631),
  S = n(689938),
  f = n(973844);

function N() {
  return (0, i.jsx)("div", {
    className: f.selectionCircle,
    children: (0, i.jsx)(E.Z, {
      className: f.checkmarkCircle,
      foreground: f.checkmark,
      backgroundColor: l.Z.unsafe_rawColors.WHITE_500.css
    })
  })
}

function A(e) {
  let {
    name: t,
    className: n,
    style: r,
    onSelect: o,
    isSelected: a = !1,
    tabIndex: l,
    children: u,
    showBadge: _
  } = e, c = (0, d.useRadioItem)({
    label: t,
    isSelected: a
  });
  return (0, i.jsx)(d.Tooltip, {
    text: t,
    children: e => (0, i.jsxs)("div", {
      className: f.themeSelectionContainer,
      children: [(0, i.jsx)(d.Clickable, {
        ...e,
        ...c,
        tabIndex: null != l ? l : c.tabIndex,
        className: s()(f.themeSelection, {
          [f.selected]: a
        }, n),
        style: r,
        onClick: a ? h.dG4 : o,
        children: u
      }), a && (0, i.jsx)(N, {}), !a && _ && (0, i.jsx)("div", {
        className: f.redCircle
      })]
    })
  })
}

function m(e) {
  let {
    theme: t,
    isSelected: n,
    onSelect: r
  } = e, E = (0, a.e7)([c.Z], () => c.Z.systemPrefersColorScheme), I = e => (0, _.ap)(e) ? l.Z.unsafe_rawColors.PRIMARY_600.css : l.Z.unsafe_rawColors.WHITE_500.css, N = (0, o.EQ)({
    theme: t,
    systemPrefersColorScheme: E
  }).with({
    theme: "system",
    systemPrefersColorScheme: h.BRd.LIGHT
  }, () => f.lightIcon).with({
    theme: h.BRd.LIGHT
  }, () => f.lightIcon).with({
    theme: h.BRd.DARK
  }, () => f.darkIcon).with({
    theme: h.BRd.DARKER
  }, () => f.darkerIcon).with({
    theme: h.BRd.MIDNIGHT
  }, () => f.midnightIcon).otherwise(() => f.darkIcon), m = (0, o.EQ)(t).with(h.BRd.LIGHT, () => S.Z.Messages.THEME_LIGHT).with(h.BRd.DARK, () => S.Z.Messages.THEME_DARK).with(h.BRd.DARKER, () => "Darker").with(h.BRd.MIDNIGHT, () => S.Z.Messages.THEME_MIDNIGHT).with("system", () => S.Z.Messages.THEME_SYSTEM).exhaustive(), O = (0, d.useRedesignIconContext)().enabled;
  return (0, i.jsx)(A, {
    onSelect: r,
    isSelected: n,
    name: m,
    className: s()(f.defaultThemeSelection, N),
    children: "system" === t && (0, i.jsx)("div", {
      className: f.iconWrapper,
      children: O ? (0, i.jsx)(u.D, {
        color: I(E)
      }) : (0, i.jsx)(T.Z, {
        fill: I(E)
      })
    })
  })
}

function O(e) {
  let {
    preset: t,
    isSelected: n,
    disabled: r,
    tabIndex: o,
    onSelect: a,
    showBadge: l
  } = e, {
    colors: u,
    angle: d,
    theme: c
  } = t, E = (0, I.VK)({
    colors: u,
    angle: d
  });
  return (0, i.jsx)(A, {
    onSelect: r ? void 0 : a,
    isSelected: n,
    name: t.getName(),
    className: s()([r ? f.disabled : null, (0, _.wj)(c) ? f.darkOverlay : f.lightOverlay]),
    style: {
      background: "var(--bg-overlay), ".concat(E)
    },
    tabIndex: o,
    showBadge: l
  })
}