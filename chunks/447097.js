s.d(t, {
	Z: function () {
		return d;
	}
}),
	s(757143),
	s(47120),
	s(773603);
var n = s(735250),
	l = s(470079),
	i = s(658550),
	r = s(481060),
	o = s(507453),
	a = s(689938);
function d(e) {
	let { mfaChallenge: t, finish: s, setSlide: d, onClose: u, isSlideReady: c } = e,
		[h, f] = l.useState(!1),
		[m, S] = l.useState(null),
		[_, g] = l.useState(''),
		x = l.useRef(null),
		E = a.Z.Messages.TWO_FA_ENTER_BACKUP_LABEL,
		C = a.Z.Messages.TWO_FA_BACKUP_CODE,
		p = l.useCallback(
			(e) => {
				g(e), S(null);
			},
			[g, S]
		);
	return (
		l.useEffect(() => {
			if (c) {
				var e;
				null === (e = x.current) || void 0 === e || e.focus();
			}
		}, [c]),
		(0, n.jsxs)('form', {
			onSubmit: (e) => {
				e.preventDefault(),
					f(!0),
					s({
						mfaType: 'backup',
						data: _.replace(/-/g, '')
					})
						.catch((e) => {
							var t, s;
							S(null !== (s = e.message) && void 0 !== s ? s : null === (t = e.body) || void 0 === t ? void 0 : t.message);
						})
						.finally(() => {
							f(!1);
						});
			},
			children: [
				(0, n.jsx)(o.Z.SlideHeader, { onClose: u }),
				(0, n.jsx)(o.Z.SlideContent, {
					children: (0, n.jsxs)(r.FormItem, {
						title: E,
						children: [
							(0, n.jsx)(r.TextInput, {
								inputRef: x,
								onChange: p,
								placeholder: C,
								maxLength: i.tL,
								minLength: i.th,
								value: _,
								spellCheck: 'false',
								disabled: h
							}),
							(0, n.jsx)(o.Z.SlideError, { error: m })
						]
					})
				}),
				(0, n.jsx)(o.Z.SlideFooter, {
					mfaChallenge: t,
					setSlide: d,
					showConfirm: !0,
					disabled: _.length < 8,
					submitting: h
				})
			]
		})
	);
}
