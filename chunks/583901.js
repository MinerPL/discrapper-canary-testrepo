n.d(t, {
	DR: function () {
		return g;
	},
	bD: function () {
		return T;
	},
	oK: function () {
		return m;
	}
}),
	n(627341);
var r = n(735250);
n(470079);
var i = n(120356),
	a = n.n(i),
	s = n(278074),
	o = n(442837),
	l = n(692547),
	u = n(780384),
	c = n(481060),
	d = n(210887),
	_ = n(47760),
	E = n(798728),
	f = n(981631),
	h = n(689938),
	p = n(901487);
function m() {
	return (0, r.jsx)('div', {
		className: p.selectionCircle,
		children: (0, r.jsx)(c.CircleCheckIcon, {
			size: 'md',
			color: 'currentColor',
			className: p.checkmarkCircle,
			colorClass: p.checkmark,
			secondaryColor: l.Z.unsafe_rawColors.WHITE_500.css
		})
	});
}
function I(e) {
	let { name: t, className: n, style: i, onSelect: s, isSelected: o = !1, tabIndex: l, children: u, showBadge: d, showLockedBadge: _ } = e,
		E = (0, c.useRadioItem)({
			label: t,
			isSelected: o
		});
	return (0, r.jsx)(c.Tooltip, {
		text: t,
		children: (e) =>
			(0, r.jsxs)('div', {
				className: p.themeSelectionContainer,
				children: [
					(0, r.jsx)(c.Clickable, {
						...e,
						...E,
						tabIndex: null != l ? l : E.tabIndex,
						className: a()(p.themeSelection, { [p.selected]: o }, n),
						style: i,
						onClick: o ? f.dG4 : s,
						children: u
					}),
					o && (0, r.jsx)(m, {}),
					!o && d && (0, r.jsx)('div', { className: p.redCircle }),
					_ &&
						(0, r.jsx)('div', {
							className: p.lockedBadgeContainer,
							children: (0, r.jsx)(c.LockIcon, {
								className: p.lockedBadge,
								color: 'currentColor'
							})
						})
				]
			})
	});
}
function T(e) {
	let { theme: t, isSelected: n, onSelect: i } = e,
		_ = (0, o.e7)([d.Z], () => d.Z.systemPrefersColorScheme),
		m = (e) => ((0, u.ap)(e) ? l.Z.unsafe_rawColors.PRIMARY_600.css : l.Z.unsafe_rawColors.WHITE_500.css),
		T = (0, s.EQ)({
			theme: t,
			systemPrefersColorScheme: _
		})
			.with(
				{
					theme: 'system',
					systemPrefersColorScheme: f.BRd.LIGHT
				},
				() => p.lightIcon
			)
			.with({ theme: f.BRd.LIGHT }, () => p.lightIcon)
			.with({ theme: f.BRd.DARK }, () => p.darkIcon)
			.with({ theme: f.BRd.DARKER }, () => p.darkerIcon)
			.with({ theme: f.BRd.MIDNIGHT }, () => p.midnightIcon)
			.otherwise(() => p.darkIcon),
		g = (0, s.EQ)(t)
			.with(f.BRd.LIGHT, () => h.Z.Messages.THEME_LIGHT)
			.with(f.BRd.DARK, () => h.Z.Messages.THEME_DARK)
			.with(f.BRd.DARKER, () => 'Darker')
			.with(f.BRd.MIDNIGHT, () => h.Z.Messages.THEME_MIDNIGHT)
			.with('system', () => h.Z.Messages.THEME_SYSTEM)
			.exhaustive(),
		S = (0, c.useRedesignIconContext)().enabled;
	return (0, r.jsx)(I, {
		onSelect: i,
		isSelected: n,
		name: g,
		className: a()(p.defaultThemeSelection, T),
		children:
			'system' === t &&
			(0, r.jsx)('div', {
				className: p.iconWrapper,
				children: S ? (0, r.jsx)(c.RefreshIcon, { color: m(_) }) : (0, r.jsx)(E.Z, { fill: m(_) })
			})
	});
}
function g(e) {
	let { preset: t, isSelected: n, disabled: i, tabIndex: s, onSelect: o, showBadge: l, showLockedBadge: c } = e,
		{ colors: d, angle: E, theme: f } = t,
		h = (0, _.VK)({
			colors: d,
			angle: E
		});
	return (0, r.jsx)(I, {
		onSelect: i ? void 0 : o,
		isSelected: n,
		name: t.getName(),
		className: a()([i ? p.disabled : null, (0, u.wj)(f) ? p.darkOverlay : p.lightOverlay]),
		style: { background: 'var(--bg-overlay), '.concat(h) },
		tabIndex: s,
		showBadge: l,
		showLockedBadge: c
	});
}
