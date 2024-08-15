t.r(n),
	t.d(n, {
		default: function () {
			return M;
		}
	}),
	t(47120);
var s = t(735250),
	o = t(470079),
	i = t(392711),
	l = t.n(i),
	a = t(442837),
	r = t(481060),
	d = t(706371),
	u = t(563115),
	c = t(313201),
	m = t(661824),
	N = t(984933),
	_ = t(430824),
	O = t(823379),
	h = t(402148),
	I = t(570961),
	v = t(208665),
	E = t(460117),
	x = t(290511),
	j = t(689938),
	R = t(995581);
function M(e) {
	let { transitionState: n, onClose: t, onSave: i, onDelete: _, option: O, guild: h, prompt: M, index: g } = e,
		P = (0, c.Dt)(),
		p = (0, a.e7)([N.ZP], () => N.ZP.getDefaultChannel(h.id)),
		[B, A] = o.useState(() => {
			var e;
			return null !== (e = null == O ? void 0 : O.emoji) && void 0 !== e ? e : null;
		}),
		[C, L] = o.useState(() => {
			var e;
			return null !== (e = null == O ? void 0 : O.title) && void 0 !== e ? e : '';
		}),
		[Z, f] = o.useState(() => {
			var e;
			return null !== (e = null == O ? void 0 : O.description) && void 0 !== e ? e : '';
		}),
		[D, S] = o.useState(() => {
			var e;
			return new Set(null !== (e = null == O ? void 0 : O.channelIds) && void 0 !== e ? e : []);
		}),
		[H, b] = o.useState(() => {
			var e;
			return new Set(null !== (e = null == O ? void 0 : O.roleIds) && void 0 !== e ? e : []);
		}),
		[k, G] = o.useState({}),
		U = o.useRef(null);
	return (
		o.useLayoutEffect(() => {
			var e;
			return null === (e = U.current) || void 0 === e ? void 0 : e.focus();
		}, []),
		(0, s.jsxs)(r.ModalRoot, {
			transitionState: n,
			'aria-labelledby': P,
			children: [
				(0, s.jsxs)('div', {
					className: R.container,
					children: [
						(0, s.jsx)(r.ModalCloseButton, {
							className: R.closeButton,
							onClick: t
						}),
						(0, s.jsx)(r.Text, {
							className: R.questionNumber,
							variant: 'text-xs/semibold',
							color: 'text-muted',
							children: j.Z.Messages.ONBOARDING_PROMPT_OPTION_QUESTION_NUMBER.format({ index: g + 1 })
						}),
						(0, s.jsx)(r.Heading, {
							id: P,
							className: R.header,
							variant: 'heading-lg/semibold',
							children: null != M.title && M.title.length > 0 ? M.title : j.Z.Messages.ONBOARDING_PROMPT_DEFAULT_TITLE
						}),
						(0, s.jsx)(r.Heading, {
							className: R.nameHeader,
							variant: 'heading-md/semibold',
							children: j.Z.Messages.ONBOARDING_PROMPT_OPTION_NAME_HEADER
						}),
						(0, s.jsx)(r.TextInput, {
							inputRef: U,
							placeholder: j.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_PLACEHOLDER,
							value: C,
							onChange: (e) => L(e),
							maxLength: x.NE,
							autoFocus: !0
						}),
						(0, s.jsx)(r.InputError, { error: k.title }),
						(0, s.jsx)(r.TextInput, {
							className: R.descriptionInput,
							placeholder: j.Z.Messages.ONBOARDING_PROMPT_OPTION_DESCRIPTION_PLACEHOLDER,
							value: Z,
							onChange: (e) => f(e),
							maxLength: x.NO
						}),
						(0, s.jsx)(m.Z, { className: R.divider }),
						(0, s.jsx)(r.Heading, {
							className: R.rolesHeader,
							variant: 'heading-md/semibold',
							children: j.Z.Messages.ONBOARDING_PROMPT_OPTION_ROLES_CHANNELS_HEADER
						}),
						(0, s.jsx)(d.Z, {
							guildId: h.id,
							selectedChannelIds: D,
							placeholder: j.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_CHANNEL_PLACEHOLDER,
							onChange: S,
							helperText: j.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS,
							className: R.searchInput
						}),
						(0, s.jsx)(u.Z, {
							guildId: h.id,
							selectedRoleIds: H,
							disableEveryoneRole: !0,
							placeholder: j.Z.Messages.GUILD_AUTOMOD_EXEMPTION_SEARCH_ROLE_PLACEHOLDER,
							onChange: b,
							helperText: j.Z.Messages.ONBOARDING_PROMPT_NO_PRIVATE_CHANNELS_SUBTEXT,
							className: R.searchInput
						}),
						null == k.roles ? null : (0, s.jsx)(r.InputError, { error: k.roles }),
						(0, s.jsx)(T, {
							guild: h,
							roleIds: H
						}),
						(0, s.jsx)(m.Z, { className: R.divider }),
						(0, s.jsxs)('div', {
							className: R.emojiQuestionContainer,
							children: [
								(0, s.jsxs)('div', {
									className: R.emojiQuestionText,
									children: [
										(0, s.jsx)(r.Heading, {
											variant: 'heading-md/semibold',
											children: j.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_HEADER
										}),
										(0, s.jsx)(r.Text, {
											variant: 'text-sm/normal',
											color: 'text-muted',
											children: j.Z.Messages.ONBOARDING_PROMPT_OPTION_EMOJI_SUBHEADER
										})
									]
								}),
								(0, s.jsx)(E.Z, {
									emoji: B,
									setEmoji: A,
									channel: p
								})
							]
						})
					]
				}),
				(0, s.jsx)(r.ModalFooter, {
					children: (0, s.jsxs)('div', {
						className: R.footerButtons,
						children: [
							(0, s.jsx)('div', {
								className: R.removeButton,
								children: (0, s.jsx)(r.Button, {
									size: r.Button.Sizes.SMALL,
									look: r.Button.Looks.LINK,
									color: r.Button.Colors.RED,
									onClick: () => {
										_(), t();
									},
									children: j.Z.Messages.REMOVE
								})
							}),
							(0, s.jsxs)('div', {
								className: R.rightButtons,
								children: [
									(0, s.jsx)(r.Button, {
										onClick: t,
										size: r.Button.Sizes.SMALL,
										look: r.Button.Looks.LINK,
										color: r.Button.Colors.PRIMARY,
										children: j.Z.Messages.CANCEL
									}),
									(0, s.jsx)(r.Button, {
										onClick: () => {
											var e;
											let n = {
													id: null !== (e = null == O ? void 0 : O.id) && void 0 !== e ? e : ''.concat(Date.now()),
													title: C,
													description: Z,
													channelIds: Array.from(D).sort(),
													roleIds: Array.from(H).sort(),
													emoji: null == B ? void 0 : B
												},
												s = (function (e, n, t, s) {
													let o = {};
													s.title.length <= 0 && (o.title = j.Z.Messages.ONBOARDING_PROMPT_OPTION_TITLE_REQUIRED);
													let i = (0, I.en)(e, n, t, s);
													return null != i && (o.roles = i), o;
												})(h, v.Z.editedOnboardingPrompts, M, n);
											G(s), l().isEmpty(s) && (i(n), t());
										},
										children: j.Z.Messages.SAVE
									})
								]
							})
						]
					})
				})
			]
		})
	);
}
function T(e) {
	let { guild: n, roleIds: t } = e,
		o = (0, a.e7)([_.Z], () => _.Z.getRoles(n.id)),
		i = Array.from(t)
			.map((e) => o[e])
			.filter(O.lm)
			.find(h.F);
	return null == i
		? null
		: (0, s.jsx)('div', {
				className: R.notice,
				children: (0, s.jsxs)('div', {
					className: R.noticeMessage,
					children: [
						(0, s.jsx)(r.CircleWarningIcon, {
							size: 'custom',
							width: 20,
							height: 20,
							color: 'currentColor',
							className: R.noticeIcon
						}),
						(0, s.jsx)(r.Text, {
							variant: 'text-sm/normal',
							children: j.Z.Messages.ROLE_PROMPT_ROLE_IS_POWERFUL.format({ permissions: (0, h.i)(n, i).join(', ') })
						})
					]
				})
			});
}
