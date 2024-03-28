"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var u = n("735250");
n("470079");
var r = n("442837"),
  a = n("481060"),
  s = n("153867"),
  l = n("857595"),
  i = n("607070"),
  o = n("906732"),
  d = n("705262"),
  c = n("210887"),
  f = n("740492"),
  S = n("695346"),
  E = n("874893"),
  M = n("981631"),
  m = n("689938");

function p() {
  let e = S.MessageDisplayCompact.useSetting(),
    {
      analyticsLocations: t
    } = (0, o.default)(),
    {
      theme: n,
      useSystemTheme: p,
      useForcedColors: T
    } = (0, r.useStateFromStoresObject)([c.default, f.default, i.default], () => ({
      theme: c.default.theme,
      useSystemTheme: f.default.useSystemTheme,
      useForcedColors: i.default.useForcedColors
    })),
    I = (e, r) => (0, u.jsx)(a.MenuRadioItem, {
      id: e,
      group: "input-modes",
      label: r,
      disabled: T,
      checked: p === E.SystemThemeState.ON ? "system" === e : e === n,
      action: () => {
        (0, d.trackClientThemeUpdated)({
          isPersisted: !0,
          analyticsLocations: t,
          themeName: "default ".concat(e)
        }), (0, s.saveClientTheme)({
          theme: e
        })
      }
    });
  return [(0, u.jsxs)(a.MenuGroup, {
    children: [I(M.ThemeTypes.DARK, m.default.Messages.THEME_DARK), I(M.ThemeTypes.LIGHT, m.default.Messages.THEME_LIGHT), I("system", m.default.Messages.THEME_SYSTEM)]
  }, "theme-items"), (0, u.jsx)(a.MenuGroup, {
    children: (0, u.jsx)(a.MenuItem, {
      id: "compact-mode",
      label: e ? m.default.Messages.SWITCH_TO_COZY_MODE : m.default.Messages.SWITCH_TO_COMPACT_MODE,
      action: () => {
        S.MessageDisplayCompact.updateSetting(!e), (0, l.setMessageGroupSpacing)()
      }
    })
  }, "compact-mode")]
}