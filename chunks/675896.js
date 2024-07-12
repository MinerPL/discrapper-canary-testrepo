var r = n(210887),
  i = n(626135),
  a = n(607070),
  o = n(94752);
let s = o.E.NONE,
  l = window.matchMedia('(prefers-color-scheme: dark)'),
  u = window.matchMedia('(prefers-color-scheme: light)'),
  c = window.matchMedia('(inverted-colors: inverted)'),
  d = window.matchMedia('(prefers-contrast: more)'),
  _ = window.matchMedia('(forced-colors: active)');

function E(e, t) {
  t ? s |= e : s &= ~e;
}
t.Z = {
  init() {
a.Z.addChangeListener(this.handleAccessibilityStoreChanged), r.Z.addChangeListener(this.handleAccessibilityStoreChanged), l.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(l), u.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(u), d.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(d), _.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(_), c.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(c), i.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
  },
  getActiveFeatures: () => s,
  handlePrefersColorSchemeDarkChanged(e) {
E(o.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
  },
  handlePrefersColorSchemeLightChanged(e) {
E(o.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
  },
  handlePrefersMoreContrastChanged(e) {
E(o.E.HIGH_CONTRAST, e.matches);
  },
  handlePrefersForcedColorsChanged(e) {
E(o.E.FORCED_COLORS, e.matches);
  },
  handleInvertColorsChanged(e) {
E(o.E.INVERT_COLORS, e.matches);
  },
  handleAccessibilityStoreChanged() {
E(o.E.REDUCED_MOTION, a.Z.useReducedMotion), E(o.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== a.Z.rawPrefersReducedMotion), E(o.E.FORCED_COLORS_FROM_USER_SETTINGS, a.Z.syncForcedColors), E(o.E.CHAT_FONT_SCALE_DECREASED, a.Z.isFontScaledDown), E(o.E.CHAT_FONT_SCALE_INCREASED, a.Z.isFontScaledUp), E(o.E.ZOOM_LEVEL_DECREASED, a.Z.isZoomedOut), E(o.E.ZOOM_LEVEL_INCREASED, a.Z.isZoomedIn), E(o.E.MESSAGE_GROUP_SPACING_DECREASED, a.Z.isMessageGroupSpacingDecreased), E(o.E.MESSAGE_GROUP_SPACING_INCREASED, a.Z.isMessageGroupSpacingIncreased), E(o.E.DARK_SIDEBAR, r.Z.darkSidebar), E(o.E.SATURATION_LEVEL_DECREASED, a.Z.saturation < 1), E(o.E.ROLE_STYLE_ADJUSTED, 'username' !== a.Z.roleStyle), E(o.E.SYNC_PROFILE_THEME_WITH_USER_THEME, a.Z.syncProfileThemeWithUserTheme);
  }
};