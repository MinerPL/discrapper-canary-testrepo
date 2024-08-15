t.d(s, {
	Z: function () {
		return f;
	}
}),
	t(47120);
var n = t(735250),
	i = t(470079),
	l = t(120356),
	a = t.n(l),
	r = t(442837),
	o = t(692547),
	d = t(481060),
	c = t(239091),
	u = t(92114),
	h = t(225433),
	N = t(933557),
	S = t(775666),
	E = t(471445),
	g = t(592125),
	m = t(324067),
	_ = t(699516),
	T = t(9156),
	x = t(594174),
	I = t(823379),
	O = t(621600),
	C = t(423589),
	M = t(221259),
	p = t(113449),
	v = t(686660),
	L = t(958648),
	j = t(569658),
	Z = t(981631),
	A = t(689938),
	R = t(651172);
function f(e) {
	let { guildId: s, requestScrollToBottom: t } = e,
		i = (0, r.Wu)([g.Z, T.ZP], () =>
			(0, C.OD)(T.ZP.getChannelOverrides(s), {
				ignoreMute: !0,
				ignoreUnreadSetting: !1,
				ignoreNotificationSetting: !1
			})
				.map((e) => g.Z.getChannel(e))
				.filter(I.lm)
		);
	(0, L.Z)(i, () => t());
	let l = (0, r.e7)([m.Z], () => m.Z.getCategories(s)),
		a = i.map((e, s) =>
			(0, n.jsxs)(
				'div',
				{
					className: R.channelRow,
					children: [
						(0, n.jsx)(
							b,
							{
								channel: e,
								categories: l
							},
							e.id
						),
						s < i.length - 1 && (0, n.jsx)('div', { className: R.separator })
					]
				},
				e.id
			)
		);
	return (0, n.jsxs)('div', {
		children: [
			(0, n.jsx)(j.Z, {
				guildId: s,
				onSelected: (e) => {
					if (null != i.find((s) => s.id === e)) return;
					let t = g.Z.getChannel(e);
					null != t &&
						u.Z.updateChannelOverrideSettings(
							s,
							e,
							{
								muted: !1,
								message_notifications: T.ZP.resolvedMessageNotifications(t),
								flags: (0, p.pq)(T.ZP.getChannelIdFlags(t.guild_id, t.id), T.ZP.resolveUnreadSetting(t))
							},
							O.ZB.OverrideCreated
						);
				}
			}),
			a.length > 0 &&
				(0, n.jsxs)('div', {
					className: R.table,
					children: [
						(0, n.jsxs)('div', {
							className: R.row,
							children: [
								(0, n.jsx)(d.Text, {
									variant: 'text-xs/bold',
									color: 'text-muted',
									className: R.rowName,
									children: A.Z.Messages.CHANNEL_OR_CATEGORY
								}),
								(0, n.jsx)(d.Text, {
									variant: 'text-xs/bold',
									color: 'text-muted',
									className: R.rowOption,
									children: A.Z.Messages.NOTIFICATION_PRESET_1
								}),
								(0, n.jsx)(d.Text, {
									variant: 'text-xs/bold',
									color: 'text-muted',
									className: R.rowOption,
									children: A.Z.Messages.NOTIFICATION_PRESET_2
								}),
								(0, n.jsx)(d.Text, {
									variant: 'text-xs/bold',
									color: 'text-muted',
									className: R.rowOption,
									children: A.Z.Messages.NOTIFICATION_PRESET_3
								}),
								(0, n.jsx)(d.Text, {
									variant: 'text-xs/bold',
									color: 'text-muted',
									className: R.rowOption,
									children: A.Z.Messages.NOTIFICATION_PRESET_CUSTOM
								})
							]
						}),
						a.length > 0 &&
							(0, n.jsx)('div', {
								className: R.channels,
								children: a
							})
					]
				})
		]
	});
}
function b(e) {
	let { channel: s, categories: t } = e,
		l = (0, d.useToken)(o.Z.unsafe_rawColors.GREEN_360).hex(),
		u = (0, r.e7)([g.Z], () => g.Z.getChannel(null == s ? void 0 : s.parent_id)),
		m = (0, M.ZA)(s),
		[T, I] = i.useState(!1);
	if (null == s) return null;
	let O = A.Z.Messages.NO_CATEGORY,
		C = (0, E.KS)(s);
	s.type === Z.d4z.GUILD_CATEGORY && null != s.guild_id && '' !== s.guild_id ? (O = A.Z.Messages.NUM_CHANNELS.format({ num: null != t[s.id] ? t[s.id].length : 0 })) : null != u && (O = A.Z.Messages.IN_CATEGORY.format({ categoryName: (0, N.F6)(u, x.default, _.Z) }));
	let p = T ? v.s8.CUSTOM : m.preset;
	return (0, n.jsx)('div', {
		children: (0, n.jsxs)('div', {
			className: a()(R.row, R.channel),
			children: [
				(0, n.jsxs)('div', {
					className: a()(R.rowName, R.modColor),
					children: [
						null != C
							? (0, n.jsx)(C, {
									size: 'custom',
									color: 'currentColor',
									height: 20,
									width: 20,
									className: R.icon
								})
							: null,
						(0, n.jsxs)('div', {
							children: [
								(0, n.jsx)(d.Text, {
									variant: 'text-md/semibold',
									className: R.modColor,
									children: (0, N.F6)(s, x.default, _.Z)
								}),
								(0, n.jsx)(d.Text, {
									variant: 'text-xs/medium',
									className: R.modColor,
									children: O
								})
							]
						})
					]
				}),
				(0, n.jsx)('div', {
					className: R.rowOption,
					children: (0, n.jsx)('div', {
						children: (0, n.jsx)(d.Checkbox, {
							color: l,
							shape: d.Checkbox.Shapes.ROUND,
							type: d.Checkbox.Types.INVERTED,
							value: p === v.s8.ALL_MESSAGES,
							onChange: () => ((0, M._m)(s.guild_id, s.id, v.s8.ALL_MESSAGES), I(!1))
						})
					})
				}),
				(0, n.jsx)('div', {
					className: R.rowOption,
					children: (0, n.jsx)('div', {
						children: (0, n.jsx)(d.Checkbox, {
							color: l,
							shape: d.Checkbox.Shapes.ROUND,
							type: d.Checkbox.Types.INVERTED,
							value: p === v.s8.MENTIONS,
							onChange: () => ((0, M._m)(s.guild_id, s.id, v.s8.MENTIONS), I(!1))
						})
					})
				}),
				(0, n.jsx)('div', {
					className: R.rowOption,
					children: (0, n.jsx)('div', {
						children: (0, n.jsx)(d.Checkbox, {
							color: l,
							shape: d.Checkbox.Shapes.ROUND,
							type: d.Checkbox.Types.INVERTED,
							value: p === v.s8.NOTHING,
							onChange: () => ((0, M._m)(s.guild_id, s.id, v.s8.NOTHING), I(!1))
						})
					})
				}),
				(0, n.jsx)('div', {
					className: R.rowOption,
					children: (0, n.jsx)('div', {
						children: (0, n.jsx)(d.Checkbox, {
							onClick: (e) => {
								(0, c.vq)(e, () =>
									(0, n.jsx)(d.Menu, {
										navId: 'ChannelNotificationCustomSettingsItems',
										'aria-label': A.Z.Messages.NOTIFICATION_SETTINGS_CHANNELS_CUSTOM_MENU_ARIA_LABEL,
										onClose: () => {},
										onSelect: () => {},
										children: (0, S.T5)(s, () => I(!1))
									})
								);
							},
							color: l,
							shape: d.Checkbox.Shapes.ROUND,
							type: d.Checkbox.Types.INVERTED,
							value: p === v.s8.CUSTOM,
							onChange: () => I(!0)
						})
					})
				}),
				(0, n.jsx)(h.Z, {
					onClick: () => (0, M.JK)(s.guild_id, s.id),
					className: R.removeButton
				})
			]
		})
	});
}
