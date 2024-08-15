s.d(t, {
	Z: function () {
		return _;
	}
});
var n = s(735250),
	l = s(470079),
	a = s(120356),
	i = s.n(a),
	r = s(442837),
	o = s(692547),
	d = s(481060),
	c = s(787014),
	u = s(603211),
	h = s(710344),
	m = s(496675),
	g = s(479099),
	E = s(710352),
	T = s(981631),
	p = s(689938),
	N = s(654244);
function _(e) {
	let { channel: t } = e,
		a = (0, r.e7)([m.Z], () => m.Z.can(T.Plq.MANAGE_CHANNELS, t), [t]),
		u = t.availableTags.length >= E.pC,
		g = t.availableTags.length > 0,
		_ = l.useCallback(() => {
			let e = t.availableTags.length >= E.pC;
			a &&
				!e &&
				(0, d.openModalLazy)(async () => {
					let { default: e } = await s.e('21971').then(s.bind(s, 201049));
					return (s) =>
						(0, n.jsx)(e, {
							...s,
							channelId: t.id,
							guildId: t.guild_id
						});
				});
		}, [t, a]),
		x = l.useCallback(
			(e) => {
				a &&
					(0, d.openModalLazy)(async () => {
						let { default: l } = await s.e('21971').then(s.bind(s, 201049));
						return (s) =>
							(0, n.jsx)(l, {
								...s,
								channelId: t.id,
								guildId: t.guild_id,
								tag: e
							});
					});
			},
			[a, t]
		),
		{
			handleDragStart: f,
			handleDragReset: C,
			handleDragComplete: I
		} = (0, h.Z)(t.availableTags, (e) => {
			(0, c.pW)({ availableTags: e });
		});
	return (0, n.jsxs)('div', {
		className: N.tags,
		children: [
			g
				? t.availableTags.map((e) =>
						(0, n.jsx)(
							S,
							{
								tag: e,
								availableTags: t.availableTags,
								canManageChannels: a,
								onTagClick: x,
								onDragComplete: I,
								onDragReset: C,
								onDragStart: f
							},
							e.id
						)
					)
				: null,
			g
				? (0, n.jsx)(d.Clickable, {
						onClick: _,
						className: i()(N.addTags, { [N.disabled]: !a || u }),
						children: (0, n.jsx)(d.PlusSmallIcon, {
							size: 'custom',
							'aria-label': p.Z.Messages.FORUM_TAG_CREATE,
							color: o.Z.unsafe_rawColors.WHITE_500.css,
							width: 20,
							height: 20
						})
					})
				: (0, n.jsx)(d.Button, {
						disabled: !a,
						onClick: _,
						children: p.Z.Messages.FORUM_TAG_CREATE
					})
		]
	});
}
function S(e) {
	let {
			tag: t,
			availableTags: s,
			canManageChannels: l,
			onTagClick: a,
			onDragComplete: r,
			onDragStart: o,
			onDragReset: d
		} = e,
		c = s.findIndex((e) => e.id === t.id),
		{
			drag: h,
			dragSourcePosition: m,
			drop: E,
			setIsDraggable: T
		} = (0, u.Z)({
			type: 'CHANNEL_SETTINGS_FORUM_TAGS',
			index: c,
			optionId: t.id,
			onDragStart: o,
			onDragComplete: r,
			onDragReset: d
		});
	return (0, n.jsx)('div', {
		className: i()(N.container, {
			[N.dropIndicatorBefore]: null != m && c < m,
			[N.dropIndicatorAfter]: null != m && c > m
		}),
		ref: (e) => h(E(e)),
		onMouseEnter: () => T(l),
		onMouseLeave: () => T(!1),
		children: (0, n.jsx)(g.Z, {
			tag: t,
			disabled: !l,
			ariaLabel: p.Z.Messages.FORUM_TAG_EDIT_LABEL.format({ name: t.name }),
			onClick: l ? () => a(t) : void 0
		})
	});
}
