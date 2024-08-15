s.d(t, {
	Z: function () {
		return h;
	}
}),
	s(47120),
	s(773603);
var n = s(735250),
	l = s(470079),
	i = s(658550),
	r = s(544891),
	o = s(481060),
	a = s(507453),
	d = s(981631),
	u = s(689938),
	c = s(286609);
function h(e) {
	let { mfaChallenge: t, finish: s, setSlide: h, onClose: f, isSlideReady: m } = e,
		[S, _] = l.useState(!1),
		[g, x] = l.useState(null),
		[E, C] = l.useState(!1),
		[p, v] = l.useState(null),
		[j, Z] = l.useState(''),
		M = l.useRef(null);
	l.useEffect(() => {
		_(!0),
			r.tn
				.post({
					url: d.ANM.LOGIN_SMS_SEND,
					body: { ticket: t.ticket },
					oldFormErrors: !0
				})
				.then((e) => {
					x(e.body.phone);
				})
				.catch((e) => {
					var t;
					v(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message));
				})
				.finally(() => {
					_(!1);
				});
	}, [t.ticket]),
		l.useEffect(() => {
			if (m) {
				var e;
				null === (e = M.current) || void 0 === e || e.focus();
			}
		}, [m]);
	let A = null == g ? u.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENDING : u.Z.Messages.TWO_FA_ENTER_SMS_TOKEN_SENT.format({ phoneNumber: g });
	return (0, n.jsxs)('form', {
		onSubmit: (e) => {
			e.preventDefault(),
				C(!0),
				s({
					mfaType: 'sms',
					data: j
				})
					.catch((e) => {
						var t, s;
						v(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message);
					})
					.finally(() => {
						C(!1);
					});
		},
		children: [
			(0, n.jsx)(a.Z.SlideHeader, {
				subtitle: A,
				onClose: f
			}),
			(0, n.jsx)(a.Z.SlideContent, {
				children: (0, n.jsxs)(o.FormItem, {
					title: u.Z.Messages.TWO_FA_ENTER_TOKEN_NO_BACKUP_LABEL,
					children: [
						(0, n.jsxs)('div', {
							className: c.smsInputContainer,
							children: [
								(0, n.jsx)(o.TextInput, {
									className: c.smsInput,
									inputRef: M,
									onChange: Z,
									placeholder: u.Z.Messages.TWO_FA_AUTH_CODE_NO_BACKUP,
									maxLength: 10,
									value: j,
									autoComplete: 'one-time-code',
									spellCheck: 'false',
									disabled: E
								}),
								(0, n.jsx)(o.Button, {
									size: o.Button.Sizes.MEDIUM,
									submitting: S,
									onClick: () => {
										r.tn
											.post({
												url: d.ANM.LOGIN_SMS_SEND,
												body: { ticket: t.ticket },
												oldFormErrors: !0
											})
											.then((e) => {
												x(e.body.phone);
											})
											.catch((e) => {
												var t;
												v(e.message || (null === (t = e.body) || void 0 === t ? void 0 : t.message));
											});
									},
									children: u.Z.Messages.MFA_SMS_RESEND
								})
							]
						}),
						(0, n.jsx)(a.Z.SlideError, { error: p })
					]
				})
			}),
			(0, n.jsx)(a.Z.SlideFooter, {
				mfaChallenge: t,
				setSlide: h,
				showConfirm: !0,
				disabled: j.length !== i.Gz,
				submitting: E
			})
		]
	});
}
