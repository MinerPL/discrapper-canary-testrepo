t.d(s, {
	Z: function () {
		return Q;
	}
}),
	t(47120);
var n = t(735250),
	a = t(470079),
	i = t(120356),
	r = t.n(i),
	o = t(512722),
	l = t.n(o),
	c = t(442837),
	d = t(692547),
	_ = t(481060),
	E = t(230711),
	u = t(129861),
	I = t(279837),
	T = t(952306),
	S = t(299206),
	N = t(295474),
	C = t(144114),
	m = t(918505),
	A = t(332473),
	O = t(921801),
	g = t(290421),
	h = t(318661),
	p = t(80132),
	R = t(735336),
	x = t(204197),
	M = t(25990),
	f = t(594174),
	D = t(572004),
	P = t(51144),
	L = t(998502),
	b = t(695346),
	Z = t(461877),
	v = t(726985),
	j = t(981631),
	B = t(815660),
	U = t(801461),
	G = t(228168),
	F = t(689938),
	y = t(523193);
let V = L.ZP.getEnableHardwareAcceleration() ? _.AnimatedAvatar : _.Avatar;
function Y(e) {
	var s, i;
	let { className: o, user: l } = e,
		c = a.useRef(null),
		E = (0, m.o9)(),
		u = (0, A.b)(),
		I = (0, N.gS)(),
		T =
			null !== (i = null == I ? void 0 : null === (s = I.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== i
				? i
				: null,
		[S, C] = a.useState(!1);
	a.useEffect(() => {
		C(null != c.current && c.current.scrollWidth > c.current.clientWidth);
	}, [l.username]);
	let O = !l.isClaimed(),
		g = (E && !l.isPomelo() && !l.hasVerifiedEmailOrPhone()) || O,
		h = g ? F.Z.Messages.POMELO_UPDATE_DISABLED_MESSAGE : void 0;
	return (0, n.jsxs)('div', {
		className: r()(y.field, o),
		children: [
			(0, n.jsx)('div', {
				className: y.constrainedRow,
				children: (0, n.jsxs)('div', {
					className: y.usernameRow,
					children: [
						(0, n.jsx)(_.FormTitle, {
							className: y.fieldTitle,
							children: F.Z.Messages.USER_SETTINGS_LABEL_USERNAME
						}),
						(0, n.jsxs)('div', {
							className: y.usernameInnerRow,
							ref: c,
							children: [
								(0, n.jsx)(_.Text, {
									tag: 'span',
									color: 'header-primary',
									variant: 'text-md/normal',
									children: l.username
								}),
								!l.isPomelo() &&
									(0, n.jsxs)(_.Text, {
										tag: 'span',
										color: 'header-secondary',
										variant: 'text-md/normal',
										children: ['#', l.discriminator]
									})
							]
						})
					]
				})
			}),
			u &&
				(0, n.jsx)('div', {
					className: y.pomeloWarning,
					children: (0, n.jsx)(_.Tooltip, {
						text: F.Z.Messages.ACTION_NEEDED,
						children: (e) =>
							(0, n.jsx)(_.CircleWarningIcon, {
								size: 'custom',
								width: 20,
								height: 20,
								...e,
								color: d.Z.colors.STATUS_WARNING.css
							})
					})
				}),
			null != T &&
				(0, n.jsx)('div', {
					className: y.pomeloWarning,
					children: (0, n.jsx)(_.Tooltip, {
						text: T,
						'aria-label': !1,
						children: (e) =>
							(0, n.jsx)(_.CircleWarningIcon, {
								size: 'custom',
								width: 20,
								height: 20,
								...e,
								color: d.Z.colors.STATUS_WARNING.css
							})
					})
				}),
			(0, n.jsx)(_.Tooltip, {
				text: h,
				children: (e) =>
					(0, n.jsx)(_.Button, {
						...e,
						disabled: g,
						size: _.Button.Sizes.SMALL,
						className: y.fieldButton,
						color: _.Button.Colors.PRIMARY,
						'aria-label': F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_USERNAME_A11Y_LABEL,
						onClick: () =>
							(0, _.openModalLazy)(async () => {
								if (u) {
									let { default: e } = await t.e('85342').then(t.bind(t, 193049));
									return (s) =>
										(0, n.jsx)(e, {
											source: U.Kq.USER_SETTINGS_EDIT,
											...s
										});
								}
								{
									let { default: e } = await Promise.all([t.e('75492'), t.e('84956'), t.e('42758')]).then(
										t.bind(t, 2702)
									);
									return (s) => (0, n.jsx)(e, { ...s });
								}
							}),
						children: S ? F.Z.Messages.DISAPPROVAL : F.Z.Messages.EDIT
					})
			})
		]
	});
}
function w(e) {
	var s, t;
	let { user: i, className: o } = e,
		l = (0, N.gS)(),
		c =
			null !== (t = null == l ? void 0 : null === (s = l.nick) || void 0 === s ? void 0 : s[0]) && void 0 !== t
				? t
				: null,
		E = P.ZP.getGlobalName(i),
		u = a.useRef(null),
		[I, T] = a.useState(!1);
	return (
		a.useEffect(() => {
			T(null != u.current && u.current.scrollWidth > u.current.clientWidth);
		}, [E]),
		(0, n.jsxs)('div', {
			className: r()(y.field, o),
			children: [
				(0, n.jsx)('div', {
					className: y.constrainedRow,
					children: (0, n.jsxs)('div', {
						className: y.usernameRow,
						children: [
							(0, n.jsx)(_.FormTitle, {
								className: y.fieldTitle,
								children: F.Z.Messages.DISPLAY_NAME
							}),
							(0, n.jsx)('div', {
								className: y.usernameInnerRow,
								ref: u,
								children: (0, n.jsx)(_.Text, {
									tag: 'span',
									color: 'header-primary',
									variant: 'text-md/normal',
									children: null == E ? F.Z.Messages.USER_SETTINGS_NO_DISPLAYNAME_PLACEHOLDER : E
								})
							})
						]
					})
				}),
				null != c &&
					(0, n.jsx)('div', {
						className: y.pomeloWarning,
						children: (0, n.jsx)(_.Tooltip, {
							text: c,
							'aria-label': !1,
							children: (e) =>
								(0, n.jsx)(_.CircleWarningIcon, {
									size: 'custom',
									width: 20,
									height: 20,
									...e,
									color: d.Z.colors.STATUS_WARNING.css
								})
						})
					}),
				(0, n.jsx)(_.Button, {
					className: y.fieldButton,
					size: _.Button.Sizes.SMALL,
					color: _.Button.Colors.PRIMARY,
					'aria-label': F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_DISPLAYNAME_A11Y_LABEL,
					onClick: z,
					children: I ? F.Z.Messages.DISAPPROVAL : F.Z.Messages.EDIT
				})
			]
		})
	);
}
function H(e) {
	let { text: s, censor: t, revealLabel: i, hideLabel: r } = e,
		[o, l] = a.useState(!1),
		c = o ? s : t(s);
	return (0, n.jsxs)(n.Fragment, {
		children: [
			c,
			(0, n.jsx)(_.Button, {
				look: _.Button.Looks.LINK,
				size: _.Button.Sizes.MIN,
				color: _.Button.Colors.LINK,
				'aria-label': o ? r : i,
				onClick: () => l(!o),
				children: o ? F.Z.Messages.HIDE : F.Z.Messages.REVEAL
			})
		]
	});
}
function k(e) {
	let s,
		{ className: a, user: i } = e;
	if (i.isClaimed()) {
		if (null == i.email)
			s = {
				buttonText: F.Z.Messages.ADD,
				buttonAriaLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_EMAIL_A11Y_LABEL,
				buttonColor: _.Button.Colors.PRIMARY,
				valueMessage: F.Z.Messages.USER_SETTINGS_NO_EMAIL_PLACEHOLDER,
				handleClick: () =>
					(0, _.openModalLazy)(async () => {
						let { default: e } = await Promise.all([t.e('9343'), t.e('12409')]).then(t.bind(t, 642298));
						return (s) => (0, n.jsx)(e, { ...s });
					})
			};
		else {
			let { email: e } = i;
			s = {
				buttonText: F.Z.Messages.EDIT,
				buttonAriaLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_EMAIL_A11Y_LABEL,
				buttonColor: _.Button.Colors.PRIMARY,
				valueMessage: (0, n.jsx)(H, {
					text: e,
					censor: Z.E,
					revealLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_EMAIL_A11Y_LABEL,
					hideLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_EMAIL_A11Y_LABEL
				}),
				handleClick: () =>
					(0, _.openModalLazy)(async () => {
						let { default: e } = await Promise.all([t.e('9343'), t.e('12409')]).then(t.bind(t, 642298));
						return (s) => (0, n.jsx)(e, { ...s });
					})
			};
		}
	} else
		s = {
			buttonText: F.Z.Messages.CLAIM_ACCOUNT_SHORT,
			buttonAriaLabel: F.Z.Messages.CLAIM_ACCOUNT_SHORT,
			buttonColor: _.Button.Colors.BRAND,
			valueMessage: F.Z.Messages.USER_SETTINGS_ADD_EMAIL_CLAIM,
			handleClick: () => T.Z.openClaimAccountModal()
		};
	return (0, n.jsxs)('div', {
		className: r()(y.field, a),
		children: [
			(0, n.jsx)('div', {
				className: y.constrainedRow,
				children: (0, n.jsxs)('div', {
					children: [
						(0, n.jsx)(_.FormTitle, {
							className: y.fieldTitle,
							children: F.Z.Messages.USER_SETTINGS_LABEL_EMAIL
						}),
						(0, n.jsx)('div', {
							children: (0, n.jsx)(_.Text, {
								tag: 'span',
								color: 'header-primary',
								variant: 'text-md/normal',
								children: s.valueMessage
							})
						})
					]
				})
			}),
			(0, n.jsx)(_.Button, {
				className: y.fieldButton,
				size: _.Button.Sizes.SMALL,
				color: _.Button.Colors.PRIMARY,
				'aria-label': s.buttonAriaLabel,
				onClick: s.handleClick,
				children: s.buttonText
			})
		]
	});
}
function W(e) {
	let s,
		{ className: a, user: i } = e;
	if (!i.isClaimed()) return null;
	let { phone: o, email: l } = i,
		c = null != o;
	return (
		(s = c
			? (0, n.jsx)(H, {
					text: o,
					censor: Z.n,
					revealLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_REVEAL_PHONE_A11Y_LABEL,
					hideLabel: F.Z.Messages.USER_SETTINGS_ACCOUNT_HIDE_PHONE_A11Y_LABEL
				})
			: F.Z.Messages.USER_SETTINGS_NO_PHONE_PLACEHOLDER),
		(0, n.jsxs)('div', {
			className: r()(y.field, a),
			children: [
				(0, n.jsx)('div', {
					className: y.constrainedRow,
					children: (0, n.jsxs)('div', {
						children: [
							(0, n.jsx)(_.FormTitle, {
								className: y.fieldTitle,
								children: F.Z.Messages.USER_SETTINGS_LABEL_PHONE_NUMBER
							}),
							(0, n.jsx)('div', {
								children: (0, n.jsx)(_.Text, {
									tag: 'span',
									color: 'header-primary',
									variant: 'text-md/normal',
									children: s
								})
							})
						]
					})
				}),
				(0, n.jsxs)('div', {
					className: y.fieldButtonList,
					children: [
						c && null != l
							? (0, n.jsx)(_.Button, {
									className: r()(y.fieldButton, y.removeButton),
									size: _.Button.Sizes.SMALL,
									look: _.Button.Looks.LINK,
									color: _.Button.Colors.PRIMARY,
									'aria-label': F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_A11Y_LABEL,
									onClick: function () {
										(0, _.openModal)((e) =>
											(0, n.jsx)(I.default, {
												...e,
												title: F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_NUMBER_TITLE,
												children: i.hasFlag(j.xW$.MFA_SMS)
													? F.Z.Messages.USER_SETTINGS_ACCOUNT_REMOVE_PHONE_SMS_BACKUP_WARNING
													: void 0,
												actionText: F.Z.Messages.REMOVE,
												handleSubmit: (e) => C.Z.removePhone(e, C.L.USER_SETTINGS_UPDATE)
											})
										);
									},
									children: F.Z.Messages.REMOVE
								})
							: null,
						(0, n.jsx)(_.Button, {
							className: y.fieldButton,
							size: _.Button.Sizes.SMALL,
							color: _.Button.Colors.PRIMARY,
							'aria-label': c
								? F.Z.Messages.USER_SETTINGS_ACCOUNT_EDIT_PHONE_A11Y_LABEL
								: F.Z.Messages.USER_SETTINGS_ACCOUNT_ADD_PHONE_A11Y_LABEL,
							onClick: function () {
								(0, _.openModalLazy)(
									async () => {
										let { default: e } = await Promise.resolve().then(t.bind(t, 607018));
										return (s) =>
											(0, n.jsx)(e, {
												reason: C.L.USER_SETTINGS_UPDATE,
												...s
											});
									},
									{ modalKey: B.M }
								);
							},
							children: c ? F.Z.Messages.EDIT : F.Z.Messages.ADD
						})
					]
				})
			]
		})
	);
}
function K(e) {
	let { user: s } = e,
		t = (0, S.Z)({
			id: s.id,
			label: F.Z.Messages.COPY_ID_USER
		});
	return b.Sb.useSetting() && D.wS
		? (0, n.jsx)(_.Popout, {
				renderPopout: (e) => {
					let { closePopout: s } = e;
					return (0, n.jsx)(_.Menu, {
						onClose: s,
						onSelect: void 0,
						navId: 'copy-id',
						'aria-label': F.Z.Messages.USER_MORE_ACTIONS_MENU_LABEL,
						children: t
					});
				},
				children: (e) =>
					(0, n.jsx)(_.Clickable, {
						...e,
						className: y.overflowMenuButton,
						'aria-label': F.Z.Messages.ACTIONS,
						children: (0, n.jsx)(_.MoreHorizontalIcon, {
							size: 'md',
							color: 'currentColor',
							className: y.overflowMenuIcon
						})
					})
			})
		: null;
}
function z() {
	E.Z.setSection(j.oAB.PROFILE_CUSTOMIZATION);
}
function Q() {
	var e;
	let s = (0, c.e7)([f.default], () => {
			let e = f.default.getCurrentUser();
			return l()(null != e, 'UserSettingsAccountProfileCard: currentUser cannot be undefined'), e;
		}),
		t = (0, h.ZP)(s.id),
		a = (0, g.Z)(t),
		i = b.co.useSetting(),
		r = (0, c.e7)([M.Z], () => M.Z.getErrors()),
		o = null == r ? void 0 : null === (e = r.avatar) || void 0 === e ? void 0 : e[0],
		{ avatarSrc: d, avatarDecorationSrc: E } = (0, x.Z)({
			user: s,
			size: _.AvatarSizes.SIZE_80
		});
	return (0, n.jsxs)('div', {
		className: y.accountProfileCard,
		children: [
			(0, n.jsx)(R.Z, {
				displayProfile: t,
				user: s,
				allowEdit: !1,
				guildId: void 0,
				profileType: G.y0.SETTINGS
			}),
			(0, n.jsxs)('div', {
				className: y.userInfo,
				children: [
					(0, n.jsx)(V, {
						className: y.avatar,
						src: d,
						avatarDecoration: E,
						status: i,
						size: _.AvatarSizes.SIZE_80,
						'aria-label': s.username
					}),
					(0, n.jsxs)('div', {
						children: [
							(0, n.jsxs)('div', {
								className: y.profileCardUsernameRow,
								children: [
									(0, n.jsx)(u.Z, {
										user: s,
										className: y.userTag,
										discriminatorClass: y.discriminator
									}),
									(0, n.jsx)(K, { user: s })
								]
							}),
							(0, n.jsx)(p.Z, {
								badges: a,
								className: y.badgeList,
								badgeClassName: y.badge
							})
						]
					}),
					(0, n.jsx)(_.Button, {
						onClick: z,
						size: _.Button.Sizes.SMALL,
						children: F.Z.Messages.USER_SETTINGS_EDIT_USER_PROFILE
					})
				]
			}),
			(0, n.jsxs)('div', {
				className: y.background,
				children: [
					null != o
						? (0, n.jsx)(_.Text, {
								className: y.avatarError,
								variant: 'text-xs/normal',
								color: 'text-danger',
								children: o
							})
						: null,
					(0, n.jsxs)('div', {
						className: y.fieldList,
						children: [
							(0, n.jsx)(O.F, {
								setting: v.s6.ACCOUNT_DISPLAY_NAME,
								children: (0, n.jsx)(w, {
									className: y.fieldSpacerBottom,
									user: s
								})
							}),
							(0, n.jsx)(O.F, {
								setting: v.s6.ACCOUNT_USERNAME,
								children: (0, n.jsx)(Y, { user: s })
							}),
							(0, n.jsx)(O.F, {
								setting: v.s6.ACCOUNT_EMAIL,
								children: (0, n.jsx)(k, {
									className: y.fieldSpacer,
									user: s
								})
							}),
							(0, n.jsx)(O.F, {
								setting: v.s6.ACCOUNT_PHONE_NUMBER,
								children: (0, n.jsx)(W, {
									className: y.fieldSpacer,
									user: s
								})
							})
						]
					})
				]
			})
		]
	});
}
