n.d(t, {
	Z: function () {
		return v;
	}
});
var r = n(735250),
	i = n(470079),
	a = n(120356),
	s = n.n(a),
	o = n(91192),
	l = n(442837),
	u = n(481060),
	c = n(880949),
	d = n(806966),
	_ = n(254494),
	E = n(593618),
	f = n(594174),
	h = n(74538),
	p = n(697426),
	I = n(526617),
	m = n(474936),
	T = n(689938),
	g = n(517947);
let S = [8, 8, 8, 8];
function A(e) {
	let { icon: t, isSelected: n, onClick: i, listItemProps: a, ...o } = e;
	return (0, r.jsx)(u.Clickable, {
		...a,
		...o,
		onClick: i,
		className: s()(g.categoryIcon, { [g.selected]: n }),
		children: (0, r.jsx)(t, {
			className: g.categoryIconIcon,
			color: 'currentColor'
		})
	});
}
function N(e) {
	let { category: t, categoryIndex: n, onClick: i, isSelected: a, isNitroLocked: s } = e,
		l = (0, o.JA)('soundboard_guild_'.concat(n));
	return (0, r.jsx)(u.Tooltip, {
		text: (function (e) {
			switch (e.categoryInfo.type) {
				case p.bg.FAVORITES:
					return T.Z.Messages.FAVORITES;
				case p.bg.RECENTLY_HEARD:
					return T.Z.Messages.RECENTLY_HEARD;
				case p.bg.FREQUENTLY_USED:
					return T.Z.Messages.FREQUENTLY_USED;
				case p.bg.GUILD:
					return (0, r.jsx)(E.K, {
						guild: e.categoryInfo.guild,
						includeActivity: !1
					});
				case p.bg.DEFAULTS:
					return T.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
			}
		})(t),
		'aria-label': (function (e) {
			switch (e.categoryInfo.type) {
				case p.bg.FAVORITES:
					return T.Z.Messages.FAVORITES;
				case p.bg.RECENTLY_HEARD:
					return T.Z.Messages.RECENTLY_HEARD;
				case p.bg.FREQUENTLY_USED:
					return T.Z.Messages.FREQUENTLY_USED;
				case p.bg.GUILD:
					return e.categoryInfo.guild.name;
				case p.bg.DEFAULTS:
					return T.Z.Messages.SOUNDBOARD_SOUND_SECTION_DEFAULTS;
			}
		})(t),
		position: 'right',
		children: (e) =>
			(function (e, t, n, i, a, s) {
				switch (e.categoryInfo.type) {
					case p.bg.FAVORITES:
						return (0, r.jsx)(
							A,
							{
								...i,
								icon: u.StarIcon,
								onClick: t,
								isSelected: n,
								listItemProps: a
							},
							e.key
						);
					case p.bg.RECENTLY_HEARD:
						return (0, r.jsx)(
							A,
							{
								...i,
								icon: u.ClockIcon,
								onClick: t,
								isSelected: n,
								listItemProps: a
							},
							e.key
						);
					case p.bg.FREQUENTLY_USED:
						return (0, r.jsx)(
							A,
							{
								...i,
								icon: u.AnalyticsIcon,
								onClick: t,
								isSelected: n,
								listItemProps: a
							},
							e.key
						);
					case p.bg.GUILD:
						return (0, r.jsx)(
							u.Clickable,
							{
								...a,
								...i,
								className: g.category,
								onClick: t,
								children: (0, r.jsx)(c.Z, {
									guild: e.categoryInfo.guild,
									isSelected: n,
									isLocked: s
								})
							},
							e.key
						);
					case p.bg.DEFAULTS:
						return (0, r.jsx)(
							A,
							{
								...i,
								icon: u.ClydeIcon,
								onClick: t,
								isSelected: n,
								listItemProps: a
							},
							e.key
						);
					default:
						return null;
				}
			})(t, i, a, e, l, s)
	});
}
function v(e) {
	let { soundboardListRef: t, categories: n, shouldUpsellLockedCategories: a, listPadding: s = S, guildId: o } = e,
		u = i.useRef(null),
		c = (0, l.e7)([f.default], () => f.default.getCurrentUser()),
		E = (0, h.I5)(c, m.p9.TIER_2),
		p = i.useCallback(
			(e, t, n, i) => {
				let s = a && (0, I.O)(e.categoryInfo, E, o);
				return (0, r.jsx)(N, {
					category: e,
					categoryIndex: t,
					onClick: n,
					isSelected: i,
					isNitroLocked: s
				});
			},
			[o, a, E]
		);
	return (0, r.jsx)(_.Z, {
		className: g.categoryList,
		categoryListRef: u,
		expressionsListRef: t,
		store: d.Wq,
		categories: n,
		listPadding: s,
		renderCategoryListItem: p,
		rowCount: n.length,
		categoryHeight: 40
	});
}
