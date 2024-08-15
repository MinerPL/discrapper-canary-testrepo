n.r(s),
	n.d(s, {
		default: function () {
			return O;
		}
	}),
	n(47120);
var t = n(735250),
	o = n(470079),
	a = n(990547),
	l = n(442837),
	r = n(481060),
	i = n(809206),
	E = n(794358),
	_ = n(594174),
	N = n(626135),
	d = n(706734),
	c = n(264119),
	A = n(75788),
	u = n(22150),
	C = n(361833),
	M = n(134562),
	S = n(526761),
	m = n(981631),
	I = n(259076),
	x = n(120455),
	T = n(800010),
	R = n(75277);
function O(e) {
	var s;
	let { transitionState: n, onClose: O } = e,
		h = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
		L = o.useRef(null !== (s = null == h ? void 0 : h.verified) && void 0 !== s && s);
	o.useEffect(() => (N.default.track(m.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, i.Zy)()), []);
	let f = null == h ? void 0 : h.verified,
		g = f ? S.Ax.CONFIRM_START : S.Ax.EMAIL_AND_PASSWORD,
		[p, G] = o.useState(g),
		[j, v] = o.useState(null),
		[U, D] = o.useState(null),
		[H, B] = o.useState(null),
		[Z, k] = o.useState(''),
		[P, b] = o.useState(),
		y = (0, E.d)('change_email_modal'),
		F = p === S.Ax.CHANGE_EMAIL_WARNING ? x.wumpusExclamationImg : x.emailHeaderImg,
		w = p === S.Ax.CHANGE_EMAIL_WARNING ? R : T,
		K = { impression_group: a.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW };
	return (0, t.jsxs)(r.ModalRoot, {
		transitionState: n,
		disableTrack: !0,
		children: [
			(0, t.jsx)('img', {
				alt: '',
				className: F,
				src: w
			}),
			(0, t.jsxs)(r.Slides, {
				activeSlide: p,
				width: 440,
				onSlideReady: (e) => v(e),
				children: [
					(0, t.jsx)(r.Slide, {
						id: S.Ax.CONFIRM_START,
						impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
						impressionProperties: K,
						children: (0, t.jsx)(u.Z, {
							onNext: () => G(S.Ax.CONFIRM_CODE),
							onClose: O
						})
					}),
					(0, t.jsx)(r.Slide, {
						id: S.Ax.CONFIRM_CODE,
						impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
						impressionProperties: K,
						children: (0, t.jsx)(A.Z, {
							error: H,
							setError: B,
							setEmailToken: D,
							isSlideReady: j === S.Ax.CONFIRM_CODE,
							onNext: () => {
								E.Z.trackExposure({ location: 'change_email_confirm_code_slide' }),
									G(y ? S.Ax.CHANGE_EMAIL_REASONS : S.Ax.EMAIL_AND_PASSWORD);
							},
							onClose: O
						})
					}),
					(0, t.jsx)(r.Slide, {
						id: S.Ax.CHANGE_EMAIL_REASONS,
						impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
						impressionProperties: K,
						children: (0, t.jsx)(d.Z, {
							onNext: () => (
								N.default.track(m.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: P }),
								null != P && I.Mr.has(P) ? G(S.Ax.CHANGE_EMAIL_WARNING) : G(S.Ax.EMAIL_AND_PASSWORD)
							),
							onClose: O,
							reason: P,
							onReasonChange: b
						})
					}),
					(0, t.jsx)(r.Slide, {
						id: S.Ax.CHANGE_EMAIL_WARNING,
						impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
						impressionProperties: K,
						children: (0, t.jsx)(M.Z, {
							onNext: () => {
								N.default.track(m.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, { change_email_reason_enum: P }),
									G(S.Ax.EMAIL_AND_PASSWORD);
							},
							onClose: O
						})
					}),
					(0, t.jsx)(r.Slide, {
						id: S.Ax.EMAIL_AND_PASSWORD,
						impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
						impressionProperties: {
							...K,
							email_verified: L.current
						},
						children: (0, t.jsx)(C.Z, {
							emailToken: U,
							isSlideReady: j === S.Ax.EMAIL_AND_PASSWORD,
							onBack: f
								? () => {
										y
											? G(null != P && I.Mr.has(P) ? S.Ax.CHANGE_EMAIL_WARNING : S.Ax.CHANGE_EMAIL_REASONS)
											: G(S.Ax.CONFIRM_CODE);
									}
								: null,
							onNext: (e) => {
								k(e), G(S.Ax.COMPLETE);
							},
							onClose: O,
							reason: P
						})
					}),
					(0, t.jsx)(r.Slide, {
						id: S.Ax.COMPLETE,
						impressionName: a.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
						impressionProperties: K,
						children: (0, t.jsx)(c.Z, {
							email: Z,
							onClose: O
						})
					})
				]
			})
		]
	});
}
