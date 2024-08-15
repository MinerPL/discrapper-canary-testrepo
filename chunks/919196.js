t.d(n, {
	Z: function () {
		return A;
	}
}),
	t(47120),
	t(653041);
var i = t(735250),
	a = t(470079),
	s = t(442837),
	l = t(481060),
	r = t(668781),
	o = t(600164),
	d = t(434404),
	c = t(590157),
	u = t(270144),
	I = t(288594),
	m = t(588822),
	_ = t(496675),
	N = t(768581),
	E = t(709054),
	T = t(51144),
	h = t(486199),
	g = t(366598),
	p = t(125657),
	f = t(725875),
	C = t(981631),
	O = t(689938),
	x = t(819949);
function S(e) {
	let { application: n, guild: t, integration: a, ...s } = e;
	return (0, i.jsx)(l.ConfirmModal, {
		...s,
		header: O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_TITLE.format({ applicationName: n.name }),
		confirmText: O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE,
		cancelText: O.Z.Messages.CANCEL,
		onConfirm: () => {
			d.Z.disableIntegration(t.id, a.id).catch(() => {
				r.Z.show({
					title: O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR_TITLE,
					body: O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_ERROR
				});
			});
		},
		children: (0, i.jsx)(l.Text, {
			variant: 'text-md/normal',
			children: O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_BODY.format({ applicationName: n.name })
		})
	});
}
function A(e) {
	var n;
	let {
			guild: t,
			applicationIntegration: r,
			selectableWebhookChannels: d,
			editedWebhook: A,
			errors: R,
			canNavigate: b
		} = e,
		{ application: Z, integration: v, webhooks: M } = r,
		[L, j] = (0, s.Wu)(
			[_.Z],
			() => [_.Z.can(C.Plq.MANAGE_ROLES, t), null == Z.bot || _.Z.canManageUser(C.Plq.MANAGE_GUILD, Z.bot.id, t)],
			[Z.bot, t]
		),
		D = (0, s.e7)([_.Z], () => _.Z.can(C.Plq.MANAGE_WEBHOOKS, t), [t]),
		P = a.useCallback(() => {
			b() &&
				(0, l.openModal)((e) =>
					(0, i.jsx)(S, {
						guild: t,
						application: Z,
						integration: v,
						...e
					})
				);
		}, [Z, b, t, v]),
		B = a.useMemo(() => {
			let e = [
				{
					icon: l.ClockIcon,
					text: O.Z.Messages.INTEGRATION_ADDED_DATE.format({ timestamp: E.default.extractTimestamp(v.id) })
				}
			];
			return (
				null != v.user &&
					e.push({
						icon: l.UserIcon,
						text: O.Z.Messages.INTEGRATION_ADDED_USER.format({ user: T.ZP.getUserTag(v.user) })
					}),
				e
			);
		}, [v.id, v.user]),
		y = a.useMemo(
			() =>
				null != Z.bot
					? (0, i.jsx)(p.Z, {
							guild: t,
							applicationIntegration: r
						})
					: (0, i.jsx)(l.Card, {
							className: x.emptyCard,
							editable: !0,
							children: (0, i.jsx)(l.Text, {
								color: 'text-muted',
								variant: 'text-sm/normal',
								children: O.Z.Messages.INTEGRATIONS_APPLICATION_NO_BOT
							})
						}),
			[Z.bot, r, t]
		),
		{ applicationSubscriptionListingsShown: G } = (0, u.ZP)({
			applicationId: Z.id,
			groupListingId: Z.primarySkuId,
			guildId: t.id
		});
	return (0, i.jsxs)(i.Fragment, {
		children: [
			(0, i.jsx)(h.Z, {
				name: Z.name,
				imageSrc: null !== (n = Z.getIconURL(32)) && void 0 !== n ? n : N.pK['0'],
				details: B,
				isHeader: !0
			}),
			(null == Z ? void 0 : Z.description) != null
				? (0, i.jsx)(m.Z, {
						userBio: Z.description,
						className: x.headerDescription
					})
				: null,
			L
				? (0, i.jsx)(c.Z, {
						application: Z,
						canNavigate: b,
						guildId: t.id
					})
				: null,
			(0, i.jsx)(l.FormDivider, { className: x.headerDivider }),
			null != Z.bot
				? (0, i.jsxs)('div', {
						className: x.section,
						children: [
							(0, i.jsx)(g.Z, {
								icon: (0, i.jsx)(l.RobotIcon, {
									size: 'xs',
									color: 'currentColor'
								}),
								title: O.Z.Messages.INTEGRATIONS_APPLICATION_BOT
							}),
							y
						]
					})
				: null,
			G &&
				null != Z.primarySkuId &&
				(0, i.jsxs)('div', {
					className: x.section,
					children: [
						(0, i.jsx)(g.Z, {
							icon: (0, i.jsx)(l.TicketIcon, {
								size: 'md',
								color: 'currentColor'
							}),
							title: O.Z.Messages.INTEGRATIONS_APPLICATION_SUBSCRIPTION_TIERS
						}),
						(0, i.jsx)(I.Z, {
							applicationId: Z.id,
							applicationPrimarySkuId: Z.primarySkuId,
							guildId: t.id
						})
					]
				}),
			(0, i.jsxs)('div', {
				className: x.section,
				children: [
					(0, i.jsx)(g.Z, {
						icon: (0, i.jsx)(l.WebhookIcon, {
							size: 'md',
							color: 'currentColor'
						}),
						title: O.Z.Messages.INTEGRATIONS_APPLICATION_WEBHOOKS
					}),
					M.length > 0
						? (0, i.jsx)(f.Z, {
								webhooks: M,
								editedWebhook: A,
								selectableWebhookChannels: d,
								errors: R,
								canNavigate: b
							})
						: (0, i.jsx)(l.Card, {
								className: x.emptyCard,
								editable: !0,
								children: (0, i.jsx)(l.Text, {
									color: 'text-muted',
									variant: 'text-sm/normal',
									children: D
										? O.Z.Messages.INTEGRATIONS_APPLICATION_NO_WEBHOOKS
										: O.Z.Messages.INTEGRATIONS_APPLICATION_APPLICATION_WEBHOOK_PERMISSIONS
								})
							})
				]
			}),
			(0, i.jsx)(l.FormDivider, { className: x.headerDivider }),
			(0, i.jsxs)(o.Z, {
				className: x.section,
				justify: o.Z.Justify.BETWEEN,
				align: o.Z.Align.CENTER,
				children: [
					(0, i.jsx)(l.Text, {
						color: 'header-secondary',
						variant: 'text-sm/normal',
						children: j
							? O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_SUMMARY
							: O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE_NO_PERMISSIONS
					}),
					(0, i.jsx)(o.Z.Child, {
						grow: 0,
						shrink: 0,
						children: (0, i.jsx)(l.Button, {
							size: l.Button.Sizes.SMALL,
							color: l.Button.Colors.RED,
							look: l.Button.Looks.FILLED,
							disabled: !j,
							onClick: P,
							children: O.Z.Messages.INTEGRATIONS_APPLICATION_REMOVE
						})
					})
				]
			})
		]
	});
}
