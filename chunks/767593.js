t.r(n), t(47120), t(653041);
var o = t(735250),
	r = t(470079),
	a = t(338545),
	i = t(481060),
	s = t(442837),
	l = t(607070),
	c = t(970606),
	u = t(963202),
	d = t(313201),
	m = t(863249),
	f = t(944163),
	p = t(246364),
	h = t(983736),
	_ = t(937111),
	x = t(200305),
	b = t(271383),
	C = t(594174),
	I = t(231467),
	N = t(981631),
	E = t(308083),
	g = t(689938),
	v = t(133072);
let R = {
		mass: 1,
		tension: 600,
		friction: 60
	},
	T = [
		{
			position: 0,
			alpha: 0
		},
		{
			position: 0.19,
			alpha: 0.262
		},
		{
			position: 0.34,
			alpha: 0.459
		},
		{
			position: 0.47,
			alpha: 0.618
		},
		{
			position: 0.57,
			alpha: 0.722
		},
		{
			position: 0.65,
			alpha: 0.806
		},
		{
			position: 0.73,
			alpha: 0.874
		},
		{
			position: 0.8,
			alpha: 0.925
		},
		{
			position: 0.86,
			alpha: 0.958
		},
		{
			position: 0.91,
			alpha: 0.979
		},
		{
			position: 0.95,
			alpha: 0.992
		},
		{
			position: 0.98,
			alpha: 0.998
		},
		{
			position: 1,
			alpha: 1
		}
	];
function j(e) {
	let { children: n, containerRef: t, faderSize: a, faderEdgeThreshold: s } = e,
		l = r.useRef(null),
		[c, u] = r.useState(0),
		[d, m] = r.useState(0),
		[f, p] = r.useState(0),
		h = r.useCallback(() => {
			null != l.current &&
				(u(l.current.getDistanceFromTop()),
				m(l.current.getDistanceFromBottom()),
				p(l.current.getScrollerState().offsetHeight));
		}, []);
	r.useEffect(() => {
		if ((h(), null == t.current)) return;
		let e = new ResizeObserver(() => {
			h();
		});
		return (
			e.observe(t.current),
			() => {
				e.disconnect();
			}
		);
	}, [l, t, h]);
	let _ = r.useMemo(() => {
		if (0 === c && 0 === d) return {};
		let e = [];
		if ((e.push('to bottom'), c > 0)) {
			let n = s > 0 ? 1 - Math.min(s, c) / s : 1;
			for (let t = 0; t < T.length; t++) {
				let { position: o, alpha: r } = T[t],
					i = (o * a).toFixed(2);
				e.push('hsla(0, 0%, 0%, '.concat(n + r * (1 - n), ') ').concat(i, 'px'));
			}
		}
		if (d > 0) {
			let n = f - a,
				t = s > 0 ? 1 - Math.min(s, d) / s : 1;
			for (let o = T.length - 1; o >= 0; o--) {
				let { position: r, alpha: i } = T[o],
					s = (n + (1 - r) * a).toFixed(2);
				e.push('hsla(0, 0%, 0%, '.concat(t + i * (1 - t), ') ').concat(s, 'px'));
			}
		}
		return { maskImage: 'linear-gradient('.concat(e.join(','), ')') };
	}, [d, c, s, a, f]);
	return (0, o.jsx)(i.AdvancedScrollerNone, {
		ref: l,
		style: _,
		className: v.scroller,
		onScroll: h,
		children: n
	});
}
function y(e) {
	let { guildId: n, formState: t, updateFormState: r } = e;
	return (0, o.jsxs)('div', {
		className: v.verificationForm,
		children: [
			(0, o.jsx)(i.Heading, {
				variant: 'heading-xxl/normal',
				color: 'header-primary',
				children: g.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE
			}),
			(0, o.jsx)(i.Text, {
				variant: 'text-md/normal',
				color: 'header-secondary',
				children: g.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE
			}),
			(0, o.jsx)(x.Y, {
				guildId: n,
				formState: t,
				updateFormState: r
			})
		]
	});
}
n.default = function (e) {
	var n, t, x, T;
	let { clan: F, prioritizedGameIds: B, position: S, transitionState: A, onClose: M } = e,
		O = (0, d.Dt)(),
		P = (0, s.e7)([f.Z], () => f.Z.get(F.id)),
		[k, q] = r.useState(null !== (x = null == P ? void 0 : P.formFields) && void 0 !== x ? x : []),
		[L, D] = r.useState(!1),
		Z = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
		w = (0, s.e7)([b.ZP], () => b.ZP.isMember(F.id, null == Z ? void 0 : Z.id), [F, Z]),
		H = (0, s.e7)([_.Z], () => {
			var e;
			return (null === (e = _.Z.getRequest(F.id)) || void 0 === e ? void 0 : e.applicationStatus) === p.wB.SUBMITTED;
		}),
		V = null == Z ? void 0 : Z.verified,
		Y = null == Z ? void 0 : Z.isPhoneVerified(),
		[U, z] = r.useState(''),
		{ enableApplication: G } = (0, u.Fg)('discovery');
	r.useEffect(() => {
		m.Z.fetchVerificationForm(F.id);
	}, [F.id]),
		r.useEffect(() => {
			null != P && q(P.formFields);
		}, [P]);
	let K = r.useCallback(
			(e) => {
				!L &&
					(D(!0),
					(0, c.r)({
						guildId: F.id,
						position: S
					})),
					q(e);
			},
			[q, L, D, F.id, S]
		),
		Q = r.useCallback(
			async (e) => {
				await m.Z.submitVerificationForm(F.id, e);
			},
			[F.id]
		),
		W = r.useCallback(async () => {
			try {
				await Q({
					...(null != P ? P : f.t),
					formFields: k
				}),
					M();
			} catch (e) {
				z(null == e ? void 0 : e.message);
			}
		}, [Q, M, P, k]),
		J =
			!((null == P ? void 0 : null === (n = P.guild) || void 0 === n ? void 0 : n.verification_level) ===
			N.sFg.VERY_HIGH
				? Y
				: V || Y) || k.some((e) => !(0, h.OA)(e)),
		X =
			(null !==
				(T = null == P ? void 0 : null === (t = P.guild) || void 0 === t ? void 0 : t.approximate_member_count) &&
			void 0 !== T
				? T
				: 0) >= E.Du,
		$ = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
		ee = (0, i.useSpring)(
			{
				from: {
					opacity: 0,
					transform: 'translateY('.concat($ ? 0 : 40, 'px)')
				},
				to: {
					opacity: 1,
					transform: 'translateY(0px)'
				},
				config: R,
				delay: 500
			},
			'animate-always'
		),
		en = r.useRef(null);
	return (0, o.jsxs)(i.ModalRoot, {
		transitionState: A,
		'aria-labelledby': O,
		size: i.ModalSize.DYNAMIC,
		className: v.container,
		hideShadow: !0,
		children: [
			(0, o.jsxs)(a.animated.div, {
				className: v.body,
				style: ee,
				children: [
					(0, o.jsx)('div', {
						className: v.applicationContainer,
						ref: en,
						children: (0, o.jsx)(j, {
							containerRef: en,
							faderSize: 180,
							faderEdgeThreshold: 48,
							children: (0, o.jsx)(y, {
								guildId: F.id,
								formState: k,
								updateFormState: K
							})
						})
					}),
					(0, o.jsx)('div', { className: v.verticalRule }),
					(0, o.jsxs)('div', {
						className: v.clanContainer,
						children: [
							(0, o.jsx)(I.xV, {
								clan: F,
								className: v.profileCard,
								prioritizedGameIds: B,
								expanded: !0,
								isMember: w,
								hasPendingJoinRequest: H,
								atMaxMemberCapacity: X,
								showFavoriteButton: !0
							}),
							(0, o.jsx)(i.Tooltip, {
								text: g.Z.Messages.CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
								shouldShow: !G,
								children: (e) =>
									(0, o.jsxs)('div', {
										className: v.applyButtonContainer,
										children: [
											(0, o.jsxs)(i.Button, {
												...e,
												type: 'submit',
												onClick: W,
												fullWidth: !0,
												disabled: J || !G || null == P,
												innerClassName: v.applyButtonInner,
												children: [
													X &&
														(0, o.jsx)(i.WarningIcon, {
															size: 'custom',
															color: 'white',
															width: 20,
															height: 20
														}),
													g.Z.Messages.APPLY
												]
											}),
											'' !== U &&
												(0, o.jsx)(i.Text, {
													variant: 'text-sm/normal',
													color: 'text-danger',
													children: U
												})
										]
									})
							}),
							X &&
								(0, o.jsxs)(o.Fragment, {
									children: [
										(0, o.jsx)(i.Text, {
											variant: 'text-xs/medium',
											color: 'text-warning',
											className: v.maxCapacityText,
											children: g.Z.Messages.CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS
										}),
										(0, o.jsx)('hr', { className: v.separator })
									]
								}),
							(0, o.jsx)(i.Text, {
								variant: 'text-xs/medium',
								color: 'text-muted',
								className: v.noticeText,
								children: g.Z.Messages.CLAN_APPLICATION_GDM_CONSENT
							}),
							(0, o.jsx)(i.Text, {
								variant: 'text-xs/medium',
								color: 'text-muted',
								className: v.noticeText,
								children: g.Z.Messages.MEMBER_VERIFICATION_WARNING
							})
						]
					})
				]
			}),
			(0, o.jsx)('div', {
				className: v.closeButtonContainer,
				children: (0, o.jsx)(i.Button, {
					onClick: M,
					look: i.ButtonLooks.OUTLINED,
					color: i.ButtonColors.PRIMARY,
					children: g.Z.Messages.CLOSE
				})
			})
		]
	});
};
