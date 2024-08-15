t.d(n, {
	Z: function () {
		return L;
	}
}),
	t(411104),
	t(47120);
var s = t(735250),
	r = t(470079),
	l = t(120356),
	i = t.n(l),
	a = t(692547),
	c = t(481060),
	o = t(987032),
	u = t(219929),
	I = t(46141),
	_ = t(63063),
	E = t(981631),
	T = t(231338),
	d = t(689938),
	N = t(783820);
let M = '***@***.***',
	A = new I.dm({
		id: 'new_payment_source_id',
		brand: u.ZP.Types.UNKNOWN,
		type: E.HeQ.CARD
	});
function L(e) {
	var n, t;
	let l,
		{
			selectedPaymentSourceId: L,
			paymentSources: P,
			prependOption: R,
			hidePersonalInformation: S,
			onChange: m,
			onPaymentSourceAdd: U,
			isTrial: p = !1,
			disabled: v = !1,
			className: C,
			optionClassName: O,
			dropdownLoading: h
		} = e,
		f = 0 === P.length,
		g = [...(null != R ? [R] : []), ...P, A].map((e, n) => {
			if (e instanceof I.ZP) {
				let { brand: n, label: t } = (function (e, n) {
					if (e instanceof I.dm)
						return e.id === A.id
							? {
									brand: null,
									label: d.Z.Messages.PAYMENT_SOURCES_ADD
								}
							: {
									brand: n ? u.ZP.Types.UNKNOWN : e.brand,
									label: d.Z.Messages.PAYMENT_SOURCE_CARD_ENDING_IN.format({ last4: n ? '****' : e.last4 })
								};
					if (e instanceof I.qo)
						return {
							brand: u.ZP.Types.PAYPAL,
							label: n ? M : e.email
						};
					if (e instanceof I.Sf)
						return {
							brand: u.ZP.Types.SOFORT,
							label: n ? M : e.email
						};
					else if (e instanceof I.fv)
						return {
							brand: u.ZP.Types.GIROPAY,
							label: d.Z.Messages.PAYMENT_SOURCE_GIROPAY
						};
					else if (e instanceof I.Vg)
						return {
							brand: u.ZP.Types.PRZELEWY24,
							label: n ? M : e.email
						};
					else if (e instanceof I.sn)
						return {
							brand: u.ZP.Types.PAYSAFECARD,
							label: d.Z.Messages.PAYMENT_SOURCE_PAYSAFE_CARD_REDIRECT
						};
					else if (e instanceof I.o_)
						return {
							brand: u.ZP.Types.GCASH,
							label: d.Z.Messages.PAYMENT_SOURCE_GCASH
						};
					else if (e instanceof I.kX)
						return {
							brand: u.ZP.Types.GRABPAY,
							label: d.Z.Messages.PAYMENT_SOURCE_GRABPAY
						};
					else if (e instanceof I.z)
						return {
							brand: u.ZP.Types.MOMO_WALLET,
							label: d.Z.Messages.PAYMENT_SOURCE_MOMO_WALLET
						};
					else if (e instanceof I.Xc)
						return {
							brand: u.ZP.Types.VENMO,
							label: n ? '***' : '@' + e.username
						};
					else if (e instanceof I.Om)
						return {
							brand: u.ZP.Types.KAKAOPAY,
							label: d.Z.Messages.PAYMENT_SOURCE_KAKAOPAY
						};
					else if (e instanceof I.JC)
						return {
							brand: u.ZP.Types.GOPAY_WALLET,
							label: d.Z.Messages.PAYMENT_SOURCE_GOPAY_WALLET
						};
					else if (e instanceof I.U4)
						return {
							brand: u.ZP.Types.BANCONTACT,
							label: d.Z.Messages.PAYMENT_SOURCE_BANCONTACT
						};
					else if (e instanceof I.D0)
						return {
							brand: u.ZP.Types.EPS,
							label: d.Z.Messages.PAYMENT_SOURCE_EPS_WITH_BANK.format({ bank: (0, o.Ul)(e.bank) })
						};
					else if (e instanceof I.jc)
						return {
							brand: u.ZP.Types.IDEAL,
							label: d.Z.Messages.PAYMENT_SOURCE_IDEAL_WITH_BANK.format({ bank: (0, o.YE)(e.bank) })
						};
					else if (e instanceof I.u_)
						return {
							brand: u.ZP.Types.CASH_APP,
							label: n ? '***' : e.username
						};
					throw Error('Invalid Payment Source');
				})(e, S);
				return {
					value: e.id,
					label: (0, s.jsxs)('div', {
						className: N.paymentSourceSelectedOption,
						children: [
							null != n ? (0, s.jsx)(u.ZP, { type: u.ZP.getType(n) }) : null,
							(0, s.jsx)('div', {
								className: i()(N.paymentSourceLabel, { [N.error]: e.invalid }),
								children: t
							})
						]
					})
				};
			}
			return {
				key: n,
				value: e.value,
				label: (0, s.jsx)('div', {
					className: N.paymentSourceLabel,
					children: e.label
				})
			};
		}),
		x = r.useMemo(() => P.find((e) => e.id === L), [P, L]);
	let Z =
		((n = p),
		(t = x),
		(l = null),
		n && null != t && !t.canRedeemTrial()
			? (l = d.Z.Messages.PAYMENT_SOURCE_REDEMPTION_INVALID)
			: n &&
				null != t &&
				t.hasFlag(T.Cw.NEW) &&
				(l = d.Z.Messages.BILLING_PAYMENT_AUTHORIZATION_CHARGE.format({
					helpDeskArticle: _.Z.getArticleURL(E.BhN.PAYMENT_AUTHORIZATION_CHARGE)
				})),
		l);
	return (0, s.jsxs)(s.Fragment, {
		children: [
			f
				? (0, s.jsx)(c.Button, {
						color: c.ButtonColors.BRAND,
						fullWidth: !0,
						onClick: U,
						children: d.Z.Messages.PAYMENT_SOURCES_ADD
					})
				: (0, s.jsx)(c.SingleSelect, {
						options: g,
						value: L,
						onChange: (e) => {
							if (e === A.id) null != U && U();
							else {
								let n = P.find((n) => n.id === e);
								null != m && m(n);
							}
						},
						isDisabled: v,
						className: i()({ [N.paymentSourceHasWarning]: null != Z }, C),
						optionClassName: O,
						placeholder: d.Z.Messages.PAYMENT_SOURCE_TYPE_SELECT,
						renderOptionValue: (e) => {
							let [n] = e;
							return h ? (0, s.jsx)(c.Spinner, { type: c.SpinnerTypes.SPINNING_CIRCLE }) : n.label;
						}
					}),
			null != Z
				? (0, s.jsxs)('div', {
						className: N.paymentSourceWarning,
						children: [
							(0, s.jsx)(c.CircleWarningIcon, {
								size: 'custom',
								width: 20,
								height: 20,
								className: N.paymentSourceWarningIcon,
								color: a.Z.unsafe_rawColors.YELLOW_300.css
							}),
							(0, s.jsx)(c.Text, {
								variant: 'text-xs/normal',
								children: Z
							})
						]
					})
				: null
		]
	});
}
