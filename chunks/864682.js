n.d(t, {
	Z: function () {
		return h;
	}
}),
	n(47120);
var i = n(735250);
n(470079);
var l = n(442837),
	r = n(481060),
	a = n(594174),
	s = n(74538),
	o = n(327943),
	c = n(997945),
	u = n(630117),
	d = n(441319);
function h() {
	let [e, t, n] = (0, l.Wu)([a.default, o.Z], () => [
			o.Z.getCurrentDesktopIcon(),
			o.Z.isEditorOpen,
			s.ZP.isPremium(a.default.getCurrentUser())
		]),
		h = d.QA[e],
		p = e !== c.aH.DEFAULT && (n || t),
		_ = (0, r.useRedesignIconContext)().enabled,
		f = (0, i.jsx)(r.ClydeIcon, {
			size: 'custom',
			color: 'currentColor',
			width: 30,
			height: _ ? 30 : 22
		});
	return null != h && p
		? (0, i.jsx)(u.Z, {
				id: e,
				width: 48
			})
		: f;
}
