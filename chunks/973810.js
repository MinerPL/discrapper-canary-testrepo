s.d(t, {
	Z: function () {
		return f;
	}
}),
	s(47120);
var n = s(735250),
	l = s(470079),
	i = s(849055),
	r = s(481060),
	o = s(358085),
	a = s(960048),
	d = s(998502),
	u = s(507453),
	c = s(981631),
	h = s(689938);
function f(e) {
	let { mfaChallenge: t, finish: s, setSlide: f, onClose: m } = e,
		[S, _] = l.useState(!1),
		[g, x] = l.useState(null),
		{ challenge: E } = t.methods.find((e) => 'webauthn' === e.type),
		C = async () => {
			_(!0), x(null);
			let e = o.isPlatformEmbedded && d.ZP.supportsFeature(c.eRX.WEBAUTHN) ? d.ZP.webAuthnAuthenticate(E) : i.U2(JSON.parse(E)).then((e) => JSON.stringify(e)),
				t = async (e) => {
					try {
						await s({
							mfaType: 'webauthn',
							data: e
						});
					} catch (e) {
						var t;
						x(null !== (t = e.message) && void 0 !== t ? t : h.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR);
					}
				};
			try {
				let s = await e;
				await t(s);
			} catch (e) {
				a.Z.captureException(e), x(h.Z.Messages.MFA_V2_WEBAUTHN_GENERIC_ERROR);
			} finally {
				_(!1);
			}
		};
	return (0, n.jsxs)(n.Fragment, {
		children: [
			(0, n.jsx)(u.Z.SlideHeader, { onClose: m }),
			(0, n.jsxs)(u.Z.SlideContent, {
				children: [
					(0, n.jsx)(r.Button, {
						submitting: S,
						onClick: C,
						children: h.Z.Messages.MFA_V2_WEBAUTHN_CTA
					}),
					(0, n.jsx)(u.Z.SlideError, { error: g })
				]
			}),
			(0, n.jsx)(u.Z.SlideFooter, {
				mfaChallenge: t,
				setSlide: f
			})
		]
	});
}
