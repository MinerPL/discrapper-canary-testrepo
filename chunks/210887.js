"use strict";
let i;
n.r(t);
var r, a, s = n("442837"),
  o = n("524437"),
  l = n("692547"),
  u = n("780384"),
  d = n("570140"),
  _ = n("607070"),
  c = n("47760"),
  E = n("540059");
n("57132");
var I = n("541049");
n("449934");
var T = n("12647"),
  f = n("358085"),
  S = n("238514"),
  h = n("740492"),
  A = n("581883"),
  m = n("874893"),
  N = n("981631"),
  p = n("469115");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let R = null !== (r = (0, I.default)()) && void 0 !== r ? r : N.ThemeTypes.DARK,
  C = null,
  g = !1;

function L() {
  return function() {
    var e, t;
    if (__OVERLAY__) return N.ThemeTypes.DARK;
    if (_.default.syncForcedColors && "active" === _.default.systemForcedColors && null != i || h.default.useSystemTheme === m.SystemThemeState.ON && null != i) return i;
    let n = null === (e = S.default.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != n) return n;
    let r = null === (t = A.default.settings.appearance) || void 0 === t ? void 0 : t.theme;
    if (null == r) return R;
    if (!E.DesktopVisualRefreshExperiment.getCurrentConfig({
        location: "ThemeStore"
      }).enabled) return r === o.Theme.LIGHT ? N.ThemeTypes.LIGHT : N.ThemeTypes.DARK;
    switch (r) {
      case o.Theme.LIGHT:
        return N.ThemeTypes.LIGHT;
      case o.Theme.DARK:
        return N.ThemeTypes.DARK;
      case o.Theme.DARKER:
        return N.ThemeTypes.DARKER;
      case o.Theme.MIDNIGHT:
        return N.ThemeTypes.MIDNIGHT;
      default:
        return N.ThemeTypes.DARK
    }
  }()
}

function v() {
  return M()
}

function D() {
  return M()
}

function M() {
  let e = L();
  return e !== R && (R = e, !0)
}
class y extends(a = s.default.PersistedStore) {
  initialize(e) {
    (null == e ? void 0 : e.theme) != null && (R = e.theme), this.waitFor(h.default, S.default, A.default, _.default)
  }
  getState() {
    return {
      theme: this.theme
    }
  }
  get darkSidebar() {
    return (0, u.isThemeLight)(this.theme) && h.default.darkSidebar && !g
  }
  get theme() {
    return L()
  }
  get systemTheme() {
    return C
  }
  get systemPrefersColorScheme() {
    return i
  }
  get isSystemThemeAvailable() {
    return null !== C
  }
}
O(y, "displayName", "ThemeStore"), O(y, "persistKey", "ThemeStore"), O(y, "migrations", [e => {
  let t = e.theme;
  return "amoled" === t && (t = "midnight"), {
    ...e,
    theme: t
  }
}]), t.default = new y(d.default, {
  CACHE_LOADED: v,
  CONNECTION_OPEN: v,
  LOGOUT: function(e) {
    return !e.isSwitchingAccount && R !== N.ThemeTypes.DARK && (R = N.ThemeTypes.DARK, function() {
      !__OVERLAY__ && f.isPlatformEmbedded && T.default.setApplicationBackgroundColor((0, u.isThemeDark)(L()) ? l.default.unsafe_rawColors.PRIMARY_700.resolve({
        saturation: _.default.saturation
      }).hsl() : l.default.unsafe_rawColors.WHITE_500.resolve({
        saturation: _.default.saturation
      }).hsl())
    }(), M())
  },
  OVERLAY_INITIALIZE: v,
  SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: D,
  UNSYNCED_USER_SETTINGS_UPDATE: D,
  USER_SETTINGS_PROTO_UPDATE: v,
  UPDATE_BACKGROUND_GRADIENT_PRESET: function(e) {
    var t, n;
    let {
      presetId: i
    } = e;
    R = null != i && null !== (n = null === (t = p.BACKGROUND_GRADIENT_PRESETS_MAP[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : L();
    let r = null != i;
    return g !== r ? (g = r, !0) : function() {
      let e = L();
      return !(0, c.areThemesEqualForGradientThemes)(R, e) && (R = e, !0)
    }()
  },
  RESET_PREVIEW_CLIENT_THEME: v,
  SYSTEM_THEME_CHANGE: function(e) {
    let {
      systemTheme: t
    } = e;
    return C = t, M()
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
    return i = e.systemPrefersColorScheme, M()
  },
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return (0, u.isThemeLight)(L())
  }
})