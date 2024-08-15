n.r(e), n(47120);
var a = n(735250),
	r = n(470079),
	o = n(830064),
	s = n(702493),
	c = n(77987),
	u = n(133853),
	l = n(703656),
	i = n(643366),
	d = n(94628),
	_ = n(659154),
	f = n(902928),
	I = n(240479),
	C = n(981631),
	E = n(773566);
e.default = (0, c.e)(function () {
	let t;
	let [e, n] = r.useState({
		type: 'user-code-input',
		usePrefilledCode: !0
	});
	(0, s.Z)(), (0, i.Y)(e);
	let c = r.useCallback(() => {
			n({ type: 'user-code-input' });
		}, [n]),
		A = r.useCallback(
			(t) => {
				n({
					type: 'authorization',
					userCodeData: t
				});
			},
			[n]
		),
		T = r.useCallback(
			(t) => {
				n({
					type: 'success',
					userCodeData: t
				});
			},
			[n]
		),
		p = r.useCallback(
			(t) => {
				n({
					type: 'error',
					userCodeData: t
				});
			},
			[n]
		);
	switch (e.type) {
		case 'user-code-input':
			t = (0, a.jsx)(I.v, {
				usePrefilledCode: e.usePrefilledCode || !1,
				onUserCodeAccepted: A
			});
			break;
		case 'authorization':
			t = (0, a.jsx)(d.B, {
				data: e.userCodeData,
				onDenied: c,
				onError: p,
				onSuccess: T
			});
			break;
		case 'success':
			t = (0, a.jsx)(f.u, {
				onComplete: () => (0, l.uL)(C.Z5c.ME),
				data: e.userCodeData
			});
			break;
		case 'error':
			t = (0, a.jsx)(_.c, { onTryAgain: c });
			break;
		default:
			t = null;
	}
	return (0, a.jsxs)('div', {
		className: E.activatePage,
		children: [
			(0, a.jsx)(o.Z, {
				className: E.artwork,
				preserveAspectRatio: 'xMinYMin slice'
			}),
			(0, a.jsx)(u.Z, {
				show: !0,
				className: E.logo
			}),
			(0, a.jsx)('div', {
				className: E.content,
				children: t
			})
		]
	});
});
