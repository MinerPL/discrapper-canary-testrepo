l.d(t, {
	Z: function () {
		return N;
	}
}),
	l(47120);
var n = l(735250),
	a = l(470079),
	o = l(120356),
	s = l.n(o),
	i = l(954955),
	r = l.n(i),
	C = l(498607),
	c = l.n(C),
	d = l(399606),
	u = l(481060),
	m = l(430824),
	_ = l(246946),
	E = l(669405),
	h = l(553826),
	M = l(893966),
	x = l(527379),
	b = l(327999),
	T = l(734557),
	L = l(981631),
	g = l(689938),
	I = l(727328),
	p = l(837244);
let H = [b.gq.DISCOVERY, b.gq.VANITY_URL, b.gq.BOT, b.gq.HUB, b.gq.MANUAL_MEMBER_VERIFICATION];
function f(e) {
	let { type: t, text: l, size: a, vanityUrl: o, isFocused: i } = e,
		r = null != a ? a : 16,
		C = (function (e, t) {
			switch (e) {
				case b.gq.BOT:
					return (0, n.jsx)(u.RobotIcon, {
						size: 'custom',
						color: 'currentColor',
						className: I.icon,
						height: t,
						width: t
					});
				case b.gq.INTEGRATION:
					return (0, n.jsx)(u.WebhookIcon, {
						size: 'custom',
						color: 'currentColor',
						className: I.icon,
						height: t,
						width: t
					});
				case b.gq.DISCOVERY:
					return (0, n.jsx)(u.CompassIcon, {
						size: 'custom',
						color: 'currentColor',
						className: I.icon,
						height: t,
						width: t
					});
				case b.gq.HUB:
					return (0, n.jsx)(u.HubIcon, {
						size: 'custom',
						color: 'currentColor',
						className: I.icon,
						height: t,
						width: t
					});
				case b.gq.INVITE:
				case b.gq.VANITY_URL:
					return (0, n.jsx)(u.LinkIcon, {
						size: 'custom',
						color: 'currentColor',
						className: I.icon,
						height: t,
						width: t
					});
				case b.gq.MANUAL_MEMBER_VERIFICATION:
					return (0, n.jsx)(E.Z, {
						className: I.icon,
						height: t,
						width: t
					});
				default:
					return null;
			}
		})(t, r),
		c = (0, b.bE)(t, o);
	return (0, n.jsxs)('div', {
		className: s()(I.labelWithIconContainer),
		'aria-label': c,
		children: [
			null != C ? C : null,
			(0, n.jsx)(u.Text, {
				variant: 12 === r ? 'text-xs/medium' : 'text-sm/medium',
				className: s()(I.labelText, { [I.focused]: i }),
				children: l
			})
		]
	});
}
function N(e) {
	let { guildId: t, onClose: l } = e,
		o = (0, d.e7)([M.Z], () => M.Z.getSearchStateByGuildId(t), [t], c()),
		{ inviteCodes: i } = (0, T.s)(t),
		C = (0, d.e7)([m.Z], () => m.Z.getGuild(t)),
		E = null == C ? void 0 : C.vanityURLCode,
		[N, R] = a.useState(!1),
		{ selectedSourceInviteCode: A, selectedJoinSourceType: S } = o,
		Z = null != S && S !== b.gq.UNSPECIFIED,
		j = (0, d.e7)([_.Z], () => _.Z.hideInstantInvites, []);
	j && (i = []);
	let v = a.useCallback(
			(e) => {
				let l = e.trim();
				(0, x.Dr)(t, {
					...o,
					selectedSourceInviteCode: '' !== l ? l : void 0,
					selectedJoinSourceType: void 0
				});
			},
			[t, o]
		),
		D = a.useCallback(
			(e) => {
				e === S
					? (0, x.Dr)(t, {
							selectedSourceInviteCode: void 0,
							selectedJoinSourceType: void 0
						})
					: (0, x.Dr)(t, {
							selectedSourceInviteCode: null,
							selectedJoinSourceType: e
						}),
					R(!1);
			},
			[t, S]
		),
		O = a.useCallback(r()(v, 300), [v]),
		B = a.useCallback(
			(e) => {
				O(e);
			},
			[O]
		);
	return (0, n.jsx)(u.Menu, {
		navId: 'members-table-join-method-menu',
		onClose: () => {
			l();
		},
		'aria-label': g.Z.Messages.MEMBER_SAFETY_JOIN_METHOD_LABEL,
		onSelect: L.dG4,
		children: N
			? (0, n.jsxs)(u.MenuGroup, {
					children: [
						(0, n.jsx)(u.MenuItem, {
							id: 'back',
							action: () => R(!1),
							render: (e) =>
								(0, n.jsxs)('span', {
									...e,
									className: I.customLabelContainer,
									children: [
										(0, n.jsx)(u.ChevronSmallLeftIcon, {
											size: 'custom',
											color: 'currentColor',
											width: 16,
											height: 16,
											className: I.__invalid_caret
										}),
										(0, n.jsx)(u.Text, {
											variant: 'eyebrow',
											color: 'header-primary',
											children: g.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
										})
									]
								})
						}),
						H.map((e) =>
							(0, n.jsx)(
								u.MenuRadioItem,
								{
									id: 'join-source-type-option-'.concat(e),
									label: (t) =>
										(0, n.jsx)(f, {
											...t,
											type: e,
											vanityUrl: E,
											text: (0, b.bE)(e, E, j)
										}),
									checked: S === e,
									disabled: !1,
									action: () => D(e),
									group: 'join-source-type-options'
								},
								'join-source-type-option-'.concat(e)
							)
						)
					]
				})
			: (0, n.jsxs)(u.MenuGroup, {
					children: [
						(0, n.jsx)(
							u.MenuControlItem,
							{
								id: 'members-table-invite-code-search',
								control: (e, t) =>
									(0, n.jsx)(u.MenuSearchControl, {
										...e,
										query: null != A ? A : '',
										onChange: B,
										ref: t,
										placeholder: g.Z.Messages.MEMBER_SAFETY_INVITE_CODE_SEARCH_PLACEHOLDER
									})
							},
							'invite-code-filter-search'
						),
						(0, n.jsx)(u.MenuSeparator, {}),
						(0, n.jsx)(
							u.MenuRadioItem,
							{
								id: 'join-source-type-option-all',
								label: g.Z.Messages.GUILD_SETTINGS_FILTER_ALL,
								checked: null == A && null == S,
								disabled: !1,
								action: () => D(null),
								group: 'join-source-type-options'
							},
							'join-source-type-option-all'
						),
						i.map((e) =>
							(0, n.jsx)(
								u.MenuRadioItem,
								{
									id: 'join-source-type-option-'.concat(e),
									label: (t) =>
										(0, n.jsx)(f, {
											...t,
											type: b.gq.INVITE,
											vanityUrl: E,
											text: e
										}),
									checked: A === e,
									disabled: !1,
									action: () => v(e),
									group: 'join-source-type-options'
								},
								'join-source-type-option-'.concat(e)
							)
						),
						(0, n.jsx)(u.MenuSeparator, {}),
						(0, n.jsx)(
							u.MenuItem,
							{
								id: 'other-join-methods',
								action: () => R(!0),
								render: (e) =>
									(0, n.jsxs)('div', {
										className: s()(I.containerWithRightCaret, I.customLabelContainer),
										children: [
											(0, n.jsxs)('div', {
												className: s()(p.label),
												children: [
													(0, n.jsx)(u.Text, {
														variant: 'text-sm/medium',
														className: s()(I.__invalid_selectedRadio, I.labelText, { [I.focused]: e.isFocused }),
														children: g.Z.Messages.MEMBER_SAFETY_JOIN_TYPE_FILTER_NAME
													}),
													Z
														? (0, n.jsx)('div', {
																className: I.selectedOption,
																children: (0, n.jsx)(f, {
																	...e,
																	size: 12,
																	text: (0, b.bE)(S, E, j),
																	type: S,
																	vanityUrl: E
																})
															})
														: null
												]
											}),
											Z
												? (0, n.jsx)(h.Z, {
														background: I.__invalid_radio,
														foreground: I.radioSelection,
														width: 16,
														height: 16
													})
												: (0, n.jsx)(u.ChevronSmallRightIcon, {
														size: 'custom',
														color: 'currentColor',
														width: 16,
														height: 16,
														className: I.__invalid_caret
													})
										]
									})
							},
							'other-join-methods'
						)
					]
				})
	});
}
