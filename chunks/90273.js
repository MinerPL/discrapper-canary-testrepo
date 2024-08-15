let s, a;
n.d(t, {
	o: function () {
		return R;
	}
}),
	n(47120);
var r = n(735250),
	i = n(470079),
	l = n(120356),
	o = n.n(l),
	c = n(846519),
	d = n(481060),
	_ = n(626135),
	u = n(572004),
	E = n(981631),
	T = n(689938),
	I = n(492711);
function R(e) {
	var t;
	let {
			className: n,
			copyValue: l,
			copyMetaData: R,
			copyTooltip: C,
			copyTooltipDelay: g = 500,
			children: p,
			disableCopy: N,
			showCopyIcon: A,
			'aria-label': m,
			onCopy: f
		} = e,
		[S, h] = i.useState(0),
		[M, x] = i.useState(!1),
		[b, O] = i.useState(!1);
	if (
		(i.useEffect(
			() => (
				(s = new c.V7()),
				(a = new c.V7()),
				function () {
					s.stop(), a.stop();
				}
			),
			[]
		),
		!u.wS || N)
	)
		return (0, r.jsx)(r.Fragment, { children: p });
	let P = [
			T.Z.Messages.COPY_SUCCESS_1,
			T.Z.Messages.COPY_SUCCESS_2,
			T.Z.Messages.COPY_SUCCESS_3,
			T.Z.Messages.COPY_SUCCESS_4,
			T.Z.Messages.COPY_SUCCESS_5,
			T.Z.Messages.COPY_SUCCESS_6,
			T.Z.Messages.COPY_SUCCESS_7,
			T.Z.Messages.COPY_SUCCESS_8,
			T.Z.Messages.COPY_SUCCESS_9,
			T.Z.Messages.COPY_SUCCESS_10,
			T.Z.Messages.COPY_SUCCESS_11
		],
		v = Math.min(Math.max(S - 1, 0), P.length - 1),
		L = null !== (t = P[v]) && void 0 !== t ? t : P[0],
		Z = S >= P.length - 1,
		D = Z ? d.TooltipColors.RED : d.TooltipColors.GREEN,
		B = M ? D : d.TooltipColors.PRIMARY,
		j = () => {
			s.stop(), O(!1);
		},
		U = (e) => {
			null == f || f(),
				(0, u.JG)(l),
				_.default.track(E.rMx.TEXT_COPIED, { type: R }),
				'function' == typeof e && e(),
				!b && h(S + 1),
				O(!0),
				x(!0),
				s.start(1000, () => O(!1)),
				a.start(2000, () => h(0));
		};
	return (0, r.jsx)(d.Tooltip, {
		delay: g,
		color: B,
		forceOpen: b,
		text: M
			? (0, r.jsx)(d.Shaker, {
					isShaking: Z,
					children: L
				})
			: C,
		onAnimationRest: (e, t) => {
			!b && M && t.phase === E.UkZ.LEAVE && x(!1);
		},
		'aria-label': C,
		children: (e) => {
			let { onClick: t, onMouseEnter: s, ...a } = e;
			return (0, r.jsx)(d.Clickable, {
				...a,
				className: I.clickTarget,
				'aria-label': m,
				onMouseEnter: () => {
					M ? j() : 'function' == typeof s && s();
				},
				onClick: () => {
					U(t);
				},
				children: (0, r.jsxs)('div', {
					className: o()(n, I.copiableWrapper),
					children: [
						(0, r.jsx)('div', {
							className: I.childWrapper,
							children: p
						}),
						A
							? (0, r.jsx)('div', {
									className: I.__invalid_copyIconWrapper,
									children: (0, r.jsx)(d.CopyIcon, {
										size: 'sm',
										color: 'currentColor',
										className: I.copyIcon
									})
								})
							: null
					]
				})
			});
		}
	});
}
