"use strict";
let i;
var r, s, o = n(442837),
  a = n(524437),
  l = n(692547),
  u = n(780384),
  _ = n(570140),
  d = n(607070),
  c = n(47760),
  E = n(540059);
n(57132);
var I = n(541049);
n(449934);
var T = n(12647),
  h = n(358085),
  S = n(238514),
  f = n(740492),
  N = n(581883),
  A = n(874893),
  m = n(981631),
  O = n(469115);

function R(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let C = null !== (r = (0, I.Z)()) && void 0 !== r ? r : m.BRd.DARK,
  p = null,
  g = !1;

function L() {
  let e = function() {
    var e, t;
    if (__OVERLAY__) return m.BRd.DARK;
    if (d.Z.syncForcedColors && "active" === d.Z.systemForcedColors && null != i) return i;
    let n = f.ZP.useSystemTheme;
    if (n === A.K.ON && null != i) return i;
    let r = null === (e = S.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
    if (null != r) return r;
    let s = null === (t = N.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
    if (null == s) return C;
    if (!E.i.getCurrentConfig({
        location: "ThemeStore"
      }).enabled) return s === a.Q2.LIGHT ? m.BRd.LIGHT : m.BRd.DARK;
    switch (s) {
      case a.Q2.LIGHT:
        return m.BRd.LIGHT;
      case a.Q2.DARK:
        return m.BRd.DARK;
      case a.Q2.DARKER:
        return m.BRd.DARKER;
      case a.Q2.MIDNIGHT:
        return m.BRd.MIDNIGHT;
      default:
        return m.BRd.DARK
    }
  }();
  return e
}

function v() {
  return M()
}

function D() {
  return M()
}

function M() {
  let e = L();
  return e !== C && (C = e, !0)
}
class P extends(s = o.ZP.PersistedStore) {
  initialize(e) {
    (null == e ? void 0 : e.theme) != null && (C = e.theme), this.waitFor(f.ZP, S.Z, N.Z, d.Z)
  }
  getState() {
    return {
      theme: this.theme
    }
  }
  get darkSidebar() {
    return (0, u.ap)(this.theme) && f.ZP.darkSidebar && !g
  }
  get theme() {
    return L()
  }
  get systemTheme() {
    return p
  }
  get systemPrefersColorScheme() {
    return i
  }
  get isSystemThemeAvailable() {
    return null !== p
  }
}
R(P, "displayName", "ThemeStore"), R(P, "persistKey", "ThemeStore"), R(P, "migrations", [e => {
  let t = e.theme;
  return "amoled" === t && (t = "midnight"), {
    ...e,
    theme: t
  }
}]), t.Z = new P(_.Z, {
  CACHE_LOADED: v,
  CONNECTION_OPEN: v,
  LOGOUT: function(e) {
    return !e.isSwitchingAccount && C !== m.BRd.DARK && (C = m.BRd.DARK, function() {
      !__OVERLAY__ && h.isPlatformEmbedded && T.Z.setApplicationBackgroundColor((0, u.wj)(L()) ? l.Z.unsafe_rawColors.PRIMARY_700.resolve({
        saturation: d.Z.saturation
      }).hsl() : l.Z.unsafe_rawColors.WHITE_500.resolve({
        saturation: d.Z.saturation
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
    C = null != i && null !== (n = null === (t = O.qt[i]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : L();
    let r = null != i;
    return g !== r ? (g = r, !0) : function() {
      let e = L();
      return !(0, c.qu)(C, e) && (C = e, !0)
    }()
  },
  RESET_PREVIEW_CLIENT_THEME: v,
  SYSTEM_THEME_CHANGE: function(e) {
    let {
      systemTheme: t
    } = e;
    return p = t, M()
  },
  ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function(e) {
    return i = e.systemPrefersColorScheme, M()
  },
  ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function() {
    return (0, u.ap)(L())
  }
})