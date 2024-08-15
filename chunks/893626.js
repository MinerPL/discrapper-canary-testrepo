n.r(l),
	n.d(l, {
		default: function () {
			return M;
		}
	}),
	n(47120);
var s = n(735250),
	a = n(470079),
	t = n(658722),
	r = n.n(t),
	o = n(399606),
	u = n(481060),
	i = n(313201),
	d = n(734893),
	c = n(271383),
	_ = n(430824),
	m = n(594174),
	E = n(700785),
	I = n(580357),
	g = n(981631),
	h = n(689938),
	f = n(873410);
function M(e) {
	var l, n, t;
	let { transitionState: M, onClose: x, guildId: S, welcomeMessage: p, onSave: T } = e,
		v = (0, i.Dt)(),
		[N, O] = a.useState({ ...p }),
		A = (0, o.e7)([_.Z], () => _.Z.getGuild(S)),
		b = a.useCallback(
			(e) => {
				let l = {};
				return Promise.resolve(
					c.ZP.getMembers(S)
						.filter((n) => {
							var s, a, t;
							let o = m.default.getUser(n.userId);
							if (
								(null != o && (l[n.userId] = o),
								null == A ||
									null == o ||
									((a = A),
									(t = o),
									!(
										a.isOwner(t) ||
										E.BT({
											permission: g.Plq.ADMINISTRATOR,
											context: a,
											user: t
										}) ||
										(E.BT({
											permission: g.Plq.MANAGE_GUILD,
											context: a,
											user: t
										}) &&
											E.BT({
												permission: g.Plq.MANAGE_ROLES,
												context: a,
												user: t
											}))
									)))
							)
								return !1;
							let u = ''
								.concat(null !== (s = n.nick) && void 0 !== s ? s : '', ' ')
								.concat(null == o ? void 0 : o.username);
							return r()(e.toLowerCase(), u.toLowerCase());
						})
						.map((e) => {
							var n, s, a;
							return {
								value: e.userId,
								label:
									null !==
										(a =
											null !== (s = e.nick) && void 0 !== s
												? s
												: null === (n = l[e.userId]) || void 0 === n
													? void 0
													: n.username) && void 0 !== a
										? a
										: ''
							};
						})
				);
			},
			[S, A]
		),
		L = a.useCallback(
			(e) => {
				if (null == S || null == e) return null;
				let l = c.ZP.getMember(S, e.value);
				if (null == l) return null;
				let n = m.default.getUser(l.userId);
				if (null == n) return null;
				let a = n.getAvatarURL(S, 20);
				return (0, s.jsx)(u.AnimatedAvatar, {
					size: u.AvatarSizes.SIZE_20,
					src: a,
					'aria-hidden': !0
				});
			},
			[S]
		),
		R = a.useCallback(
			(e) => {
				let { value: l } = e;
				O((e) => ({
					...e,
					authorIds: null != l ? [l] : []
				}));
			},
			[O]
		),
		G = a.useCallback(
			(e) => {
				O((l) => ({
					...l,
					message: null != e ? e : ''
				}));
			},
			[O]
		),
		C = a.useCallback(() => {
			T(null), x();
		}, [T, x]),
		B = null !== (l = N.authorIds[0]) && void 0 !== l ? l : '',
		j = (0, o.e7)([c.ZP], () => (null != S ? c.ZP.getMember(S, B) : null)),
		Z = (0, o.e7)([m.default], () => (null != j ? m.default.getUser(j.userId) : null)),
		k =
			null !== (t = null !== (n = null == j ? void 0 : j.nick) && void 0 !== n ? n : null == Z ? void 0 : Z.username) &&
			void 0 !== t
				? t
				: '',
		D = (function (e) {
			if (null == e.message || 0 === e.message.length) return null;
			if (null == e.authorIds || 0 === e.authorIds.length)
				return e.message.length < d.ZR
					? h.Z.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR_AND_MESSAGE.format({ minLength: d.ZR })
					: h.Z.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_AUTHOR;
			return e.message.length < d.ZR
				? h.Z.Messages.WELCOME_MESSAGE_VALIDATION_ERROR_MESSAGE.format({ minLength: d.ZR })
				: null;
		})(N);
	return (0, s.jsxs)(u.ModalRoot, {
		transitionState: M,
		'aria-labelledby': v,
		children: [
			(0, s.jsxs)('div', {
				className: f.container,
				children: [
					(0, s.jsx)(u.ModalCloseButton, {
						className: f.closeButton,
						onClick: x
					}),
					(0, s.jsxs)('div', {
						className: f.formGroup,
						children: [
							(0, s.jsxs)(u.Heading, {
								variant: 'heading-md/semibold',
								color: 'header-primary',
								children: [
									h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_TITLE,
									(0, s.jsx)(I.Z, {})
								]
							}),
							(0, s.jsx)(u.Text, {
								variant: 'text-sm/normal',
								color: 'header-secondary',
								children: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_AUTHOR_EXPLAINER
							}),
							(0, s.jsx)(u.SearchableSelect, {
								value: {
									value: B,
									label: k
								},
								renderOptionPrefix: L,
								options: b,
								onChange: R,
								filter: !1
							})
						]
					}),
					(0, s.jsx)('div', { className: f.separator }),
					(0, s.jsxs)('div', {
						className: f.formGroup,
						children: [
							(0, s.jsx)(u.Heading, {
								variant: 'heading-md/semibold',
								color: 'header-primary',
								children: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_MESSAGE_INPUT_HEADER
							}),
							(0, s.jsx)(u.Text, {
								variant: 'text-sm/normal',
								color: 'header-secondary',
								children: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_DESCRIPTION_TIP.format()
							}),
							(0, s.jsx)(u.TextArea, {
								className: f.welcomeMessageTextInput,
								placeholder: h.Z.Messages.GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_WELCOME_PLACEHOLDER,
								value: N.message,
								onChange: G,
								maxLength: d.W4
							}),
							null != D
								? (0, s.jsx)(u.Text, {
										variant: 'text-xs/normal',
										color: 'text-danger',
										children: D
									})
								: null
						]
					})
				]
			}),
			(0, s.jsx)(u.ModalFooter, {
				children: (0, s.jsxs)('div', {
					className: f.footerButtons,
					children: [
						(0, s.jsx)('div', {
							className: f.__invalid_leftButtons,
							children: (0, s.jsx)(u.Button, {
								size: u.Button.Sizes.SMALL,
								look: u.Button.Looks.LINK,
								color: u.Button.Colors.RED,
								onClick: C,
								children: h.Z.Messages.REMOVE
							})
						}),
						(0, s.jsxs)('div', {
							className: f.rightButtons,
							children: [
								(0, s.jsx)(u.Button, {
									onClick: x,
									size: u.Button.Sizes.SMALL,
									look: u.Button.Looks.LINK,
									color: u.Button.Colors.PRIMARY,
									children: h.Z.Messages.CANCEL
								}),
								(0, s.jsx)(u.Button, {
									disabled: 0 === N.message.length || null != D,
									onClick: () => {
										T(N), x();
									},
									children: h.Z.Messages.SAVE
								})
							]
						})
					]
				})
			})
		]
	});
}
