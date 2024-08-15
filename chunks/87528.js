i.d(t, {
	Z: function () {
		return f;
	}
}),
	i(47120),
	i(724458),
	i(653041);
var n = i(735250),
	a = i(470079),
	r = i(912370),
	o = i(477690),
	s = i(313201),
	l = i(626135),
	c = i(463571),
	d = i(744142),
	u = i(132871),
	h = i(147890),
	_ = i(216547),
	p = i(57716),
	m = i(981631),
	g = i(486073);
function f(e) {
	let {
			collection: t,
			collection: { id: i, title: f, application_directory_collection_items: C }
		} = e,
		[x, I] = a.useState(300),
		[b, N] = a.useState(4),
		v = parseFloat(o.Z.COLLECTION_LIST_CARD_GAP),
		A = (0, u.useApplicationDirectoryHistory)((e) => e.guildId),
		E = (0, p.Z)({ collection: t });
	a.useEffect(() => {
		function e() {
			var e;
			let t = null === (e = E.current) || void 0 === e ? void 0 : e.offsetWidth,
				i = 1;
			return null == t ? 300 : (t >= 500 && (i = 2), t >= 700 && (i = 3), t >= 1000 && (i = 4), N(i), (t - (i - 1) * v) / i);
		}
		let t = E.current;
		if (null == t) return;
		let i = new ResizeObserver(() => {
			I(e());
		});
		return (
			I(e()),
			i.observe(t),
			() => {
				i.disconnect();
			}
		);
	}, [v, E]);
	let T = (0, s.Dt)();
	return (0, n.jsx)('div', {
		ref: E,
		children: (0, n.jsx)(_.Z, {
			header: f,
			headerId: T,
			tileWidth: x,
			tileMargin: v,
			onScroll: (e) => {
				let { tileIndex: t } = e,
					n = C.slice(t, t + b).reduce((e, t) => {
						let { type: i, application: n } = t;
						return i === r.C.APPLICATION && null != n && e.push(n.id), e;
					}, []);
				l.default.track(m.rMx.APP_DIRECTORY_COLLECTION_SCROLLED, {
					collection_id: i,
					offset: t,
					results: n,
					guild_id: A
				});
			},
			children: (0, n.jsx)('ul', {
				'aria-labelledby': T,
				className: g.itemsContainer,
				children: C.map((e) => {
					let { id: t, type: a, application: o } = e;
					if (a === r.C.APPLICATION && null != o)
						return (0, n.jsx)(
							'li',
							{
								style: { width: x },
								className: g.itemContainer,
								children: (0, n.jsx)(c.Z, {
									className: g.seoAnchor,
									href: m.Z5c.APPLICATION_DIRECTORY_PROFILE(o.id),
									children: (0, n.jsx)(d.Z, {
										application: o,
										onClick: (e) => {
											let { mutualGuilds: t } = e;
											l.default.track(m.rMx.APP_DIRECTORY_COLLECTION_ITEM_CLICKED, {
												collection_id: i,
												application_id: o.id,
												guild_id: A,
												shown_mutual_guilds_count: t.length
											}),
												(0, h.goToApplication)({ applicationId: o.id });
										},
										animatesOnHover: !0
									})
								})
							},
							t
						);
				})
			})
		})
	});
}
