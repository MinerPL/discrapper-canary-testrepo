t.d(s, {
	Sz: function () {
		return O;
	},
	of: function () {
		return A;
	}
}),
	t(653041),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(913527),
	r = t.n(i),
	o = t(99945),
	l = t(780384),
	c = t(481060),
	d = t(355467),
	_ = t(410030),
	E = t(906732),
	u = t(600164),
	I = t(296848),
	T = t(798769),
	S = t(981631),
	N = t(689938),
	C = t(391717);
async function m(e) {
	let {
		premiumSubscription: s,
		pauseDuration: t,
		onClose: n,
		setHasError: a,
		setIsCancelling: i,
		analyticsLocations: r,
		analyticsLocation: o
	} = e;
	try {
		i(!0), a(!1), await (0, d.Mg)(s, { pauseDuration: t }, r, o), n();
	} catch {
		a(!0), i(!1);
	}
}
function A(e) {
	let { premiumType: s, onClose: t, pauseDuration: i, setPauseDuration: r, footer: l, premiumSubscription: d } = e,
		_ = a.useCallback(
			(e) => {
				let { value: s } = e;
				r(s);
			},
			[r]
		),
		E =
			d.status === S.O0b.PAUSED
				? N.Z.Messages.PREMIUM_PAUSE_SELECT_EXTEND_DURATION_SUBTITLE
				: N.Z.Messages.PREMIUM_PAUSE_SELECT_SUBTITLE,
		m = (function (e) {
			let s =
					e.status === S.O0b.PAUSED
						? N.Z.Messages.PREMIUM_PAUSE_EXTEND_DURATION_MONTHS_CAPITALIZE
						: N.Z.Messages.PREMIUM_PAUSE_DURATION_MONTHS_CAPITALIZE,
				{ durations: t, currentDaysPaused: n } = (0, I.AT)(e),
				a = [];
			for (let e of t) {
				let t = o.T[e];
				a.push({
					name: s.format({ days: t - n }),
					value: t,
					radioItemIconClassName: C.radioOption
				});
			}
			return (
				a.sort((e, s) => e.value - s.value),
				a.push({
					name: N.Z.Messages.PREMIUM_PAUSE_DURATION_CANCEL,
					value: 0,
					radioBarClassName: C.cancelText,
					radioItemIconClassName: C.cancelText
				}),
				a
			);
		})(d);
	return (
		a.useEffect(() => {
			if (!(m.length < 1)) r(m[0].value);
		}, []),
		(0, n.jsxs)(n.Fragment, {
			children: [
				(0, n.jsx)(T.Z, {
					premiumType: s,
					onClose: t
				}),
				(0, n.jsx)(c.ModalHeader, {
					separator: !1,
					children: (0, n.jsxs)('div', {
						className: C.__invalid_header,
						children: [
							(0, n.jsx)(c.Heading, {
								variant: 'heading-xl/bold',
								className: C.__invalid_modalHeader,
								children: N.Z.Messages.PREMIUM_PAUSE_SELECT_TITLE
							}),
							(0, n.jsx)(c.Heading, {
								variant: 'heading-sm/medium',
								className: C.subtitle,
								children: E
							})
						]
					})
				}),
				(0, n.jsx)(c.ModalContent, {
					className: C.body,
					children: (0, n.jsx)(c.RadioGroup, {
						options: m,
						onChange: _,
						value: i
					})
				}),
				(0, n.jsx)(c.ModalFooter, {
					justify: u.Z.Justify.START,
					children: l
				})
			]
		})
	);
}
function O(e) {
	let { premiumSubscription: s, premiumType: t, onClose: i, pauseDuration: o, analyticsLocation: d } = e,
		[I, A] = a.useState(!1),
		{ analyticsLocations: O } = (0, E.ZP)(),
		[g, h] = a.useState(!1),
		p = (0, _.ZP)(),
		R = null,
		x = null,
		M = [S.O0b.PAST_DUE, S.O0b.PAUSED].includes(s.status) ? s.currentPeriodStart : s.currentPeriodEnd,
		f = r()(M).add(o, 'days').toDate();
	switch (s.status) {
		case S.O0b.PAST_DUE:
			x = N.Z.Messages.PREMIUM_PAUSE_PAST_DUE_CONFIRM_BODY.format({
				pauseDuration: o,
				resumeDate: f
			});
			break;
		case S.O0b.PAUSED:
			x = N.Z.Messages.PREMIUM_PAUSE_EXTEND_CONFIRM_BODY.format({ resumeDate: f });
			break;
		default:
			x = N.Z.Messages.PREMIUM_PAUSE_CONFIRM_BODY.format({
				pauseDate: M,
				resumeDate: f,
				pauseDuration: o
			});
	}
	return (
		(R = (0, n.jsx)('div', {
			className: C.body,
			children: x
		})),
		(0, n.jsxs)(n.Fragment, {
			children: [
				(0, n.jsx)(T.Z, {
					premiumType: t,
					onClose: i
				}),
				(0, n.jsx)(c.ModalHeader, {
					separator: !1,
					children: (0, n.jsx)('div', {
						className: C.__invalid_header,
						children: (0, n.jsx)(c.Heading, {
							variant: 'heading-xl/bold',
							className: C.__invalid_modalHeader,
							children: N.Z.Messages.PREMIUM_PAUSE_YOUR_SUBSCRIPTION_WILL_BE_PAUSED
						})
					})
				}),
				(0, n.jsxs)(c.ModalContent, {
					className: C.body,
					children: [
						I
							? (0, n.jsx)(c.FormErrorBlock, {
									className: C.errorBlock,
									children: N.Z.Messages.BILLING_ERROR_GENERIC
								})
							: null,
						R
					]
				}),
				(0, n.jsx)(c.ModalFooter, {
					justify: u.Z.Justify.START,
					children: (0, n.jsxs)('div', {
						className: C.whatYouLoseButtonContainer,
						children: [
							(0, n.jsx)(c.Button, {
								color: c.Button.Colors.RED,
								disabled: g || null == o,
								onClick: async () => {
									await m({
										premiumSubscription: s,
										pauseDuration: o,
										setIsCancelling: h,
										setHasError: A,
										onClose: i,
										analyticsLocations: O,
										analyticsLocation: d
									});
								},
								children: N.Z.Messages.CONFIRM
							}),
							(0, n.jsx)(c.Button, {
								look: c.Button.Looks.LINK,
								color: (0, l.wj)(p) ? c.Button.Colors.WHITE : c.Button.Colors.PRIMARY,
								onClick: i,
								children: N.Z.Messages.PREMIUM_CANCEL_WHAT_YOU_LOSE_BACK
							})
						]
					})
				})
			]
		})
	);
}
