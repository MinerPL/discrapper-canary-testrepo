n.d(t, {
	p: function () {
		return v;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(120356),
	l = n.n(s),
	r = n(913527),
	o = n.n(r),
	c = n(442837),
	u = n(481060),
	d = n(430824),
	h = n(650461),
	m = n(353093),
	p = n(105671),
	_ = n(532490),
	f = n(979264),
	E = n(570938),
	C = n(550271),
	g = n(116175),
	I = n(308083),
	x = n(689938),
	T = n(329809);
function N(e) {
	let { guildId: t, tag: n, badge: a, primaryColor: s, secondaryColor: l } = e;
	return null == n || 0 === n.length
		? (0, i.jsx)('div', {
				className: T.placeholderIcon,
				children: (0, i.jsx)(E.Z, {
					height: 42,
					width: 42
				})
			})
		: (0, i.jsx)(f.aG, {
				guildId: t,
				className: T.charterClanTag,
				clanTag: n,
				textVariant: 'heading-lg/semibold',
				textColor: 'text-normal',
				badgeSize: I.NC.SIZE_24,
				clanBadge: (0, i.jsx)(C.A, {
					className: T.charterClanBadge,
					badge: a,
					width: I.NC.SIZE_24,
					height: I.NC.SIZE_24,
					primaryTintColor: s,
					secondaryTintColor: l
				})
			});
}
function v(e) {
	let { applicationIds: t, playstyle: n, className: s } = e,
		r = a.useMemo(() => Array.from(t), [t]),
		o = (0, p.i)(r),
		c = a.useMemo(() => {
			if (null == o) return null;
			let e = (0, I.mv)(n);
			return null == e
				? x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES.format({ games: o })
				: x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_GAMES_AND_PLAYSTYLE.format({
						playstyle: e,
						games: o
					});
		}, [o, n]);
	return (0, i.jsx)(u.Text, {
		variant: 'text-sm/normal',
		color: 'text-muted',
		className: l()(T.overviewText, s),
		children: null == c ? x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_DEFAULT : c
	});
}
t.Z =
	12633 == n.j
		? (e) => {
				let { guildId: t } = e,
					n = (0, h.Wg)(),
					s = (0, c.e7)([d.Z], () => {
						var e, n;
						return null !== (n = null === (e = d.Z.getGuild(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : '';
					}),
					{
						gameApplicationIds: l,
						playstyle: r,
						interests: p,
						tag: f,
						badgeKind: E,
						badgePrimaryColor: C,
						badgeSecondaryColor: S
					} = (0, c.cj)([h.ZP], () => {
						var e;
						return null !== (e = h.ZP.getStateForGuild(t).progress) && void 0 !== e ? e : n;
					}),
					Z = a.useMemo(() => ((null == p ? void 0 : p.size) > 0 ? (0, m.f6)(Array.from(p), I.nt) : null), [p]);
				return (0, i.jsxs)(_.Z, {
					...e,
					children: [
						(0, i.jsx)(N, {
							guildId: t,
							tag: f,
							badge: E,
							primaryColor: null != C ? C : g.Nh,
							secondaryColor: null != S ? S : g.vY
						}),
						(0, i.jsx)(u.Heading, {
							variant: 'heading-xl/normal',
							color: 'text-muted',
							className: T.overviewHeaderPrelude,
							children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TITLE
						}),
						(0, i.jsx)(u.Heading, {
							variant: 'heading-xl/bold',
							color: 'interactive-active',
							className: T.overviewGuildName,
							children: s
						}),
						(0, i.jsx)(u.Text, {
							variant: 'text-sm/normal',
							color: 'text-muted',
							className: T.overviewText,
							children: x.Z.Messages.CLAN_SETUP_OVERVIEW_ESTABLISHED.format({ date: o()().format('MMMM YYYY') })
						}),
						(0, i.jsx)(v, {
							applicationIds: l,
							playstyle: r
						}),
						null != Z
							? (0, i.jsx)(u.Text, {
									variant: 'text-sm/normal',
									color: 'text-muted',
									className: T.overviewText,
									children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_TRAITS.format({ traits: Z })
								})
							: null,
						(0, i.jsx)(u.Text, {
							variant: 'text-sm/normal',
							color: 'text-muted',
							className: T.overviewText,
							children: x.Z.Messages.CLAN_SETUP_OVERVIEW_TEXT_WRAP
						})
					]
				});
			}
		: null;
