n(653041);
var i = n(735250),
	a = n(470079),
	s = n(481060),
	r = n(570140),
	l = n(906732),
	o = n(451603),
	c = n(885714),
	d = n(225784),
	u = n(127541),
	_ = n(981631),
	E = n(352985);
let h = [
		[1696, 20],
		[1432, 16],
		[1168, 12],
		[0, 8]
	],
	m = [
		[1696, 30],
		[1432, 24],
		[1168, 18],
		[0, 12]
	];
t.Z = (e) => {
	let t,
		{
			title: n,
			subtitle: I,
			guildsData: g,
			analyticsContext: p,
			theme: T,
			onViewGuild: S,
			fetchGuilds: f,
			onGuildCardSeen: C,
			currentCategoryId: N,
			loadId: A,
			onTagClick: v,
			showMoreCards: Z = !1
		} = e;
	a.useEffect(() => {
		r.Z.wait(() => f());
	}, [N]);
	let L = (0, u.Z)(Z ? m : h),
		{ analyticsLocations: O } = (0, l.ZP)();
	if (null == g) return null;
	let { guilds: R, loading: x } = g,
		b = null == R || 0 === R.length;
	if (!x && b) return null;
	let P = async (e) => {
		if ((0, o.yU)())
			(0, c.Z)({
				analyticsSource: { page: _.ZY5.GUILD_DISCOVERY },
				analyticsLocation: {
					page: _.ZY5.GUILD_DISCOVERY,
					section: _.jXE.GUILD_CAP_UPSELL_MODAL
				},
				analyticsLocations: O
			});
		else {
			let t = R.findIndex((t) => t.id === e);
			await S(e, t, p, A);
		}
	};
	if (x || null == R) {
		let e = [];
		for (let t = 0; t < L; t++) e.push((0, i.jsx)(d.Z.Placeholder, {}, t));
		t = e;
	} else
		t = R.slice(0, L).map((e) =>
			(0, i.jsx)(
				d.Z,
				{
					className: E.__invalid_guildCard,
					guild: e,
					onView: P,
					theme: T,
					onGuildCardSeen: C,
					onTagClick: v
				},
				e.id
			)
		);
	return (0, i.jsx)('section', {
		className: E.guildListSection,
		children: (0, i.jsxs)(s.HeadingLevel, {
			component: (0, i.jsx)(s.Heading, {
				className: E.__invalid_title,
				variant: 'heading-lg/semibold',
				children: n
			}),
			children: [
				null != I &&
					(0, i.jsx)(s.Text, {
						className: E.subtitle,
						variant: 'text-sm/normal',
						color: 'header-secondary',
						children: I
					}),
				(0, i.jsx)('div', {
					className: E.guildList,
					children: t
				})
			]
		})
	});
};
