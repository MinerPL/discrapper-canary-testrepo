n.d(t, {
	Z: function () {
		return f;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(374470),
	s = n(442837),
	o = n(481060),
	l = n(626135),
	u = n(5967),
	c = n(607070),
	d = n(446108),
	_ = n(981631);
function E(e) {
	var t;
	if (e.ctrlKey || e.altKey || e.metaKey || e.keyCode !== _.yXg.TAB || null == e.target) return;
	let { target: n } = e,
		r = null === (t = (0, u.uB)(e)) || void 0 === t ? void 0 : t.activeElement;
	(0, a.k)(n) &&
		l.default.track(_.rMx.KEYBOARD_SHORTCUT_USED, {
			shortcut_name: 'tab_navigation',
			source_class_list: null != r ? Array.from(r.classList) : [],
			location_object: n.tagName
		});
}
function f(e) {
	let { children: t } = e,
		n = (0, s.cj)([c.Z], () => ({
			enabled: c.Z.useReducedMotion,
			rawValue: c.Z.rawPrefersReducedMotion
		})),
		a = (0, s.cj)([c.Z], () => ({
			enabled: c.Z.useForcedColors,
			rawValue: c.Z.systemForcedColors
		})),
		l = (0, s.e7)([c.Z], () => c.Z.alwaysShowLinkDecorations),
		u = i.useMemo(
			() => ({
				reducedMotion: n,
				prefersCrossfades: !1,
				forcedColors: a,
				alwaysShowLinkDecorations: l
			}),
			[n, a, l]
		);
	return (
		i.useEffect(
			() => ((0, d.d1)(), window.addEventListener('keydown', E), () => window.removeEventListener('keydown', E)),
			[]
		),
		(0, r.jsx)(o.AccessibilityPreferencesContext.Provider, {
			value: u,
			children: t
		})
	);
}
