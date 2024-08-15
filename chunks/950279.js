t.d(n, {
	p: function () {
		return C;
	}
}),
	t(47120),
	t(773603);
var a = t(735250),
	r = t(470079),
	i = t(120356),
	s = t.n(i),
	o = t(481060),
	l = t(368343),
	c = t(364083),
	d = t(92373),
	u = t(308083),
	m = t(689938),
	_ = t(258925),
	f = t(318577);
function C(e) {
	let { gameApplicationIds: n, preventGameRemoval: t, onUpdateGames: i, minGames: l = 1, error: C } = e,
		{ options: h, matchSorterOptions: x } = (0, c.P)(),
		p = r.useMemo(() => Array.from(n), [n]),
		g = r.useCallback(
			(e) => {
				if (!(e.length < l)) i(new Set(e));
			},
			[l, i]
		),
		T = r.useCallback(
			(e) => {
				if (t) return;
				let a = new Set(n);
				n.has(e) ? a.delete(e) : a.add(e), i(a);
			},
			[t, n, i]
		),
		E = r.useCallback(() => null, []);
	return (0, a.jsx)('div', {
		className: _.inputContainer,
		children: (0, a.jsxs)(o.FormItem, {
			error: C,
			children: [
				(0, a.jsx)(o.SearchableSelect, {
					multi: !0,
					hidePills: !0,
					autoFocus: !0,
					wrapperClassName: s()(f.input, _.input),
					options: h,
					value: p,
					placeholder: m.Z.Messages.CLAN_SETUP_GAMES_SEARCH_PLACEHOLDER,
					onChange: g,
					isDisabled: n.size === u.cm,
					matchSorterOptions: x,
					clearQueryOnSelect: !0,
					customPillContainerClassName: _.pills,
					renderCustomPill: E
				}),
				(0, a.jsxs)('div', {
					className: _.gamesContainer,
					children: [
						(0, a.jsx)(o.Text, {
							variant: 'text-xs/semibold',
							color: 'text-muted',
							children: m.Z.Messages.CLAN_SETUP_SELECTED_GAMES
						}),
						(0, a.jsx)('div', {
							className: _.gamesList,
							children: p.map((e) =>
								(0, a.jsx)(
									o.Tooltip,
									{
										text: m.Z.Messages.CLAN_SETUP_GAMES_ONE_GAME_REQUIRED,
										shouldShow: t,
										tooltipContentClassName: _.tooltip,
										children: (r) =>
											(0, a.jsx)('div', {
												...r,
												children: (0, a.jsx)(
													d.Z,
													{
														applicationId: e,
														imageContainerClassName: n.size > l ? _.clickableGame : void 0,
														selected: !0,
														locked: t,
														onClick: T
													},
													e
												)
											})
									},
									e
								)
							)
						})
					]
				})
			]
		})
	});
}
function h(e) {
	let { guildId: n, selectedGameApplicationIds: t, onUpdateGames: i } = e,
		{ topGames: s, tryFetchTopGames: c } = (0, l.B)(),
		u = s.get(n),
		[f, C] = r.useState(!1);
	r.useEffect(() => {
		C(!0),
			c(n).finally(() => {
				C(!1);
			});
	}, [n, c]);
	let h = r.useMemo(() => (null == u ? [] : Object.keys(u).sort((e, n) => u[n].score - u[e].score)), [u]),
		x = r.useCallback(
			(e) => {
				let n = new Set(t);
				t.has(e) ? n.delete(e) : n.add(e), i(n);
			},
			[i, t]
		);
	return f && null == u
		? (0, a.jsx)(o.Spinner, { className: _.loadingSpinner })
		: null == h || 0 === h.length
			? null
			: (0, a.jsxs)(a.Fragment, {
					children: [
						(0, a.jsx)('hr', { className: _.separator }),
						(0, a.jsxs)('div', {
							className: _.gamesContainer,
							children: [
								(0, a.jsx)(o.Text, {
									variant: 'text-xs/semibold',
									color: 'text-muted',
									children: m.Z.Messages.CLAN_SETUP_GAMES_SUGGESTED
								}),
								(0, a.jsx)('div', {
									className: _.gamesList,
									children: h.map((e) =>
										(0, a.jsx)(
											d.Z,
											{
												applicationId: e,
												imageContainerClassName: _.clickableGame,
												selected: t.has(e),
												onClick: x
											},
											e
										)
									)
								})
							]
						})
					]
				});
}
n.Z = (e) => {
	let {
			title: n,
			description: t,
			onUpdateGames: r,
			gameApplicationIds: i,
			minGames: l = 1,
			error: c,
			guildId: d,
			includeSuggestedGames: u
		} = e,
		m = i.size <= l;
	return (0, a.jsxs)('div', {
		className: s()(f.slideContent, _.container),
		children: [
			(0, a.jsx)(o.Heading, {
				variant: 'heading-xxl/medium',
				className: f.title,
				children: n
			}),
			(0, a.jsx)(o.Text, {
				variant: 'text-md/normal',
				color: 'header-secondary',
				className: f.subtitle,
				children: t
			}),
			(0, a.jsx)(C, {
				minGames: l,
				gameApplicationIds: i,
				preventGameRemoval: m,
				onUpdateGames: r,
				error: c
			}),
			u &&
				null != d &&
				(0, a.jsx)(h, {
					guildId: d,
					selectedGameApplicationIds: i,
					onUpdateGames: r
				})
		]
	});
};
