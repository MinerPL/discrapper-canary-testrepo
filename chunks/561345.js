"use strict";
n.r(t), n("47120");
var a = n("317770"),
  s = n("238514"),
  l = n("210887"),
  i = n("695346"),
  r = n("581883"),
  o = n("238302"),
  u = n("47760"),
  d = n("469115");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
class f extends a.default {
  _initialize() {
    r.default.addChangeListener(this._updateClientTheme), l.default.addChangeListener(this._updateClientTheme)
  }
  _terminate() {
    r.default.removeChangeListener(this._updateClientTheme), l.default.removeChangeListener(this._updateClientTheme)
  }
  constructor(...e) {
    super(...e), c(this, "_currentBackgroundGradientPresetId", void 0), c(this, "_updateBackgroundGradientPresetId", e => {
      if (this._currentBackgroundGradientPresetId !== e) {
        if (null == e) {
          (0, o.resetBackgroundGradientPreset)(), this._currentBackgroundGradientPresetId = void 0;
          return
        }(0, o.updateBackgroundGradientPreset)(e), this._currentBackgroundGradientPresetId = e
      }
    }), c(this, "_updateClientTheme", () => {
      var e, t, n;
      let a = s.default.shouldSync("appearance") ? i.ClientThemeSettings.getSetting().backgroundGradientPresetId : null === (t = s.default.getAppearanceSettings()) || void 0 === t ? void 0 : null === (e = t.clientThemeSettings) || void 0 === e ? void 0 : e.backgroundGradientPresetId;
      if (null != a && (null === (n = d.BACKGROUND_GRADIENT_PRESETS_MAP[a]) || void 0 === n ? void 0 : n.theme) !== l.default.theme) {
        let e = d.BACKGROUND_GRADIENT_PRESETS_MAP[a];
        if (!(0, u.areThemesEqualForGradientThemes)(e.theme, l.default.theme)) {
          this._updateBackgroundGradientPresetId(void 0);
          return
        }
      }
      this._updateBackgroundGradientPresetId(a)
    })
  }
}
t.default = new f