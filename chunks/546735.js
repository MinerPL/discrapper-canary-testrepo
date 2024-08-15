n.d(t, {
	Z: function () {
		return r;
	}
});
var i = n(470079),
	a = n(246364),
	s = n(308083);
function r(e) {
	let { progress: t, updateCurrentStep: n } = e,
		{ currentStep: r, gameApplicationIds: l, playstyle: o, interests: c, description: d, tag: u, verificationForm: _ } = t,
		E = i.useMemo(() => null != _ && _.formFields.some((e) => !(0, a.J)(e)), [_]),
		h = i.useMemo(() => Array.from(c).filter((e) => !s.WZ.has(e) && !s.gh.has(e)), [c]),
		m = i.useCallback(() => {
			n(r + 1);
		}, [r, n]),
		I = i.useCallback(() => {
			n(r - 1);
		}, [r, n]),
		g = i.useCallback((e) => n(e), [n]),
		p = i.useMemo(() => {
			switch (r) {
				case s.Wy.GAMES:
					return 0 === l.size;
				case s.Wy.PLAYSTYLE:
					return o === s.zv.NONE;
				case s.Wy.INTERESTS:
					return h.length < 3;
				case s.Wy.DESCRIPTION:
					return 0 === d.length;
				case s.Wy.CUSTOMIZE_TAG_BADGE:
					return u.length < 2;
				case s.Wy.MEMBER_APPLICATION:
					return !E;
				default:
					return !1;
			}
		}, [r, d.length, l.size, E, h.length, o, u.length]),
		T = 0 === r;
	return i.useMemo(
		() => ({
			onStepClick: g,
			onNextClick: m,
			onBackClick: I,
			isNextDisabled: p,
			isBackDisabled: T
		}),
		[T, p, I, m, g]
	);
}
