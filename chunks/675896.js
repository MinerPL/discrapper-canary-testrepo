"use strict";
var i = n(210887),
  r = n(626135),
  s = n(607070),
  o = n(94752);
let a = o.E.NONE,
  l = window.matchMedia("(prefers-color-scheme: dark)"),
  u = window.matchMedia("(prefers-color-scheme: light)"),
  _ = window.matchMedia("(inverted-colors: inverted)"),
  d = window.matchMedia("(prefers-contrast: more)"),
  c = window.matchMedia("(forced-colors: active)");

function E(e, t) {
  t ? a |= e : a &= ~e
}
t.Z = {
  init() {
    s.Z.addChangeListener(this.handleAccessibilityStoreChanged), i.Z.addChangeListener(this.handleAccessibilityStoreChanged), l.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(l), u.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(u), d.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(d), c.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(c), _.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(_), r.default.setSystemAccessibilityFeatures(this.getActiveFeatures)
  },
  getActiveFeatures: () => a,
  handlePrefersColorSchemeDarkChanged(e) {
    E(o.E.PREFERS_COLOR_SCHEME_DARK, e.matches)
  },
  handlePrefersColorSchemeLightChanged(e) {
    E(o.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches)
  },
  handlePrefersMoreContrastChanged(e) {
    E(o.E.HIGH_CONTRAST, e.matches)
  },
  handlePrefersForcedColorsChanged(e) {
    E(o.E.FORCED_COLORS, e.matches)
  },
  handleInvertColorsChanged(e) {
    E(o.E.INVERT_COLORS, e.matches)
  },
  handleAccessibilityStoreChanged() {
    E(o.E.REDUCED_MOTION, s.Z.useReducedMotion), E(o.E.REDUCED_MOTION_FROM_USER_SETTINGS, "auto" !== s.Z.rawPrefersReducedMotion), E(o.E.FORCED_COLORS_FROM_USER_SETTINGS, s.Z.syncForcedColors), E(o.E.CHAT_FONT_SCALE_DECREASED, s.Z.isFontScaledDown), E(o.E.CHAT_FONT_SCALE_INCREASED, s.Z.isFontScaledUp), E(o.E.ZOOM_LEVEL_DECREASED, s.Z.isZoomedOut), E(o.E.ZOOM_LEVEL_INCREASED, s.Z.isZoomedIn), E(o.E.MESSAGE_GROUP_SPACING_DECREASED, s.Z.isMessageGroupSpacingDecreased), E(o.E.MESSAGE_GROUP_SPACING_INCREASED, s.Z.isMessageGroupSpacingIncreased), E(o.E.DARK_SIDEBAR, i.Z.darkSidebar), E(o.E.SATURATION_LEVEL_DECREASED, s.Z.saturation < 1), E(o.E.ROLE_STYLE_ADJUSTED, "username" !== s.Z.roleStyle), E(o.E.SYNC_PROFILE_THEME_WITH_USER_THEME, s.Z.syncProfileThemeWithUserTheme)
  }
}