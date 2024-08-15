a(47120), a(757143);
var n = a(735250),
	s = a(470079),
	i = a(120356),
	r = a.n(i),
	o = a(338545),
	l = a(399606),
	u = a(481060),
	d = a(607070),
	c = a(745510),
	E = a(735336),
	_ = a(131640),
	m = a(51144),
	g = a(346585),
	f = a(81259),
	S = a(119848),
	I = a(801461),
	T = a(228168),
	N = a(689938),
	h = a(740080),
	O = a(733469);
let M = s.forwardRef(function (e, t) {
	let { style: a, value: s, placeholder: i, maxLength: o, onFocus: l, onChange: d } = e;
	return (0, n.jsx)(u.TextArea, {
		className: r()(h.userCardInput, a),
		autosize: !0,
		error: null,
		showCharacterCount: !1,
		spellCheck: !1,
		showRemainingCharacterCount: !1,
		value: s,
		placeholder: i,
		rows: 1,
		maxLength: o,
		onChange: d,
		onFocus: l,
		onKeyDown: (e) => {
			'Enter' === e.key && e.preventDefault();
		},
		inputRef: t
	});
});
t.Z = s.forwardRef(function (e, t) {
	let { user: a, error: i, formValues: v, displayProfile: P, onChangeFormValue: L, onFocusDisplayName: C, onFocusUsername: x, editState: A, footerNotice: p, usernameSuggestionLoading: R, oneClickFlow: y } = e,
		{ username: Z, globalName: U } = v,
		b = s.useRef(null),
		G = s.useRef(null),
		k = s.useMemo(() => a.merge({ discriminator: '0000' }), [a]),
		[W, D] = (0, u.useSpring)(() => ({
			opacity: 0,
			y: 5
		}));
	s.useEffect(() => {
		D({
			y: 0,
			opacity: 1,
			from: {
				y: 5,
				opacity: 0
			}
		});
	}, [D, A]),
		s.useImperativeHandle(
			t,
			() => ({
				focusDisplayName: () => {
					var e, t, a;
					null === (t = G.current) || void 0 === t || t.setSelection(0, null === (e = G.current) || void 0 === e ? void 0 : e.value.length), null === (a = G.current) || void 0 === a || a.focus();
				},
				focusUsername: () => {
					var e, t, a;
					null === (t = b.current) || void 0 === t || t.setSelection(0, null === (e = b.current) || void 0 === e ? void 0 : e.value.length), null === (a = b.current) || void 0 === a || a.focus();
				}
			}),
			[]
		);
	let j = (0, l.e7)([d.Z], () => d.Z.useReducedMotion),
		{ createMultipleConfettiAt: B } = s.useContext(c.h),
		F = null == P ? void 0 : P.getLegacyUsername();
	return (
		s.useEffect(() => {
			if (!j && A === I.Wq.PREVIEW && !!a.username.includes(I.nA))
				B(
					window.innerWidth / 2 + 150,
					0,
					{
						velocity: {
							type: 'static-random',
							minValue: {
								x: 0,
								y: -180
							},
							maxValue: {
								x: 500,
								y: 180
							}
						}
					},
					15
				),
					B(
						window.innerWidth / 2 - 150,
						0,
						{
							velocity: {
								type: 'static-random',
								minValue: {
									x: -500,
									y: -180
								},
								maxValue: {
									x: 0,
									y: 180
								}
							}
						},
						15
					);
		}, [B, A, a, j]),
		(0, n.jsxs)('div', {
			className: r()(h.userCardContainer, { [h.shinyCard]: A === I.Wq.PREVIEW }),
			children: [
				(0, n.jsxs)('div', {
					className: h.profileCard,
					children: [
						(0, n.jsx)(E.Z, {
							displayProfile: P,
							user: k,
							allowEdit: !1,
							guildId: void 0,
							profileType: T.y0.POMELO_POPOUT,
							showPremiumBadgeUpsell: !1
						}),
						(0, n.jsx)(_.tZ, {
							user: k,
							displayProfile: P,
							isMobile: !1,
							status: null,
							onClose: void 0,
							disableUserProfileLink: !0,
							hasBanner: !1,
							profileType: T.y0.POMELO_POPOUT,
							animateOnHover: !1
						}),
						A === I.Wq.PREVIEW &&
							null != F &&
							(0, n.jsx)('div', {
								className: h.legacyUsernameBadgeContainer,
								children: (0, n.jsx)(u.Tooltip, {
									position: 'top',
									text: N.Z.Messages.ORIGINALLY_KNOWN_AS.format({ legacyUsername: F }),
									spacing: 12,
									children: (e) =>
										(0, n.jsx)(u.Anchor, {
											...e,
											onClick: e.onClick,
											children: (0, n.jsx)('img', {
												className: h.legacyUsernameBadge,
												alt: '',
												src: O
											})
										})
								})
							})
					]
				}),
				A !== I.Wq.PREVIEW &&
					(0, n.jsxs)(o.animated.div, {
						style: {
							opacity: W.opacity,
							y: W.y
						},
						className: h.inputContainer,
						children: [
							A === I.Wq.EDIT_DISPLAY_NAME &&
								(0, n.jsxs)(n.Fragment, {
									children: [
										(0, n.jsx)(u.Text, {
											className: h.textPadding,
											color: 'text-muted',
											variant: 'text-sm/semibold',
											children: N.Z.Messages.DISPLAY_NAME
										}),
										(0, n.jsx)(M, {
											style: r()(h.displayNameHeight, h['heading-xl/bold']),
											value: null != U ? U : '',
											placeholder: m.ZP.getName(a),
											maxLength: I.hy,
											onChange: (e) => L({ globalName: e }),
											onFocus: C,
											ref: G
										})
									]
								}),
							(A === I.Wq.EDIT_USERNAME || A === I.Wq.SUGGESTION) &&
								(0, n.jsxs)(n.Fragment, {
									children: [
										(0, n.jsx)(u.Text, {
											className: h.textPadding,
											color: 'text-muted',
											variant: 'text-sm/semibold',
											children: N.Z.Messages.USERNAME
										}),
										(0, n.jsx)(M, {
											style: r()(h.userCardHeight, h.lowercaseUsername, h['heading-lg/medium']),
											value: null != Z ? Z : '',
											placeholder: a.username,
											maxLength: I.hy,
											onChange: (e) => L({ username: e.replace('@', '') }),
											onFocus: x,
											ref: b
										})
									]
								}),
							(0, n.jsx)('div', {
								className: h.messageContainer,
								children: (() => {
									if (null != i)
										return (0, n.jsx)(f.Z, {
											type: 'error',
											children: i
										});
									if (null != p) {
										if (A !== I.Wq.SUGGESTION)
											return (0, n.jsx)(u.Text, {
												variant: 'text-sm/normal',
												children: p
											});
										if (!R)
											return (0, n.jsx)(f.Z, {
												type: 'success',
												children: p
											});
									}
									return null == p && null == i && (A === I.Wq.EDIT_USERNAME || A === I.Wq.SUGGESTION)
										? (0, n.jsx)(S.Z, {
												username: Z,
												oneClickFlow: y
											})
										: null;
								})()
							})
						]
					}),
				A === I.Wq.PREVIEW &&
					(0, n.jsxs)('div', {
						className: h.userCard,
						children: [
							(0, n.jsx)(u.Heading, {
								color: 'header-primary',
								variant: 'heading-xl/bold',
								children: m.ZP.getName(a)
							}),
							(0, n.jsx)(u.Heading, {
								color: 'text-normal',
								variant: 'heading-lg/medium',
								children: a.username
							}),
							(0, n.jsx)(u.Text, {
								className: h.memberText,
								color: 'text-muted',
								variant: 'text-sm/medium',
								children: N.Z.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({ date: (0, g.K9)(a.id) })
							})
						]
					})
			]
		})
	);
});
