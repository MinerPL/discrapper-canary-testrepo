n.d(t, {
	Y: function () {
		return o;
	}
}),
	n(47120);
var r = n(470079),
	i = n(338545),
	a = n(481060),
	s = n(717495);
function o(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'respect-motion-settings',
		o = arguments.length > 3 ? arguments[3] : void 0,
		l = r.useContext(a.AccessibilityPreferencesContext).reducedMotion.enabled,
		u = t;
	!('animate-always' === n || ('respect-motion-settings' === n && !l)) &&
		(u = {
			...t,
			...s.F
		});
	let [c, d, _] = (0, i.useTransition)(e, u, o);
	return 4 == arguments.length ? [c, d, _] : c;
}
