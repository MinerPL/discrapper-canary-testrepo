t.d(s, {
	Z: function () {
		return C;
	}
}),
	t(47120),
	t(789020);
var n = t(735250),
	i = t(470079),
	l = t(120356),
	a = t.n(l),
	r = t(399606),
	o = t(481060),
	d = t(92114),
	c = t(9156),
	u = t(621600),
	h = t(113449),
	N = t(748756),
	S = t(732760),
	E = t(686660),
	g = t(981631),
	m = t(490897),
	_ = t(526761),
	T = t(689938),
	x = t(78769),
	I = t(650455);
let O = () => [
	{
		value: E.s8.ALL_MESSAGES,
		name: T.Z.Messages.NOTIFICATION_PRESET_1
	},
	{
		value: E.s8.MENTIONS,
		name: T.Z.Messages.NOTIFICATION_PRESET_2
	},
	{
		value: E.s8.NOTHING,
		name: T.Z.Messages.NOTIFICATION_PRESET_3
	},
	{
		value: E.s8.CUSTOM,
		name: T.Z.Messages.NOTIFICATION_PRESET_CUSTOM
	}
];
function C(e) {
	let { guildId: s } = e,
		t = (0, r.e7)([c.ZP], () => c.ZP.getGuildFlags(s)),
		l = (0, r.e7)([c.ZP], () => {
			let e = c.ZP.getGuildUnreadSetting(s),
				t = c.ZP.getMessageNotifications(s);
			return e === m.i.UNSET ? (t === g.bL.ALL_MESSAGES ? m.i.ALL_MESSAGES : m.i.ONLY_MENTIONS) : e;
		}),
		a = (0, r.e7)([c.ZP], () => c.ZP.getMessageNotifications(s)),
		[I, C] = (0, i.useState)(!1),
		v = I ? E.s8.CUSTOM : (0, E.gs)(l, a),
		L = (e) => {
			if (e === E.s8.CUSTOM) {
				C(!0);
				return;
			}
			C(!1), (0, N.V)(s, e);
		};
	return (0, n.jsxs)('div', {
		children: [
			(0, n.jsx)('div', {
				className: x.segmentedControlsContainer,
				children: (0, n.jsx)(o.SegmentedControl, {
					value: v,
					options: O(),
					onChange: (e) => {
						let { value: s } = e;
						return L(s);
					},
					className: x.segmentedControl,
					look: 'pill'
				})
			}),
			(0, n.jsx)('div', { className: x.presetSeparator }),
			(0, n.jsxs)('div', {
				className: x.customPresetsContainer,
				children: [
					(0, n.jsxs)('div', {
						className: x.grid,
						children: [(0, n.jsx)(M, { unreadSetting: l }), (0, n.jsx)(p, { notificationSetting: a })]
					}),
					(0, n.jsxs)('div', {
						className: x.grid,
						children: [
							(0, n.jsxs)('div', {
								children: [
									(0, n.jsx)(o.Text, {
										variant: 'text-sm/semibold',
										color: 'header-primary',
										children: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_TITLE
									}),
									(0, n.jsx)(o.Text, {
										variant: 'text-xs/medium',
										color: 'text-muted',
										children: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_SUBTITLE
									})
								]
							}),
							(0, n.jsxs)('div', {
								children: [
									(0, n.jsx)(o.Text, {
										variant: 'text-sm/semibold',
										color: 'header-primary',
										children: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_TITLE
									}),
									(0, n.jsx)(o.Text, {
										variant: 'text-xs/medium',
										color: 'text-muted',
										children: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_SUBTITLE
									})
								]
							})
						]
					}),
					(0, n.jsxs)('div', {
						className: x.grid,
						children: [
							(0, n.jsx)(o.SingleSelect, {
								value: l,
								className: x.input,
								onChange: (e) => {
									C(!1), d.Z.updateGuildNotificationSettings(s, { flags: (0, h.Q4)(t, e === m.i.ALL_MESSAGES ? _.vc.UNREADS_ALL_MESSAGES : _.vc.UNREADS_ONLY_MENTIONS) }, u.UE.unreads(e));
								},
								options: (0, S.y)({ notificationSetting: a }),
								renderOptionLabel: (e) => {
									let s = e.disabled && e.value === m.i.ONLY_MENTIONS && l !== m.i.ONLY_MENTIONS;
									return (0, n.jsxs)(n.Fragment, {
										children: [
											(0, n.jsx)('div', {
												children: (0, n.jsx)(o.Text, {
													variant: 'text-md/normal',
													color: e.disabled ? 'text-muted' : void 0,
													children: e.label
												})
											}),
											s &&
												(0, n.jsx)(o.Tooltip, {
													text: T.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_MENTION_ONLY_DISABLED,
													children: (e) =>
														(0, n.jsx)(o.DenyIcon, {
															size: 'custom',
															...e,
															width: 20,
															height: 20,
															className: x.muted
														})
												})
										]
									});
								}
							}),
							(0, n.jsx)(o.SingleSelect, {
								className: x.input,
								value: a,
								onChange: (e) => {
									C(!1);
									let t = { message_notifications: e };
									e === g.bL.ALL_MESSAGES && l !== m.i.ALL_MESSAGES && (t.flags = (0, h.Q4)(c.ZP.getGuildFlags(s), _.vc.UNREADS_ALL_MESSAGES)), d.Z.updateGuildNotificationSettings(s, t, u.UE.notifications(e));
								},
								options: (0, S.d)({ notificationSetting: a }),
								renderOptionLabel: (e) => {
									let s = e.value === g.bL.ALL_MESSAGES && l !== m.i.ALL_MESSAGES && a !== g.bL.ALL_MESSAGES;
									return (0, n.jsxs)(n.Fragment, {
										children: [
											(0, n.jsx)(o.Text, {
												variant: 'text-md/normal',
												children: e.label
											}),
											s &&
												(0, n.jsx)(o.Tooltip, {
													text: T.Z.Messages.NOTIFICATION_SETTINGS_UNREAD_UPDATE_WARNING,
													children: (e) =>
														(0, n.jsx)(o.CircleInformationIcon, {
															size: 'custom',
															...e,
															width: 20,
															height: 20,
															className: x.muted
														})
												})
										]
									});
								}
							})
						]
					})
				]
			})
		]
	});
}
function M(e) {
	let { unreadSetting: s } = e,
		t = [
			{
				badged: !0,
				unread: !0,
				muted: !1,
				name: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_1
			},
			{
				badged: !1,
				unread: !0,
				muted: !0,
				name: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_2
			},
			{
				badged: !1,
				unread: !1,
				muted: !0,
				name: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_UNREAD_CHANNEL_3
			}
		];
	return (
		s === m.i.ALL_MESSAGES && (t[1].muted = !1),
		(0, n.jsx)('div', {
			className: x.channeList,
			children: t.map((e) =>
				(0, n.jsxs)(
					'div',
					{
						className: x.channelListChannel,
						children: [
							(0, n.jsxs)('div', {
								className: x.channelListChannelName,
								children: [
									(0, n.jsx)('div', {
										className: a()(x.unread, {
											[x.hidden]: !e.unread,
											[x.unreadMuted]: e.muted
										})
									}),
									(0, n.jsx)(o.TextIcon, {
										size: 'xxs',
										color: 'currentColor',
										className: a()(x.channelListChannelIcon, { [x.muted]: e.muted })
									}),
									(0, n.jsx)(o.Text, {
										variant: 'text-xs/normal',
										color: e.muted ? 'text-muted' : void 0,
										children: e.name
									})
								]
							}),
							(0, n.jsx)('div', {
								className: a()(x.badge, { [x.hidden]: !e.badged }),
								children: (0, n.jsx)(o.NumberBadge, { count: 1 })
							})
						]
					},
					e.name
				)
			)
		})
	);
}
function p(e) {
	return (0, n.jsxs)('div', {
		className: x.mockMessage,
		children: [
			e.notificationSetting === g.bL.NO_MESSAGES && (0, n.jsx)('div', { className: x.mockMessageDisabled }),
			(0, n.jsx)('div', {
				children: (0, n.jsx)('img', {
					className: x.mockMessageAvatar,
					src: I,
					alt: ''
				})
			}),
			(0, n.jsxs)('div', {
				children: [
					(0, n.jsx)(o.Text, {
						variant: 'text-xs/medium',
						children: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_AUTHOR
					}),
					e.notificationSetting === g.bL.ALL_MESSAGES &&
						(0, n.jsx)(o.Text, {
							variant: 'text-xs/normal',
							color: 'text-muted',
							children: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
						}),
					e.notificationSetting !== g.bL.ALL_MESSAGES &&
						(0, n.jsxs)(n.Fragment, {
							children: [
								(0, n.jsxs)(o.Text, {
									variant: 'text-xs/normal',
									color: 'text-link',
									tag: 'span',
									children: ['@Roka', ' ']
								}),
								(0, n.jsx)(o.Text, {
									variant: 'text-xs/normal',
									color: 'text-muted',
									tag: 'span',
									children: T.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NOTIFICATION_MESSAGE
								})
							]
						})
				]
			})
		]
	});
}
