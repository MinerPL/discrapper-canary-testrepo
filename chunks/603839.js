n.d(t, {
	Z: function () {
		return Z;
	}
}),
	n(47120);
var i = n(735250),
	a = n(470079),
	s = n(120356),
	r = n.n(s),
	l = n(392711),
	o = n(338545),
	c = n(442837),
	d = n(481060),
	u = n(207796),
	_ = n(889711),
	E = n(931240),
	h = n(970606),
	m = n(963202),
	I = n(650461),
	g = n(35313),
	p = n(284019),
	T = n(672775),
	S = n(601463),
	f = n(192565),
	C = n(641037),
	N = n(689938),
	A = n(629209);
let v = {
	mass: 1,
	tension: 600,
	friction: 60,
	clamp: !0
};
function Z(e) {
	let { guildId: t, onClose: n } = e,
		s = (0, I.Wg)(),
		{
			progress: Z,
			errors: L,
			submitting: O
		} = (0, c.cj)([I.ZP], () => {
			var e, n, i, a;
			return {
				progress:
					null !== (a = null === (e = I.ZP.getStateForGuild(t)) || void 0 === e ? void 0 : e.progress) && void 0 !== a
						? a
						: s,
				errors: null === (n = I.ZP.getStateForGuild(t)) || void 0 === n ? void 0 : n.errors,
				submitting: null === (i = I.ZP.getStateForGuild(t)) || void 0 === i ? void 0 : i.submitting
			};
		}),
		R = a.useMemo(() => (0, C.G)(L), [L]),
		[x, b] = a.useState(!1),
		[P, M] = a.useState(window.innerWidth),
		[D, y] = a.useState(1),
		[j, U] = a.useState(!0),
		G = (0, g.f)(),
		k = (0, d.useSpring)({
			opacity: D,
			config: v,
			onStart: () => U(!0),
			onRest: () => U(1 === D)
		}),
		w = (0, d.useSpring)(
			{
				transform: 'translateX('.concat(1 === D ? 0 : (-1 * (P - 380)) / 2 + 47.5, 'px)'),
				config: v
			},
			'respect-motion-settings'
		),
		B = (0, d.useTransition)(0 === D, {
			from: { opacity: 0 },
			enter: {
				opacity: 1,
				delay: 500
			},
			config: v
		}),
		H = (0, d.useTransition)(0 === D, {
			from: { opacity: 0 },
			enter: { opacity: 1 },
			leave: { opacity: 0 },
			config: v
		}),
		V = a.useCallback(
			(e) => {
				if (e === R.length) y(0), (0, h.Lp)(t, 'signature');
				else if (0 === D) y(1);
				else {
					var n;
					E._9(t, {
						currentStep: e,
						furthestStep: Math.max(null !== (n = Z.furthestStep) && void 0 !== n ? n : 0, e)
					});
				}
			},
			[D, t, Z.furthestStep, R.length]
		);
	a.useEffect(() => {
		(0, h.Lp)(t, (0, h.Qh)(Z.currentStep));
	}, [t, Z.currentStep]),
		a.useEffect(() => {
			let e = (0, _.pP)((0, l.debounce)(() => M(window.innerWidth), 250));
			return (0, _.YP)(e, document.body), () => (0, _.UC)(e, document.body);
		}, [D, j]);
	let F = a.useMemo(() => null != L && Object.values(L).some((e) => null != e), [L]),
		Y = a.useMemo(() => (null != L && Object.values(L).length > 0 ? (0, C.G)(L).find((e) => e.hasError) : null), [L]),
		W = a.useCallback(() => {
			y(1), E._9(t, { currentStep: null == Y ? void 0 : Y.index });
		}, [null == Y ? void 0 : Y.index, t]),
		{ guilds: z } = (0, m.C3)({
			location: 'ClanDiscoveryAdminContainer',
			includeConverted: !1
		}),
		{ enableApplication: K } = (0, m.Fg)('ClanDiscoveryAdminContainer'),
		q = a.useCallback(() => {
			0 === z.filter((e) => e.id !== t).length && K ? (0, u.fH)(u.v0.GET_STARTED) : (0, u.fH)(u.v0.ADMIN_UPSELL);
		}, [z, t, K]),
		Q = a.useCallback(() => {
			(0, C.V)({
				guildId: t,
				onSuccess: () => {
					q(), n();
				},
				progress: Z
			});
		}, [t, Z, q, n]),
		X = a.useRef(null),
		J =
			null != Y
				? (0, i.jsxs)('div', {
						className: A.tooltipContents,
						children: [
							(0, i.jsx)(d.WarningIcon, {
								size: 'xs',
								color: 'currentColor',
								className: A.errorIcon
							}),
							(0, i.jsxs)('div', {
								children: [
									(0, i.jsx)(d.Text, {
										variant: 'text-sm/medium',
										color: 'header-primary',
										children: N.Z.Messages.CLAN_SUBMIT_ERROR_TITLE
									}),
									(0, i.jsx)(d.Text, {
										variant: 'text-xs/normal',
										color: 'text-muted',
										children: N.Z.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
											backHook: (e, t) =>
												(0, i.jsx)(
													d.Anchor,
													{
														className: A.errorLink,
														onClick: W,
														children: e
													},
													t
												)
										})
									})
								]
							})
						]
					})
				: null;
	return (0, i.jsx)(o.animated.div, {
		ref: X,
		style: G,
		className: A.modal,
		children: (0, i.jsxs)(d.FocusRingScope, {
			containerRef: X,
			children: [
				(0, i.jsx)(d.Button, {
					className: A.close,
					look: d.Button.Looks.OUTLINED,
					size: d.Button.Sizes.MEDIUM,
					color: d.Button.Colors.PRIMARY,
					onClick: n,
					children: N.Z.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
				}),
				(0, i.jsxs)('div', {
					className: A.content,
					children: [
						(0, i.jsxs)('div', {
							className: A.panel,
							children: [
								(0, i.jsx)(o.animated.div, {
									style: k,
									className: r()(A.stepsContainer, { [A.hidden]: !j }),
									children: (0, i.jsx)(f.Z, { guildId: t })
								}),
								(0, i.jsx)('div', {
									className: r()(A.navigationContainer, { [A.elevatedNavigationContainer]: !j }),
									children: (0, i.jsx)(T.Z, {
										steps: R,
										progress: Z,
										updateCurrentStep: V,
										animationStyle: k,
										animationClassName: r()({ [A.hidden]: !j })
									})
								})
							]
						}),
						(0, i.jsx)(o.animated.div, {
							style: k,
							className: r()(A.divider, {
								[A.hidden]: !j,
								[A.dividerResponsive]: j
							})
						}),
						(0, i.jsx)(o.animated.div, {
							style: w,
							className: r()(A.sidebar, { [A.sidebarResponsive]: j }),
							children: (0, i.jsx)(S.Z, {
								guildId: t,
								signed: x,
								setSigned: j ? void 0 : b,
								sidebarWidth: 380,
								windowWidth: P,
								transition: B,
								brandPrimaryColor: Z.brandPrimaryColor
							})
						})
					]
				}),
				H(
					(e, t) =>
						t &&
						(0, i.jsx)(o.animated.div, {
							style: e,
							className: A.submit,
							children: (0, i.jsx)(d.Tooltip, {
								color: d.Tooltip.Colors.GREY,
								tooltipClassName: A.tooltip,
								text: J,
								'aria-label': null != Y ? N.Z.Messages.CLAN_SUBMIT_ERROR_TITLE : void 0,
								shouldShow: null != Y,
								forceOpen: null != Y,
								children: (e) =>
									(0, i.jsx)(p.Z, {
										...e,
										themeColor: Z.brandPrimaryColor,
										disabled: !x || F,
										submitting: O,
										look: d.Button.Looks.FILLED,
										size: d.Button.Sizes.MEDIUM,
										color: d.Button.Colors.BRAND,
										onClick: Q,
										children: N.Z.Messages.FINISH
									})
							})
						})
				)
			]
		})
	});
}
