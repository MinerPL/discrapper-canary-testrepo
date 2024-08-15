a.r(s),
	a.d(s, {
		default: function () {
			return x;
		}
	}),
	a(47120);
var r = a(735250),
	t = a(470079),
	n = a(990547),
	i = a(481060),
	o = a(37234),
	l = a(700582),
	c = a(213609),
	d = a(600164),
	_ = a(434404),
	R = a(706454),
	E = a(768581),
	u = a(5192),
	m = a(51144),
	N = a(981631),
	T = a(72766),
	f = a(689938),
	I = a(122284);
let S = function () {
	let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.default.locale;
	return 'https://'.concat(N.xr4, '/hc/').concat(e.toLowerCase(), '/requests/new?ticket_form_id=360000168511');
};
function x(e) {
	let { guild: s, toUser: R, fromUser: x, onClose: A, transitionState: h } = e,
		[p, O] = t.useState(!1),
		F = s.hasFeature(N.oNc.VERIFIED) || s.hasFeature(N.oNc.PARTNERED),
		M = F ? f.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_PAUSED : null,
		b = F ? f.Z.Messages.TRANSFER_OWNERSHIP_PROTECTED_GUILD_LINK_PAUSED.format({ ticketUrl: S() }) : null,
		g = s.hasFeature(N.oNc.CREATOR_MONETIZABLE) || s.hasFeature(N.oNc.CREATOR_MONETIZABLE_PROVISIONAL);
	async function C(e) {
		await _.Z.transferOwnership(s.id, R.id, T.X.EMAIL, e);
	}
	async function P() {
		await _.Z.sendTransferOwnershipPincode(s.id, !0);
	}
	async function Z(e) {
		e.preventDefault(), A();
		try {
			x.mfaEnabled || null == x.email
				? (await _.Z.transferOwnership(s.id, R.id, x.mfaEnabled ? T.X.MFA : null), (0, o.xf)())
				: (await _.Z.sendTransferOwnershipPincode(s.id),
					(0, i.openModalLazy)(async () => {
						let { default: e } = await a.e('94566').then(a.bind(a, 965072));
						return (s) =>
							(0, r.jsx)(e, {
								...s,
								onFormSubmit: C,
								onResend: P,
								onSuccess: o.xf,
								headerText: f.Z.Messages.TRANSFER_OWNERSHIP,
								confirmButtonText: f.Z.Messages.TRANSFER_OWNERSHIP,
								confirmButtonColor: i.Button.Colors.RED,
								impressionName: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP_CONFIRM_EMAIL_CODE
							});
					}));
		} catch (e) {
			e.body.code === N.evJ.NEW_OWNER_INELIGIBLE_FOR_SERVER_SUBSCRIPTION &&
				(0, i.openModal)((e) =>
					(0, r.jsx)(i.ConfirmModal, {
						...e,
						header: f.Z.Messages.TRANSFER_OWNERSHIP_FAILURE_MODAL_TITLE,
						confirmText: f.Z.Messages.GOT_IT,
						confirmButtonColor: i.Button.Colors.BRAND,
						children: (0, r.jsx)(i.Text, {
							variant: 'text-md/normal',
							children: f.Z.Messages.SERVER_SUBSCRIPTION_OWNERSHIP_TRANSFER_FAILURE_MODAL_BODY.format({
								server_subscription_owner_transfer_article: N.T23
							})
						})
					})
				);
		}
	}
	(0, c.Z)({
		type: n.ImpressionTypes.MODAL,
		name: n.ImpressionNames.GUILD_TRANSFER_OWNERSHIP
	});
	let L = u.ZP.getNickname(s.id, void 0, R),
		j = R.hasAvatarForGuild(s.id),
		v = () =>
			(0, r.jsxs)('span', {
				className: I.guildTransfer,
				children: [
					null != s.icon
						? (0, r.jsx)(i.Avatar, {
								src: E.ZP.getGuildIconURL({
									id: s.id,
									icon: s.icon,
									size: 16
								}),
								size: i.AvatarSizes.SIZE_16,
								className: I.miniGuildIcon,
								'aria-hidden': !0
							})
						: null,
					(0, r.jsx)(i.Text, {
						className: I.guildName,
						variant: 'text-sm/bold',
						children: s.toString()
					})
				]
			});
	return (0, r.jsx)(i.ModalRoot, {
		transitionState: h,
		children: (0, r.jsxs)('form', {
			onSubmit: Z,
			children: [
				(0, r.jsx)(i.ModalHeader, {
					separator: !1,
					children: (0, r.jsx)(i.Heading, {
						variant: 'heading-lg/semibold',
						className: I.header,
						children: f.Z.Messages.TRANSFER_OWNERSHIP
					})
				}),
				(0, r.jsxs)(i.ModalContent, {
					children: [
						(0, r.jsx)(i.FormText, {
							type: i.FormText.Types.DESCRIPTION,
							className: I.subHeader,
							children:
								null != L || j
									? f.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_WITH_AKA_V2.format({
											GuildHook: v,
											user: (0, m.W5)(R),
											AKAHook: function () {
												return (0, r.jsxs)('span', {
													className: I.akaTransfer,
													children: [
														(0, r.jsx)(i.TextBadge, {
															text: f.Z.Messages.AKA,
															disableColor: !0,
															className: I.akaBadge
														}),
														j
															? (0, r.jsx)(i.Avatar, {
																	src: R.getAvatarURL(s.id, 16, !0),
																	size: i.AvatarSizes.SIZE_16,
																	className: I.miniAvatar,
																	'aria-hidden': !0
																})
															: null,
														(0, r.jsx)(i.Text, {
															className: I.nickname,
															variant: 'text-sm/normal',
															children: null != L ? L : m.ZP.getName(R)
														})
													]
												});
											}
										})
									: f.Z.Messages.TRANSFER_OWNERSHIP_TO_USER_V2.format({
											GuildHook: v,
											user: (0, m.W5)(R)
										})
						}),
						(0, r.jsxs)(d.Z, {
							className: I.fromToWrapper,
							justify: d.Z.Justify.CENTER,
							children: [
								(0, r.jsx)('div', {
									className: I.from,
									children: (0, r.jsx)(l.Z, {
										user: x,
										size: i.AvatarSizes.SIZE_80
									})
								}),
								(0, r.jsx)('div', {
									className: I.to,
									children: (0, r.jsx)(l.Z, {
										user: R,
										size: i.AvatarSizes.SIZE_80
									})
								})
							]
						}),
						g &&
							(0, r.jsx)(i.FormText, {
								type: i.FormText.Types.DESCRIPTION,
								className: I.roleSubscriptionText,
								children: f.Z.Messages.TRANSFER_OWNERSHIP_SERVER_SUBSCRIPTION_GUILD.format({
									server_subscription_owner_transfer_article: N.T23
								})
							}),
						(0, r.jsx)(i.FormSwitch, {
							disabled: F,
							tooltipNote: M,
							hideBorder: !0,
							value: p,
							onChange: function (e) {
								O(e);
							},
							children: (0, r.jsx)(i.FormText, {
								type: i.FormText.Types.DESCRIPTION,
								children: f.Z.Messages.TRANSFER_OWNERSHIP_ACKNOWLEDGE.format({ username: (0, m.W5)(R) })
							})
						}),
						(0, r.jsx)(i.FormText, {
							className: I.protectedText,
							type: i.FormText.Types.DEFAULT,
							children: b
						})
					]
				}),
				(0, r.jsxs)(i.ModalFooter, {
					children: [
						(0, r.jsx)(i.Button, {
							type: 'submit',
							disabled: !p,
							color: i.Button.Colors.RED,
							children: f.Z.Messages.TRANSFER_OWNERSHIP
						}),
						(0, r.jsx)(i.Button, {
							look: i.Button.Looks.LINK,
							color: i.Button.Colors.PRIMARY,
							onClick: A,
							children: f.Z.Messages.CANCEL
						})
					]
				})
			]
		})
	});
}
