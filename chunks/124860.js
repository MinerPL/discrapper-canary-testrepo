s.d(t, {
	Cd: function () {
		return f;
	},
	YR: function () {
		return S;
	}
}),
	s(47120),
	s(411104);
var n = s(735250),
	l = s(470079),
	i = s(481060),
	r = s(447097),
	o = s(873124),
	a = s(248902),
	d = s(160511),
	u = s(51693),
	c = s(973810),
	h = s(689938);
function f(e) {
	var t, s;
	let { mfaChallenge: h, mfaFinish: f, onEarlyClose: m, onClose: S, width: _ = 440 } = e,
		[g, x] = l.useState(
			null !== (s = null === (t = h.methods[0]) || void 0 === t ? void 0 : t.type) && void 0 !== s ? s : 'select'
		),
		[E, C] = l.useState(g),
		p = async (e) => {
			let { mfaType: t, data: s } = e;
			await f({
				mfaType: t,
				data: s,
				ticket: h.ticket
			}),
				null != S && S();
		},
		v = {
			mfaChallenge: h,
			finish: p,
			setSlide: x,
			onClose: m
		};
	return (0, n.jsxs)(i.Slides, {
		activeSlide: g,
		width: _,
		onSlideReady: C,
		children: [
			(0, n.jsx)(i.Slide, {
				id: 'select',
				children: (0, n.jsx)(a.Z, { ...v })
			}),
			(0, n.jsx)(i.Slide, {
				id: 'webauthn',
				children: (0, n.jsx)(c.Z, { ...v })
			}),
			(0, n.jsx)(i.Slide, {
				id: 'totp',
				children: (0, n.jsx)(u.Z, {
					...v,
					isSlideReady: 'totp' === E
				})
			}),
			(0, n.jsx)(i.Slide, {
				id: 'sms',
				children: (0, n.jsx)(d.Z, {
					...v,
					isSlideReady: 'sms' === E
				})
			}),
			(0, n.jsx)(i.Slide, {
				id: 'backup',
				children: (0, n.jsx)(r.Z, {
					...v,
					isSlideReady: 'backup' === E
				})
			}),
			(0, n.jsx)(i.Slide, {
				id: 'password',
				children: (0, n.jsx)(o.Z, {
					...v,
					isSlideReady: 'password' === E
				})
			})
		]
	});
}
function m(e) {
	let { mfaChallenge: t, finish: s, transitionState: l, onClose: r } = e;
	return (0, n.jsx)(i.ModalRoot, {
		transitionState: l,
		size: i.ModalSize.SMALL,
		'aria-label': h.Z.Messages.MFA_V2_HEADER,
		children: (0, n.jsx)(f, {
			mfaChallenge: t,
			mfaFinish: s,
			onClose: r,
			onEarlyClose: r
		})
	});
}
function S(e, t, s) {
	(0, i.openModal)(
		(s) =>
			(0, n.jsx)(m, {
				finish: t,
				mfaChallenge: e,
				...s
			}),
		{
			onCloseCallback: () => {
				s(Error(h.Z.Messages.MFA_V2_CANCELED));
			}
		}
	);
}
