var r = n(703656),
	i = n(556296),
	a = n(358085),
	s = n(998502),
	o = n(981631);
function l(e, t) {
	return !(e === o.MAM.BROWSER && i.Z.hasKeybind(o.MoX.MOUSE_BUTTON, t)) && !0;
}
t.Z = new (class e {
	initialize() {
		(0, a.isDesktop)() &&
			(s.ZP.on('NAVIGATE_BACK', (e, t) => {
				l(t, o.qXD.Back) && (0, r.op)();
			}),
			s.ZP.on('NAVIGATE_FORWARD', (e, t) => {
				l(t, o.qXD.Forward) && (0, r.eH)();
			}));
	}
})();
