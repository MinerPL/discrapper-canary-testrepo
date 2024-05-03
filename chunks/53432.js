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
  c = n("540059"),
  f = n("210887"),
  S = n("740492"),
  E = n("695346"),
  M = n("874893"),
  T = n("981631"),
  m = n("689938");

function p() {
  let e = E.MessageDisplayCompact.useSetting(),
    {
      analyticsLocations: t
    } = (0, o.default)(),
    {
      theme: n,
      useSystemTheme: p,
      useForcedColors: I
    } = (0, r.useStateFromStoresObject)([f.default, S.default, i.default], () => ({
      theme: f.default.theme,
      useSystemTheme: S.default.useSystemTheme,
      useForcedColors: i.default.useForcedColors
    })),
    h = (0, c.useIsDesktopVisualRefreshEnabled)("appearance_settings"),
    g = (e, r) => (0, u.jsx)(a.MenuRadioItem, {
      id: e,
      group: "input-modes",
      label: r,
      disabled: I,
      checked: p === M.SystemThemeState.ON ? "system" === e : e === n,
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
    children: [g(T.ThemeTypes.DARK, m.default.Messages.THEME_DARK), g(T.ThemeTypes.LIGHT, m.default.Messages.THEME_LIGHT), h && (0, u.jsxs)(u.Fragment, {
      children: [g(T.ThemeTypes.DARKER, "Darker"), g(T.ThemeTypes.MIDNIGHT, m.default.Messages.THEME_MIDNIGHT)]
    }), g("system", m.default.Messages.THEME_SYSTEM)]
  }, "theme-items"), (0, u.jsx)(a.MenuGroup, {
    children: (0, u.jsx)(a.MenuItem, {
      id: "compact-mode",
      label: e ? m.default.Messages.SWITCH_TO_COZY_MODE : m.default.Messages.SWITCH_TO_COMPACT_MODE,
      action: () => {
        E.MessageDisplayCompact.updateSetting(!e), (0, l.setMessageGroupSpacing)()
      }
    })
  }, "compact-mode")]
}