var r = n(210887),
	i = n(626135),
	a = n(607070),
	s = n(94752);
let o = s.E.NONE,
	l = window.matchMedia('(prefers-color-scheme: dark)'),
	u = window.matchMedia('(prefers-color-scheme: light)'),
	c = window.matchMedia('(inverted-colors: inverted)'),
	d = window.matchMedia('(prefers-contrast: more)'),
	_ = window.matchMedia('(forced-colors: active)');
function E(e, t) {
	t ? (o |= e) : (o &= ~e);
}
t.Z = {
	init() {
		a.Z.addChangeListener(this.handleAccessibilityStoreChanged), r.Z.addChangeListener(this.handleAccessibilityStoreChanged), l.addListener(this.handlePrefersColorSchemeDarkChanged), this.handlePrefersColorSchemeDarkChanged(l), u.addListener(this.handlePrefersColorSchemeLightChanged), this.handlePrefersColorSchemeLightChanged(u), d.addListener(this.handlePrefersMoreContrastChanged), this.handlePrefersMoreContrastChanged(d), _.addListener(this.handlePrefersForcedColorsChanged), this.handlePrefersForcedColorsChanged(_), c.addListener(this.handleInvertColorsChanged), this.handleInvertColorsChanged(c), i.default.setSystemAccessibilityFeatures(this.getActiveFeatures);
	},
	getActiveFeatures: () => o,
	handlePrefersColorSchemeDarkChanged(e) {
		E(s.E.PREFERS_COLOR_SCHEME_DARK, e.matches);
	},
	handlePrefersColorSchemeLightChanged(e) {
		E(s.E.PREFERS_COLOR_SCHEME_LIGHT, e.matches);
	},
	handlePrefersMoreContrastChanged(e) {
		E(s.E.HIGH_CONTRAST, e.matches);
	},
	handlePrefersForcedColorsChanged(e) {
		E(s.E.FORCED_COLORS, e.matches);
	},
	handleInvertColorsChanged(e) {
		E(s.E.INVERT_COLORS, e.matches);
	},
	handleAccessibilityStoreChanged() {
		E(s.E.REDUCED_MOTION, a.Z.useReducedMotion), E(s.E.REDUCED_MOTION_FROM_USER_SETTINGS, 'auto' !== a.Z.rawPrefersReducedMotion), E(s.E.FORCED_COLORS_FROM_USER_SETTINGS, a.Z.syncForcedColors), E(s.E.CHAT_FONT_SCALE_DECREASED, a.Z.isFontScaledDown), E(s.E.CHAT_FONT_SCALE_INCREASED, a.Z.isFontScaledUp), E(s.E.ZOOM_LEVEL_DECREASED, a.Z.isZoomedOut), E(s.E.ZOOM_LEVEL_INCREASED, a.Z.isZoomedIn), E(s.E.MESSAGE_GROUP_SPACING_DECREASED, a.Z.isMessageGroupSpacingDecreased), E(s.E.MESSAGE_GROUP_SPACING_INCREASED, a.Z.isMessageGroupSpacingIncreased), E(s.E.DARK_SIDEBAR, r.Z.darkSidebar), E(s.E.SATURATION_LEVEL_DECREASED, a.Z.saturation < 1), E(s.E.ROLE_STYLE_ADJUSTED, 'username' !== a.Z.roleStyle), E(s.E.SYNC_PROFILE_THEME_WITH_USER_THEME, a.Z.syncProfileThemeWithUserTheme);
	}
};
