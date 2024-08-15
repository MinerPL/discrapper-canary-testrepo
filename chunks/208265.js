s.r(n),
	s.d(n, {
		default: function () {
			return x;
		}
	}),
	s(47120);
var a = s(735250),
	t = s(470079),
	l = s(481060),
	i = s(613734),
	o = s(409617),
	r = s(451426),
	c = s(384725),
	d = s(534044),
	_ = s(670199),
	E = s(800530),
	N = s(981631),
	u = s(665010);
function x(e) {
	let { classificationId: n, transitionState: s, initialSlide: x = E.Cs.SPEED_BUMP, onClose: A } = e,
		[I, C] = t.useState(x),
		{ classification: S, isDsaEligible: T } = (0, i.YG)(null != n ? n : N.lds),
		m = (null == S ? void 0 : S.is_spam) || !1,
		h = (null == S ? void 0 : S.is_coppa) || !1;
	t.useEffect(() => {
		T ? C(x) : C(E.Cs.COLLECT_SIGNAL);
	}, [C, x, T]);
	let M = t.useCallback(() => {
			c.Z.close(), A();
		}, [A]),
		L = t.useCallback(() => {
			var e, n;
			let s = null;
			(s = T
				? null === (e = E.d9[I]) || void 0 === e
					? void 0
					: e.next
				: null === (n = E.c6[I]) || void 0 === n
					? void 0
					: n.next)
				? C(s)
				: M();
		}, [I, T, M]),
		g = t.useCallback(() => {
			var e, n;
			let s;
			(s = T
				? null === (e = E.d9[I]) || void 0 === e
					? void 0
					: e.prev
				: null === (n = E.c6[I]) || void 0 === n
					? void 0
					: n.prev)
				? C(s)
				: M();
		}, [I, T, M]);
	return (0, a.jsx)(l.ModalRoot, {
		transitionState: s,
		disableTrack: !0,
		size: l.ModalSize.DYNAMIC,
		children: (0, a.jsx)('div', {
			className: u.container,
			children: (0, a.jsxs)(l.Slides, {
				activeSlide: I,
				width: 500,
				children: [
					(0, a.jsx)(l.Slide, {
						id: E.Cs.SPEED_BUMP,
						children: (0, a.jsx)(_.Z, {
							classification: S,
							onClose: M,
							onNext: L,
							isSpam: m,
							isCoppa: h
						})
					}),
					(0, a.jsx)(l.Slide, {
						id: E.Cs.COLLECT_SIGNAL,
						children: (0, a.jsx)(o.Z, {
							isDsaEligible: T,
							onClose: M,
							onNext: L,
							onBack: g
						})
					}),
					(0, a.jsx)(l.Slide, {
						id: E.Cs.CONFIRM_SUBMISSION,
						children: (0, a.jsx)(r.Z, {
							onClose: M,
							onNext: L,
							onBack: g
						})
					}),
					(0, a.jsx)(l.Slide, {
						id: E.Cs.REQUEST_SENT,
						children: (0, a.jsx)(d.Z, { onNext: L })
					}),
					(0, a.jsx)(l.Slide, {
						id: E.Cs.THANKS,
						children: (0, a.jsx)(o.Z, {
							isDsaEligible: T,
							onClose: M,
							onNext: L,
							onBack: g
						})
					})
				]
			})
		})
	});
}
