t.d(n, {
	Z: function () {
		return I;
	},
	x: function () {
		return r;
	}
}),
	t(653041);
var r,
	i,
	o = t(735250),
	l = t(470079),
	c = t(120356),
	s = t.n(c),
	a = t(477690),
	u = t(481060),
	C = t(686546),
	d = t(768581),
	p = t(624138),
	f = t(689938),
	h = t(66465);
((i = r || (r = {}))[(i.SMALL = (0, p.Mg)(a.Z.GUILD_COUNT_SMALL_ICON_SIZE))] = 'SMALL'), (i[(i.LARGE = (0, p.Mg)(a.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = 'LARGE');
let A = {
		[r.SMALL]: h.moreGuildsSmall,
		[r.LARGE]: h.moreGuildsLarge
	},
	E = {
		[r.SMALL]: h.iconSmall,
		[r.LARGE]: h.iconLarge
	};
function I(e) {
	var n, t, i;
	let { application: c, mutualGuilds: a, mutualGuildShownMax: p = 4, className: I, textVariant: _ = 'text-sm/normal', compact: L, guildIconSize: g = r.LARGE } = e,
		m = new Intl.ListFormat('en-US'),
		T = null !== (t = null === (n = c.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== t ? t : 0,
		R = null !== (i = null == a ? void 0 : a.length) && void 0 !== i ? i : 0,
		v = Math.max(0, T - R),
		{ shownMutualGuilds: O, hiddenMutualGuilds: P } = l.useMemo(() => {
			let e = [],
				n = [];
			return (
				null == a ||
					a.forEach((t) => {
						e.length < p && null != t.icon ? e.push(t) : n.push(t);
					}),
				e.length === p && n.length > 0 && (n.push(e[p - 1]), (e = e.slice(0, p - 1))),
				{
					shownMutualGuilds: e,
					hiddenMutualGuilds: n
				}
			);
		}, [a, p]),
		N = P.length,
		Z = (function (e, n, t, r) {
			if (0 === n && 0 === e) return null;
			if (n > 0 && 0 === t) return f.Z.Messages.APP_DIRECTORY_MUTUAL_GUILD_COUNT.format({ mutualGuildCount: n });
			let i = n > 0 ? f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_WITH_MUTUALS : f.Z.Messages.APP_DIRECTORY_GUILD_COUNT,
				o = new Intl.NumberFormat('en-US', {
					notation: r ? 'compact' : 'standard',
					compactDisplay: 'short'
				});
			return i.format({
				guildCount: o.format(e),
				mutualGuildCount: n,
				nonMutualGuildCount: o.format(t)
			});
		})(T, R, v, L);
	return 0 === O.length && null == Z
		? null
		: (0, o.jsxs)('div', {
				className: s()(I, h.wrapper),
				children: [
					(0, o.jsx)('div', {
						className: h.icons,
						children:
							O.length > 0
								? (0, o.jsxs)(o.Fragment, {
										children: [
											O.map((e, n) => {
												let t = n === O.length - 1 && 0 === N,
													r = d.ZP.getGuildIconURL({
														id: e.id,
														icon: e.icon,
														size: g,
														canAnimate: !1
													}),
													i = (0, o.jsx)(u.Tooltip, {
														text: e.name,
														position: 'top',
														children: (e) =>
															(0, o.jsx)('img', {
																...e,
																className: s()(h.icon, E[g]),
																src: r,
																alt: ''
															})
													});
												return t
													? (0, o.jsx)(l.Fragment, { children: i }, e.id)
													: (0, o.jsx)(
															C.ZP,
															{
																className: h.iconMask,
																height: g,
																width: g,
																mask: C.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
																children: i
															},
															e.id
														);
											}),
											N > 0
												? (0, o.jsx)(u.Tooltip, {
														text: f.Z.Messages.APP_DIRECTORY_GUILD_COUNT_PLUS_MUTUALS_TOOLTIP.format({ appNames: m.format(P.map((e) => e.name)) }),
														position: 'top',
														children: (e) =>
															(0, o.jsxs)('div', {
																...e,
																className: s()(h.moreGuilds, A[g]),
																children: ['+', N]
															})
													})
												: null
										]
									})
								: (0, o.jsx)(u.CompassIcon, {
										size: 'custom',
										color: 'currentColor',
										width: g,
										height: g,
										className: h.defaultIcon
									})
					}),
					null != Z
						? (0, o.jsx)(u.Text, {
								variant: _,
								color: 'header-secondary',
								children: Z
							})
						: null
				]
			});
}
