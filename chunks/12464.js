t(47120);
var s,
	n,
	l,
	r,
	o = t(735250),
	i = t(470079),
	c = t(160612),
	u = t(120356),
	d = t.n(u),
	E = t(692547),
	A = t(481060),
	N = t(219929),
	m = t(689938),
	_ = t(647140),
	p = t(787223);
((l = s || (s = {})).CardNumber = 'cardNumber'), (l.CardExpiry = 'cardExpiry'), (l.CardCvc = 'cardCvc'), ((r = n || (n = {})).Change = 'change'), (r.Focus = 'focus'), (r.Blur = 'blur');
a.Z = function (e) {
	let a = i.useRef(null),
		{ stripeType: t, flipped: s, updateCompleted: n, onFocus: l, onBlur: r } = e,
		[u, h] = i.useState(N.Qy.UNKNOWN),
		[T, C] = i.useState(!1),
		[S, I] = i.useState(!1),
		[P, R] = i.useState(null),
		[f, M] = i.useState({}),
		b = (0, c.useElements)(),
		{ theme: O } = (0, A.useThemeContext)(),
		g = i.useCallback(() => {
			if (null != b)
				switch (t) {
					case 'cardNumber': {
						let e = b.getElement(c.CardNumberElement);
						if (null == e) return;
						e.off('change'), e.off('focus'), e.off('blur');
						break;
					}
					case 'cardExpiry': {
						let e = b.getElement(c.CardExpiryElement);
						if (null == e) return;
						e.off('change'), e.off('focus'), e.off('blur');
						break;
					}
					case 'cardCvc': {
						let e = b.getElement(c.CardCvcElement);
						if (null == e) return;
						e.off('change'), e.off('focus'), e.off('blur');
					}
				}
		}, [b, t]),
		y = i.useCallback(
			(e) => {
				!S && !e.empty && I(!0), null != n && n(e.complete), null != e.error && C(!1);
			},
			[S, n]
		),
		L = i.useCallback(() => {
			C(!0), null == l || l();
		}, [l]),
		v = i.useCallback(() => {
			C(!1), null == r || r();
		}, [r]),
		D = i.useCallback(() => {
			if (null != b)
				switch (t) {
					case 'cardNumber': {
						let e = b.getElement(c.CardNumberElement);
						if (null == e) return;
						e.on('change', (e) => {
							u !== e.brand && h(e.brand), e.empty && S ? R(m.Z.Messages.CREDIT_CARD_ERROR_REQUIRED) : null != e.error ? R(m.Z.Messages.CREDIT_CARD_ERROR_NUMBER) : R(null), y(e);
						}),
							e.on('focus', L),
							e.on('blur', v);
						break;
					}
					case 'cardExpiry': {
						let e = b.getElement(c.CardExpiryElement);
						if (null == e) return;
						e.on('change', (e) => {
							null != e.error || (e.empty && S) ? R(m.Z.Messages.CREDIT_CARD_ERROR_EXPIRATION) : R(null), y(e);
						}),
							e.on('focus', L),
							e.on('blur', v);
						break;
					}
					case 'cardCvc': {
						let e = b.getElement(c.CardCvcElement);
						if (null == e) return;
						e.on('change', (e) => {
							null != e.error || (e.empty && S) ? R(m.Z.Messages.CREDIT_CARD_ERROR_SECURITY_CODE) : R(null), y(e);
						}),
							e.on('focus', L),
							e.on('blur', v);
					}
				}
		}, [v, y, L, u, b, S, t]);
	function x() {
		return d()(_.cardInput, {
			[_.cardInputError]: null !== P,
			[_.cardInputFocused]: T,
			[_.cardNumberInput]: 'cardNumber' === t
		});
	}
	return (
		i.useEffect(
			() => (
				D(),
				() => {
					g();
				}
			),
			[D, g]
		),
		i.useLayoutEffect(() => {
			let { current: e } = a;
			if (null == e) return;
			let t = window.getComputedStyle(e),
				s = window.getComputedStyle(e, '::placeholder'),
				n = t.getPropertyValue('font-family'),
				l = t.getPropertyValue('font-weight'),
				r = E.Z.colors.TEXT_PRIMARY.resolve({
					theme: O,
					saturation: 1
				}).hex();
			M({
				base: {
					fontFamily: n,
					fontWeight: l,
					color: r,
					fontSize: t.getPropertyValue('font-size'),
					'::placeholder': { color: s.getPropertyValue('color') }
				}
			});
		}, [a, O]),
		(0, o.jsxs)('div', {
			className: d()(_.cardNumberWrapper),
			'data-stripe-type': t,
			children: [
				(0, o.jsx)('div', {
					ref: a,
					className: d()(_.hiddenDiv, p.input)
				}),
				(function () {
					switch (t) {
						case 'cardNumber':
							return (0, o.jsxs)('div', {
								children: [
									(0, o.jsx)(N.ZP, {
										className: _.cardIcon,
										type: u,
										flipped: s
									}),
									(0, o.jsx)(c.CardNumberElement, {
										options: {
											style: f,
											placeholder: m.Z.Messages.PAYMENT_SOURCE_CARD_NUMBER,
											disableLink: !1
										},
										className: x()
									})
								]
							});
						case 'cardExpiry':
							return (0, o.jsx)(c.CardExpiryElement, {
								options: {
									style: f,
									placeholder: m.Z.Messages.PAYMENT_SOURCE_EXPIRATION_DATE_PLACEHOLDER
								},
								className: x()
							});
						case 'cardCvc':
							return (0, o.jsx)(c.CardCvcElement, {
								options: {
									style: f,
									placeholder: m.Z.Messages.CREDIT_CARD_SECURITY_CODE
								},
								className: x()
							});
					}
				})(),
				(0, o.jsx)(A.InputError, { error: P })
			]
		})
	);
};
